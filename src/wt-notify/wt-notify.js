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
            this.$get = ['$http', '$document', '$compile', '$rootScope', '$controller', '$templateCache', '$q', '$injector', '$position', '$timeout',
                function ($http, $document, $compile, $rootScope, $controller, $templateCache, $q, $injector, $position, $timeout) {
                    function _notify(p) {
                        var options = this.options = angular.extend({}, defaults, configOptions, p);
                        var myNotify = new Notify(options.title, options);
                        myNotify.show();
                    }

                    return {
                        notify           : function (p) {
                            return new _notify(p);
                        },
                        needsPermission  : Notify.needsPermission,
                        requestPermission: Notify.requestPermission,
                        isSupported      : Notify.isSupported,
                        permissionLevel  : Notify.permissionLevel,
                        checkPermission  : function () {
                            var self = this;
                            self.hasPermission = true;
                            self.sucess = function (_fun) {
                                _fun ? _fun() : null;
                                return self;
                            };
                            self.error = function (_fun) {
                                _fun ? _fun() : null;
                                return self;
                            };
                            self.then = function (_fun) {
                                _fun ? _fun() : null;
                                return self;
                            };

                            if (Notify.needsPermission) {
                                Notify.requestPermission(function () {
                                    self.hasPermission = true;
                                    self.sucess();
                                }, function () {
                                    self.hasPermission = false;
                                    self.error();
                                });
                            } else {
                                self.sucess();
                            }
                            self.then();

                            return self;
                        }
                    };
                }
            ];
        }]);
})();