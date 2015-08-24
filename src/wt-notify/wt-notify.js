(function () {
    'use strict';
    angular.module('wt.genius')
        .provider('$wtNotify', [function () {
            var defaults = {};
            var configOptions = {};
            this.config = function (value) {
                configOptions = value;
            };
            this.$get = ['$http',
                '$document',
                '$compile',
                '$rootScope',
                '$controller',
                '$templateCache',
                '$q',
                '$injector',
                '$position',
                '$timeout',
                function ($http, $document, $compile, $rootScope, $controller, $templateCache, $q, $injector, $position, $timeout) {
                    function _notify(p) {
                        var self = this,
                            options = this.options = angular.extend({}, defaults, configOptions, p);
                    }

                    _notify.prototype.needsPermission = function () {
                        return Notify.needsPermission;
                    };
                    _notify.prototype.requestPermission = function () {
                        return Notify.requestPermission;
                    };
                    _notify.prototype.isSupported = function () {
                        return Notify.isSupported;
                    };
                    _notify.prototype.permissionLevel = function () {
                        return Notify.permissionLevel;
                    };
                    _notify.prototype.checkPermission = function () {
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
                    };
                    return {
                        notify: function (p) {
                            return new _notify(p);
                        }
                    };
                }
            ];
        }]);

})();