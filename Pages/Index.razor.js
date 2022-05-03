export function startTyping(stringsToType) {
    var typed = new Typed('.element', {
        //strings: ["Mark Preston.", "A Software Engineer."],
        strings: stringsToType,
        typeSpeed: 120,
        backSpeed: 60,
        backDelay: 3000,
        loop: true
    });
}

export function workLoaded() {
    var $container = $('.work-filter');

    $container.isotope({
        filter: '*',
        layoutMode: 'masonry',
        animationOptions: {
            duration: 750,
            easing: 'linear'
        }
    });

    // layout Isotope after each image loads
    $container.imagesLoaded().progress(function () {
        $container.isotope('layout');
    });

    var $filter = $('#menu-filter');
    $filter.find('a').on("click", function () {
        var selector = $(this).attr('data-filter');
        $filter.find('a').removeClass('active');
        $(this).addClass('active');
        $container.isotope({
            filter: selector,
            animationOptions: {
                animationDuration: 750,
                easing: 'linear',
                queue: false,
            }
        });
        return false;
    });
}