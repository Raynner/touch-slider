
(function ($) {

    $.fn.sliderTouch = function (params) {
        
        //merge default and user parameters
        params = $.extend({ nav: true },params);

        this.each(function () {
            //config varr
            var $this = $(this);
            $this.wrap = $this.children(".slider-wrap");
            var len = $this.wrap.children().length;
            var navigation = new Navigation($this, len);
            var totalwidth = 0;


            //show navigation element
            if (params.nav == true) {
                navigation.show();
            }

            //update sliders width to main div width
            fixSlidersIn($this.wrap, $this.width());
            $(window).resize(function () {
                //fixSlidersIn($this.wrap, $this.width());
                totalwidth=0;
                $this.wrap.children().each(function () {
                    totalwidth += parseFloat($(this).width());
                    $(this).width($this.width());
                    $(this).css("float", "left");
                });
                $this.wrap.width(totalwidth);
                
                navigation.keepPos();
            });

            //put sliders side by side after fix divs width
            $this.wrap.children().each(function () {
                totalwidth += parseFloat($(this).width());
                $(this).css("float", "left");
            });
            $this.wrap.width(totalwidth);


            $(this).on("swipeleft", function () {
                navigation.next();
            });

            $(this).on("swiperight", function () {
                navigation.prev();
            });


        });
        return this;
    };

    
    //update all objects width
    function fixSlidersIn(objWrap,withWidth) {
        objWrap.children().each(function () {
            $(this).width(withWidth);
        });
    }

    //Navigation object
    function Navigation(slider, len) {
        
        //properties
        var $this = this;
        $this.index = 0;
        var nav = $('<nav></nav>');
        var ul = $('<ul></ul>');


        //methods
        function addNav() {
            slider.after(nav.append(ul));

            for (var i = 0; i < len; i++) {
                var li = $('<li></li>');
                ul.append(li);
            }
            nav.hide();
        }
        addNav();

        $this.changePos = function () {
            ul.children("li").removeClass("on");
            ul.children("li:eq(" + $this.index + ")").addClass("on");
        }
        $this.changePos();

        ul.children("li").bind('click', function () {
            $this.index = $(this).index();
            $this.changePos($this.index);
            var elem = slider.wrap.children("div:eq(" + $this.index + ")");
            Transition(elem)
        });

        $this.show = function () {
            nav.show();
        };
        
        $this.next = function(){
            if ($this.index < len - 1) {
                $this.index++
                $this.changePos();
                var elem = slider.wrap.children("div:eq(" + $this.index + ")");
                Transition(elem);
            };
        }
        $this.prev = function(){
            if ($this.index > 0) {
                $this.index--;
                $this.changePos();
                var elem = slider.wrap.children("div:eq(" + $this.index + ")");
                Transition(elem);
            }
        }
        
        $this.keepPos = function(){
            var elem = slider.wrap.children("div:eq(" + $this.index + ")");
            Transition(elem);
        }
        
    }

    //animate slider
    function Transition(elem) {
        var elemOffset = elem.offset().left - elem.parent().offset().left;
        elem.parent().parent().stop().animate({ scrollLeft: elemOffset }, 600);
    }


})(jQuery);