$(document).ready(function () {
    //add nicescroll 
    $("body").niceScroll({
        cursorcolor: '#ec1c23',
        cursorborder: '2px solid #fff'
    });

    //adjust slider height
    var winH = $(window).height(),
        uppreH = $('.upper-bar').innerHeight(),
        navH = $('.navbar').innerHeight();
    $('.slider, .carousel-item').height(winH - (uppreH + navH));

    $(window).resize(function () {
        $('.slider, .carousel-item').height(winH - (uppreH + navH));
    });

    //featured work shuffle 
    $('.featured-work ul li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');

        if ($(this).data('class') === 'all') {
            $('.shuffle-imgs .col-md').css('opacity', '1');
        } else {
            $('.shuffle-imgs .col-md').css('opacity', '.08');
            $($(this).data('class')).parent().css('opacity', '1')
        }
    });
});