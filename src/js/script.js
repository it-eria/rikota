//= vendors/jquery-3.3.1.min.js
//= vendors/bootstrap.min.js
//= vendors/slick.min.js
//= vendors/fontawesome-all.min.js
//= vendors/owl.carousel.min.js
//= vendors/aos.js

var didScroll;
var lastScrollTop = 100;
var delta = 5;
var navbarHeight = $('#navb').outerHeight();

$(window).scroll(function (event) {
    didScroll = true;
});

setInterval(function () {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    if (Math.abs(lastScrollTop - st) <= delta)
        return;

    if (st > lastScrollTop && st > navbarHeight) {

        $('#navb').removeClass('menu-scroll').addClass('nav-up');
    } else {

        if (st + $(window).height() < $(document).height()) {
            $('#navb').removeClass('nav-up').addClass('menu-scroll');
        }
    }

    lastScrollTop = st;
}

$(function(){
    var $searchlink = $('#searchtoggl i');
    var $searchbar  = $('#searchbar');

    $('#search-item a').on('click', function(e){
        e.preventDefault();

        if($(this).attr('id') == 'searchtoggl') {
            if(!$searchbar.is(":visible")) {
                // if invisible we switch the icon to appear collapsable
                $searchlink.removeClass('fa-search').addClass('fa-search-minus');
            } else {
                // if visible we switch the icon to appear as a toggle
                $searchlink.removeClass('fa-search-minus').addClass('fa-search');
            }

            $searchbar.slideToggle(300, function(){
                // callback after search bar animation
            });
        }
    });

    $('#searchform').submit(function(e){
        e.preventDefault(); // stop form submission
    });
});


$(function() {
    $(".additional-item").slice(0, 4).show();
    $("#loadMore").on('click', function(e) {
        e.preventDefault();
        $(".additional-item:hidden").slice().show();
        if ($(".additional-item:hidden").length == 0) {
            $("#loadLess").show();
            $("#loadMore").hide();
        }
    });

    $("#loadLess").on('click', function(e) {
        e.preventDefault();
        $('.additional-item:not(:lt(4))').hide();
        $("#loadMore").show();
        $("#loadLess").hide();
    });
});

$('.achievement-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true

            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});



$(function() {
    $('.owl-carousel.testimonial-carousel').owlCarousel({
        nav: true,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
        dots: false,
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        smartSpeed:450,
        responsive: {
            0: {
                items: 1
            },
            750: {
                items: 2
            }
        }
    });
});


$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [

        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 615,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 432,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]

});



$(document).ready(function($){

    var full = $('#fullscreen');
    $(full).data('state','open');
    $('a.clicky').click(function(){
        if($(full).data('state') == 'open'){
            $(full).fadeIn(300);
            $(full).data('state','close');
            //console.log($(full).data('state') );
        }
    });
    $('.close').click(function(){
        if($(full).data('state') == 'close'){
            $(full).fadeOut();
            $(full).data('state','open');
            //console.log($(full).data('state') );
        }
    });
});



AOS.init({
    duration: 1200
});


$('.before-after-slider').slick({
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
});