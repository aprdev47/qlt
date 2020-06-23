/*!
    * Start Bootstrap - Agency v6.0.2 (https://startbootstrap.com/template-overviews/agency)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
    */
   
    (function ($) {
        
    "use strict"; // Start of use strict
    var images = ["01.jpg", "02.jpg","03.jpg", "04.jpg"];
    var tag_lines =["Quarter Litre Twins","Experience the ride","Rider Brotherhood","Learn from the pros"]
    $(function () {
        var i = 0;
        var textWrapper = document.querySelector('.ml2');
        textWrapper.innerHTML = tag_lines[0];
        $(".masthead").css("background-image", "url(assets/img/header_bg/" + images[i] + ")");
        animate_head_text()
        setInterval(function () {
            i++;
            if (i == images.length) {
                i = 0;
            }
            $(".masthead").fadeOut("slow", function () {
                $(this).css("background-image", "url(assets/img/header_bg/" + images[i] + ")");
                textWrapper.innerHTML = tag_lines[i];
                $(this).fadeIn("slow");
                animate_head_text()
            });
           
        }, 5000);
    });
    function animate_head_text(){
        var textWrapper = document.querySelector('.ml2');
       
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
        anime.timeline({loop: false})
        .add({
            targets: '.ml2 .letter',
            scale: [2,1],
            opacity: [0,1],
            translateZ: 0,
            easing: "easeOutExpo",
            duration: 950,
            delay: (el, i) => 70*i
        });
    }
  /* background-image: url("../assets/img/header-bg.jpg"); */
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 72,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 74,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
})(jQuery); // End of use strict
