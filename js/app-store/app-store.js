/**
 * Created by Cao on 2017/6/11.
 */

let X_PIXELS = 768;
let XX_PIXELS = 992;
let XXX_PIXELS = 1200;

function appStoreLoad() {
    $('.nav-bottom .nav-item').click(function () {
        removeNavActive();
        addNavActive($(this));

    });
    $('#slide-content').owlCarousel(
        {
            dots: false,
            autoPlay: true,
            loop: true,
            pagination: false,
            mergeFit: true,
            autoplayHoverPause: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                992: {
                    items: 2,
                },
                1200: {
                    items: 2,
                },
                1400: {
                    items: 3,
                },
                1600: {
                    items: 3,
                }
            },
        }
    );
    $('div.contain-kind div.owl-carousel').owlCarousel(
        {
            dots: false,
            stagePadding: 50,
            // merge:true,
            margin: 10,
            // responsiveClass: true,
            responsive: {
                0: {
                    items: 3,
                    stagePadding:38
                },
                768: {
                    items: 4,
                    stagePadding:49
                },
                992: {
                    items: 5,
                    stagePadding:60
                },
                1200: {
                    items: 6,
                    stagePadding:70
                },
                1400: {
                    items: 7,
                    stagePadding:80
                },
                1600: {
                    items: 8,
                    stagePadding:100
                }
            },
        }
    );
}

function removeNavActive() {
    $('.nav-bottom .nav-item').removeClass('active');
    $('.contain .contain-item').removeClass('active');
}

function addNavActive(JQueryObj) {
    JQueryObj.addClass('active');
    let target_id = JQueryObj.data('target');
    $('#' + target_id).addClass('active');
    if (target_id === 'search-page') {
        $('#nav-top #nav-top-title').removeClass('active');
        $('#nav-top #search-input').addClass('active');
    }
    else {
        $('#nav-top #search-input').removeClass('active');
        $('#nav-top #nav-top-title').addClass('active');
        $('#nav-top .nav-item.active p').text($(JQueryObj.find('p')[1]).text());
    }
    containSizeControl();
}
