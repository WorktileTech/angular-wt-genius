!function(e,i){"function"==typeof define&&define.amd?define(["notify"],i):"object"==typeof exports?module.exports=i(require("notify")):e.wtGenius=i(e.Notify)}(this,function(e){var i=angular.module("wt.genius",[]);return angular.module("wt.genius").provider("$wtNotify",[function(){var i={title:"Hey, 我在这里!",body:"",icon:"",tag:"",lang:"en",timeout:2,notifyShow:function(){},notifyClose:function(){},notifyClick:function(){},notifyError:function(){}},n={};this.config=function(e){n=e},this.$get=[function(){function t(t){var o=this.options=angular.extend({},i,n,t),r=new e["default"](o.title,o);s.needsPermission?s.requestPermission(function(){r.show()}):r.show()}var o,s=e["default"];return o={notify:function(e){return new t(e)},notSetPermission:"default"==s.permissionLevel,checkPermission:function(e,i,n){if(s.needsPermission){if(!s.isSupported())return;s.requestPermission(function(){o.permissionLevel="granted",o.needsPermission=!1,e&&e()},function(){o.permissionLevel="denied",o.needsPermission=!0,i&&i()},function(){o.notSetPermission=!0})}else o.permissionLevel="granted",e&&e();o.notSetPermission=!1,n&&n()},needsPermission:s.needsPermission,requestPermission:s.requestPermission,isSupported:s.isSupported,permissionLevel:s.permissionLevel}}]}]),angular.module("wt.genius").provider("$wtRetina",[function(){var e={};this.config=function(i){e=i},this.$get=[function(){var e="(min--moz-device-pixel-ratio: 1.5),                                        (-o-min-device-pixel-ratio: 3/2),                                        (-webkit-min-device-pixel-ratio: 1.5),                                        (min-device-pixel-ratio: 1.5),                                        (min-resolution: 144dpi),                                        (min-resolution: 1.5dppx)",i=window.matchMedia(e);return{isRetina:i.matches,media:i.media}}]}]),i});