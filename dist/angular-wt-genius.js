angular.module('wt.genius', []);
/**
 * $wtNotify
 *
 * Version: 1.1.3 - 2016-09-23
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
                var notify = Notify.default;

                function _notify(p) {
                    var options = this.options = angular.extend({}, defaults, configOptions, p);
                    var myNotify = new notify(options.title, options);
                    if (notify.needsPermission) {
                        notify.requestPermission(function () {
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
                    notSetPermission : notify.permissionLevel == 'default',
                    checkPermission  : function (onSuccess, onError, onThen) {
                        //验证权限，设置开启与禁止
                        if (notify.needsPermission) {
                            if (!notify.isSupported()) {
                                return;
                            }
                            notify.requestPermission(function () {
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
                        onThen && onThen();
                    },
                    needsPermission  : notify.needsPermission,
                    requestPermission: notify.requestPermission,
                    isSupported      : notify.isSupported,
                    permissionLevel  : notify.permissionLevel
                };
                return result;
            }];
        }]);
})();
/**
 * $wtRetina
 *
 * Version: 1.0.0 - 2015-10-19
 * Anthor: zhenshuai
 */
(function () {
    'use strict';
    angular.module('wt.genius')
        .provider('$wtRetina', [function () {
            var defaults = {
                onchange: function () {
                    //console.log('dpi 切换事件');
                }
            };
            var configOptions = {};
            this.config = function (value) {
                configOptions = value;
            };
            this.$get = [
                function () {
                    var mediaQuery = "(min--moz-device-pixel-ratio: 1.5),\
                                        (-o-min-device-pixel-ratio: 3/2),\
                                        (-webkit-min-device-pixel-ratio: 1.5),\
                                        (min-device-pixel-ratio: 1.5),\
                                        (min-resolution: 144dpi),\
                                        (min-resolution: 1.5dppx)";

                    var matchObj = window.matchMedia(mediaQuery);
                    return {
                        isRetina: matchObj.matches,
                        media   : matchObj.media
                    };
                }
            ];
        }]);
})();