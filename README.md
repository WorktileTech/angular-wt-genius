angular-wt-genius
=========

Worktile 项目启动工具包，gulp打包，less编译。

### bower 安装
```
bower install angular-wt-genius
```

### 1.wt-genius-notify
angular provider 封装第三方插件 [notify.js](https://github.com/alexgibson/notify.js)。

```
// 全局配置
$wtNotifyProvider.config({
    title: 'Worktile 桌面通知',
    icon : '/img/wt-logo.png'
});
```

```
// 插件参数设置
$wtNotify.notify({
    title: '桌面通知',
    body : 'Hey, 我在这里!'
});
```

```
// 请求权限
$wtNotify.checkPermission(function () {
    //success
}, function () {
    //error
}, function () {
    //then
});
```

##### Parameters
-------------------
* title: (string) - 标题 (必填)
* body: (string) - 内容
* icon: (string) - 图标
* tag: (string) - 标识重复通知
* lang: (string) - 文本格式 (default: `en`)
* timeout: (integer) - 显示延时几秒关闭 (default: `2`)
* notifyShow: (function) - 通知显示回调
* notifyClose: (function) - 通知关闭回调
* notifyClick: (function) - 通知点击回调
* notifyError: (function) - 通知错误回调


##### Static methods and properties
-----------------------------
* `$wtNotify.notify` - 初始化，并显示通知(没有设置权限时，自动请求权限)
  
* `$wtNotify.notSetPermission` - Boolean - 未设置通知权限
  
* `$wtNotify.checkPermission(onPermissionGrantedCallback, onPermissionDeniedCallback, onThenCallback)` - requestPermission 的封装方法，当没有设置权限时，自动请求权限。

* `$wtNotify.requestPermission(onPermissionGrantedCallback, onPermissionDeniedCallback)` - 请求设置权限

* `$wtNotify.isSupported` - Boolean - 浏览器支持

* `$wtNotify.needsPermission` - Boolean - 没有权限 (包括浏览器支持、未设置权限和禁止权限)

* `$wtNotify.permissionLevel` - (granted, denied or default) - 获取当前权限。

