angular-wt-genius
=========

Worktile 项目启动工具包。

### 1.wt-genius-notify
angular provider 封装第三方插件 [notify.js](https://github.com/alexgibson/notify.js)。

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

##### Parameters
-------------------
* title: (string) - 标题 (必填)
* body: (string) - 内容
* icon: (string) - 图标
* tag: (string) - 标识重复通知
* lang: (string) - 文本格式 (default: `en`)
* timeout: (integer) - 显示延时几秒关闭 (default: 2)
* notifyShow: (function) - 通知显示回调
* notifyClose: (function) - 通知关闭回调
* notifyClick: (function) - 通知点击回调
* notifyError: (function) - 通知错误回调


##### Static methods and properties
-----------------------------
* `$wtNotify.notify` - 初始化方法(没有设置权限时，自动请求权限)
  
* `$wtNotify.notSetPermission` - Boolean - 是否设置设置选前
  
* `$wtNotify.checkPermission(onPermissionGrantedCallback, onPermissionDeniedCallback, onThenCallback)` - requestPermission 的封装方法，当没有设置权限时，自动请求权限。

* `$wtNotify.requestPermission(onPermissionGrantedCallback, onPermissionDeniedCallback)` - requests permission from the user if needed and handles permission callbacks.

* `$wtNotify.isSupported` - Boolean property to test for Web Notifications API browser support

* `$wtNotify.needsPermission` - Boolean property to check if permission is needed for the user to receive notifications.

* `$wtNotify.permissionLevel` - shows the user's current permission level (granted, denied or default), returns null if notifications are not supported.

