/**
 * Created by Cao on 2017/5/16.
 */

$(document).ready(function () {
    console.log('check-hash.js is ready');
});

function checkHashLoad() {
    openPageByHash(true);
}


window.onhashchange = function () {
    openPageByHash(false);
};

function openPageByHash(isFirst) {
    let anchor = window.location.hash;
    let app_name = anchor.substring(1);
    if (anchor === '#') {
        return;
    }
    // 已登录
    if(isLogged()){
        if(anchor === ''){
            if(isFirst){
                // appAdaptScreen();
                loginToIndex();
            }
            else {
                showAppList();
                hideAppsFormFaded();
            }
        }
        else  {
            if (isFirst) {
                appAdaptScreen();
                openApp(app_name, true);
            }
            else {
                openApp(app_name);
            }
        }
    }
    // 未登录
    else {
        appAdaptScreen();
        showLoginForm();
    }
}




