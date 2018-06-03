// 立即建立 IIFE (Immediately Invoked Function Expression) 是一個定義完馬上就執行的 JavaScript function


(function (document, window, index) {

    "use strict";

    var nav = function (el, options) {

        function nav(el, options) {
            var i;

            this.options = {
                openPos: "relative",
                navClass: "nav-collapse",
                navActiveClass: "js-nav-active",
                jsClass: "js",
                init: function () {
                },
                open: function () {
                },
                close: function () {
                }
            };

            for (i in options) {
                this.options[i] = options[i];
            }
        }

        return new nav(el, options);
    };

    window.nav = nav;

})(document, window, 0);