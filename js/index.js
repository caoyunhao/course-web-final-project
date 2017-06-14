/**
 * Created by Cao on 2017/5/14.
 */

$(document).ready(function () {
    console.log('index.js is ready');
});

function indexLoad() {
    $('#nav_label_my_app').click(function () {
        activeMyAppLabel();
        raiseAppStoreForm();
    });
    $('#nav_label_app_store').click(function () {
        activeAppStoreLabel();
        dropAppStoreForm();
    });
    $('#nav_toggle').click(function () {
        clickNavToggle();
    });
    $('#app_pages').owlCarousel({
        items: 1,
        dots: true,
    });
    addTransitionEndEvent($('#app_store_form').get(0), function () {
        let store = $('#app_store_form');
        store.css({
            '-webkit-transition':'',
        });
        if (store.css('top') !== '52px'){
            let contain = $('#contain');
            let height = contain.get(0).offsetHeight;
            store.css({
                'visibility':'hidden',
                'top': -height + 'px'
            });
        }
    })
}

function loginToIndex() {
    if (postData()) {
        appAdaptScreen();
        logCookie();
        setTimeout('showAppList()', 500);
    }
}

function openApp(name, isOnly = false) {
    if (!isOnly) {
        hideAppListFaded();
    }
    removeAllApps();
    let target_app = $('#' + name);
    setiframeSize(target_app.get(0));
    target_app.css('left', '0');
    target_app.css('top', '0');
    document.title = name;
    showAppsForm();
}

function removeAllApps() {
    let apps = $('.app-iframe');
    apps.css('left', '-10000px');
    apps.css('top', '-10000px');
}

function activeMyAppLabel() {
    removeAllActive();
    $('#nav_label_my_app').addClass('active');
}

function activeAppStoreLabel() {
    removeAllActive();
    $('#nav_label_app_store').addClass('active');
}

function removeAllActive() {
    $('li[id^=\'nav_label\']').removeClass('active');
}

function clickNavToggle() {
    if ($('#navbar_collapse').hasClass('in')) {
        $('#nav_toggle').removeClass('active');
    } else {
        $('#nav_toggle').addClass('active');
    }
}

function dropAppStoreForm() {
    let form = $('#app_store_form');
    let list = $('#app_list');
    let width = list.get(0).offsetWidth;
    let height = list.get(0).offsetHeight;
    // form.css({
    //     'top': -height + 'px',
    //     'width':width + 'px',
    //     'height':(height + 52) + 'px',
    // });
    form.css('visibility', 'visible');
    form.css('-webkit-transition', '500ms ease-out');
    // form.css('-webkit-transform', 'translateX(' + 0 + 'px) ' +
    //     'translateY(' + (height) + 'px) ' +
    //     'translateZ(0px) ')
    form.css('top', '52px');
}

function raiseAppStoreForm() {
    let form = $('#app_store_form');
    form.css('-webkit-transition', '500ms ease-out');
    // form.css('-webkit-transform', 'translateX(' + 0 + 'px) ' +
    //     'translateY(' + 0 + 'px) ' +
    //     'translateZ(0px) ')
    let height = form.css('height');
    form.css('top', '-' + height);
}


