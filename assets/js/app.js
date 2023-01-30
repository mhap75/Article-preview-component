$(document).ready(function () {

    $('.content_footer').on('click', '#shrbtn', function () {

        if ($('.social-share').css('display') === 'none') {
            $('.social-share').fadeIn(600);
            $('.social-share').css('display', 'flex').animate({
                opacity: 1
            }, 650);
        } else {
            $('.social-share').fadeOut(600);
            $('.social-share_mobile').fadeOut(600);
        }
        if ($('.social-share_mobile').css('display') === 'none') {
            $('.social-share_mobile').show(600);
            $('.social-share_mobile').css('display', 'flex').animate({
                bottom: 0
            }, 650);
        } else {
            $('.social-share').fadeOut(600);
            $('.social-share_mobile').fadeOut(600);
        }

    });

    $('.body').on("mousedown", function () {

        $('.social-share, .social-share_mobile').fadeOut(600);

    });

});