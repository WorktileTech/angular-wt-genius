angular.module("wt.genius",[]),function(){"use strict";angular.module("wt.genius").provider("$wtNotify",[function(){var i={title:"Hey, 我在这里!",body:"",icon:"",tag:"",lang:"en",timeout:2,notifyShow:function(){},notifyClose:function(){},notifyClick:function(){},notifyError:function(){}},e={};this.config=function(i){e=i},this.$get=["$http","$document","$compile","$rootScope","$controller","$templateCache","$q","$injector","$position","$timeout",function(n,t,o,s,r,u,c,f,m,a){function d(n){var t=this.options=angular.extend({},i,e,n),o=new Notify(t.title,t);Notify.needsPermission?Notify.requestPermission(function(){o.show()}):o.show()}var l;return l={notify:function(i){return new d(i)},notSetPermission:"default"==Notify.permissionLevel,checkPermission:function(i,e,n){var i=i||function(){},e=e||function(){},n=n||function(){};Notify.needsPermission?Notify.requestPermission(function(){l.permissionLevel="granted",l.needsPermission=!1,i()},function(){l.permissionLevel="denied",l.needsPermission=!0,e()}):(l.permissionLevel="granted",i()),l.notSetPermission=!1,n()},needsPermission:Notify.needsPermission,requestPermission:Notify.requestPermission,isSupported:Notify.isSupported,permissionLevel:Notify.permissionLevel}}]}])}(),function(){"use strict";angular.module("wt.genius").provider("$wtRetina",[function(){var i={};this.config=function(e){i=e},this.$get=[function(){var i="(min--moz-device-pixel-ratio: 1.5),                                        (-o-min-device-pixel-ratio: 3/2),                                        (-webkit-min-device-pixel-ratio: 1.5),                                        (min-device-pixel-ratio: 1.5),                                        (min-resolution: 144dpi),                                        (min-resolution: 1.5dppx)",e=window.matchMedia(i);return{isRetina:e.matches,media:e.media}}]}])}();