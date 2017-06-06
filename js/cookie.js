/**
 * Created by Cao on 2017/5/23.
 */

$(document).ready(function () {
    console.log('cookie.js is ready.');
    logCookie();
});

function isLogged() {
    return getCookie('user_id') !== '';
}

function logCookie() {
    console.log('cookie = [' + document.cookie + ']');
}

function setCookie(cname, cvalue, exdays = 0.1) {
    let d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
    }
    return "";
}
