

(function ($) {
    "use strict";
    var mainApp = {
        main_fun: function () {
            /*实现平滑滚动*/
            $(function () {
                $('.szl a').bind('click', function (event) {
                    var $anchor = $(this);
                    $('html, body').animate({
                        scrollTop: $($anchor.attr('href')).offset().top
                    },1000);
                });
            });
            /*====================================
            技能部分
           ======================================*/
            $(function() {
                $('.myStat').circliful();
            });

            /*====================================
            个人资料部分  提示
          ======================================*/
            $(function () {
                $('a[title]').tooltip();
            });
            /*====================================
            wow动画效果
            ======================================*/
            new WOW().init();
        },

        initialization: function () {
            mainApp.main_fun();

        }

    }
    // Initializing //

    $(document).ready(function () {
        mainApp.main_fun();
    });

}(jQuery));
