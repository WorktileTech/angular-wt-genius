/**
 * $wtNotify
 *
 * Version: 1.0.0 - 2015-08-25
 * Anthor: zhenshuai
 */
(function () {
    'use strict';
    angular.module('wt.genius')
        .provider('$wtNotify', [function () {
            var defaults = {
                title      : 'Hey, 我在这里!',
                body       : '',
                icon       : '',
                tag        : '',
                lang       : 'en',
                timeout    : 2,
                notifyShow : function () {
                },
                notifyClose: function () {
                },
                notifyClick: function () {
                },
                notifyError: function () {
                }
            };
            var configOptions = {};
            this.config = function (value) {
                configOptions = value;
            };
            this.$get = [function () {
                var result;

                function _notify(p) {
                    var options = this.options = angular.extend({}, defaults, configOptions, p);
                    var myNotify = new Notify(options.title, options);
                    if (Notify.needsPermission) {
                        Notify.requestPermission(function () {
                            myNotify.show();
                        });
                    } else {
                        myNotify.show();
                    }
                }

                result = {
                    notify           : function (p) {
                        //初始化，默认去验证权限
                        return new _notify(p);
                    },
                    notSetPermission : Notify.permissionLevel == 'default',
                    checkPermission  : function (onSuccess, onError, onThen) {
                        //验证权限，设置开启与禁止
                        if (Notify.needsPermission) {
                            Notify.requestPermission(function () {
                                result.permissionLevel = 'granted';
                                result.needsPermission = false;
                                onSuccess && onSuccess();
                            }, function () {
                                result.permissionLevel = 'denied';
                                result.needsPermission = true;
                                onError && onError();
                            }, function () {
                                result.notSetPermission = true;
                            });
                        } else {
                            result.permissionLevel = 'granted';
                            onSuccess && onSuccess();
                        }
                        result.notSetPermission = false;
                        onThen();
                    },
                    needsPermission  : Notify.needsPermission,
                    requestPermission: Notify.requestPermission,
                    isSupported      : Notify.isSupported,
                    permissionLevel  : Notify.permissionLevel
                };
                return result;
            }];
        }]);
})();