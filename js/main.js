const responsive = {
    0: {
        items: 1
    },
    560: {
        items: 2
    },
    960: {
        items: 3
    },
}
$(document).ready(function() {
    $nav = $('.nav');
    $toogleCollapse = $('.toogle-collapse');
    /**Click event on toogle menu */
    $toogleCollapse.click(function() {
        $nav.toggleClass('collapse');
    });
    /**Owl Carousel for blog*/
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText: [$('.owl-nagivation .owl-nav-prev'), $('.owl-nagivation .owl-nav-next')],
        responsive: responsive,
    });
    /**AOS */
    AOS.init();
});