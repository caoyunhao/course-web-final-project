/**
 * Created by Cao on 2017/6/12.
 */

$(document).ready(function () {
    console.log('onLoadResize.js is ready !');
    appStoreLoad();
});

if (window.addEventListener) {
    window.addEventListener('load', resizeEvent, false);
    window.addEventListener("resize", resizeEvent, false);
}
else {
    window.addEventListener('onload', resizeEvent);
    window.attachEvent("onresize", resizeEvent);
}

// (function (func) {
//     $(window).load(func).resize(func);
// })(resizeEvent);

function resizeEvent() {
    adaptScreenLoad();
    // console.log('!!!!! !');
}
