angular-wt-genius
=========

Worktile 项目启动工具包。

### wt-genius-notify
angular provider 封装第三方插件 [notify.js](https://github.com/alexgibson/notify.js)。

```

```

```
$wtNotify.notify({
    title: '桌面通知',
    body : 'Hey, 我在这里!'
});
```

```
$wtNotify.checkPermission(function () {
    //success
}, function () {
    //error
});
```

Parameters
-------------------
* title: (string) - Required - notification message title
* body: (string) - notification message body
* icon: (string) - path for icon to display in notification
* tag: (string) - unique identifier to stop duplicate notifications
* lang: (string) - BCP 47 language tag for the notification (default: `en`)
* timeout: (integer) - number of seconds to close the notification automatically
* notifyShow: (function) - callback when notification is shown
* notifyClose: (function) - callback when notification is closed
* notifyClick: (function) - callback when notification is clicked
* notifyError: (function) - callback when notification throws an error


Static methods and properties
-----------------------------
* `$wtNotify.notify` - 初始化(没有设置权限时，自动请求权限)
* `$wtNotify.notSetPermission` - Boolean - 是否设置设置选前
* `$wtNotify.checkPermission(onPermissionGrantedCallback, onPermissionDeniedCallback, onThenCallback)` - requestPermission 的封装方法，当没有设置权限时，自动请求权限。
* `$wtNotify.requestPermission(onPermissionGrantedCallback, onPermissionDeniedCallback)` - requests permission from the user if needed and handles permission callbacks.
* `$wtNotify.isSupported` - Boolean property to test for Web Notifications API browser support
* `$wtNotify.needsPermission` - Boolean property to check if permission is needed for the user to receive notifications.
* `$wtNotify.permissionLevel` - shows the user's current permission level (granted, denied or default), returns null if notifications are not supported.

