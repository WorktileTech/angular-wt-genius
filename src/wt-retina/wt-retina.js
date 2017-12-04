/**
 * $wtRetina
 *
 * Version: 1.0.0 - 2015-10-19
 * Anthor: zhenshuai
 */
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