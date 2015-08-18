angular.module("wt.genius")
    .service('$wtNotify', wtNotify);

wtNotify.$inject = ['$rootScope', '$wtNotifyConfig'];
function wtNotify($rootScope, $wtNotifyConfig) {
    var _self = this;
    _self.p = {
        title      : '桌面通知',
        body       : 'Hey! 我在这里。',
        icon       : '',
        tag        : '',
        lang       : '',
        timeout    : 5,
        notifyShow : function () {
        },
        notifyClose: function () {
        },
        notifyClick: function () {
        },
        notifyError: function () {
        }
    };
    _.assign(_self.p, $wtNotifyConfig);
    _self.needsPermission = Notify.needsPermission;
    _self.requestPermission = Notify.requestPermission;
    _self.isSupported = Notify.isSupported;
    _self.permissionLevel = Notify.permissionLevel;

    //验证是否有权限
    _self.checkPermission = function (callback_sucess, callback_error, callback_then) {
        var _callback_sucess = callback_sucess || function () {
            };
        var _callback_error = callback_error || function () {
            };
        var _callback_then = callback_then || function () {
            };

        var _has_permission = true;
        if (Notify.needsPermission) {
            Notify.requestPermission(function () {
                _has_permission = true;
                _callback_sucess();
            }, function () {
                _has_permission = false;
                _callback_error();
            });
        } else {
            _callback_sucess();
        }
        _callback_then();
        return _has_permission;
    };
    //初始化
    _self.notify = function (p) {
        _.assign(_self.p, p);
        return new Notify(_self.p.title, _self.p);
    };
}