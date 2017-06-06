/**
 * Created by Cao on 2017/5/24.
 */

$(document).ready(function () {
   console.log('form-control.js is ready');
});

function hideAppListFaded() {
    hideFormFadedById('#app_list', '#app_list_hidden', '1.2')
}

function hideAppsFormFaded() {
    hideFormFadedById('#apps_form', '#apps_form_hidden');
}

function hideLoginFormFaded() {
    hideFormFadedById('#login_form', '#login_form_hidden');
}

function showAppList() {
    document.title = 'Yun OS';
    showFormById('#app_list', '#app_list_hidden');
}

function showAppsForm() {
    showFormById('#apps_form', '#apps_form_hidden');
}

function showLoginForm() {
    showFormById('#login_form', '#login_form_hidden')
}

function hideFormFadedById(formId, formHiddenId, scale='0.9') {
    let form = $(formId);
    let form_hidden = $(formHiddenId);
    form.css('-webkit-transition', '500ms ease-out');
    form.css('-webkit-transform', 'scale(' + scale + ')');
    form.css('opacity', '0');
    addTransitionEnd(form.get(0), form_hidden.get(0));
}

function showFormById(formId, formHiddenId) {
    let form = $(formId);
    let form_hidden = $(formHiddenId);
    form_hidden.css('left', '0');
    form_hidden.css('top', '0');
    form.css('-webkit-transition', '500ms ease-out');
    form.css('-webkit-transform', 'scale(1)');
    form.css('opacity', '1');
}

function addTransitionEnd(DOMObj, hiddenDOMObj) {
    if (DOMObj.addEventListener) {
        DOMObj.addEventListener("webkitTransitionEnd", function () {
            checkIfRemove($(DOMObj), $(hiddenDOMObj));
        });
    }
    else {
        DOMObj.attachEvent("webkitTransitionEnd", function () {
            checkIfRemove($(DOMObj), $(hiddenDOMObj));
        });
    }
}

function checkIfRemove(jQueryObj, hiddenJQueryObj) {
    if (jQueryObj.css('opacity') === '0') {
        removeJQueryObj(hiddenJQueryObj);
    }
}

function removeJQueryObj(hiddenJQueryObj) {
    hiddenJQueryObj.css('left', '-10000px');
    hiddenJQueryObj.css('top', '-10000px');
}
