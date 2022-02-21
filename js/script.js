$(document).ready(function () {
    $('.header_burger').click(function (event) {
        $('.header_burger, .header_nav').toggleClass('active');
        $('body').toggleClass('lock');
    });
});
AOS.init({
    offset: 200,
    duration: 1000,
    easing: 'ease-in-quad',
    delay: 100,
});