/**
 * Created by Cao on 2017/5/14.
 */

$(document).ready(function () {
    console.log('index.js is ready');
    $('#nav_label_my_app').click(function () {
        activeMyAppLabel();
    });
    $('#nav_label_app_store').click(function () {
        activeAppStoreLabel();
    });
    $('#nav_toggle').click(function () {
        clickNavToggle();
    });
});

function onLoad() {
    if (isLogged()) {
        loginToIndex();
    } else {
        showLoginForm();
    }
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
    let apps = $('.app-iframe');
    apps.css('left', '-10000px');
    apps.css('top', '-10000px');
    let target_app = $('#' + name);
    target_app.css('left', '0');
    target_app.css('top', '0');
    document.title = name;
    showAppsForm();
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


