/**
 * Created by Cao on 2017/6/7.
 */

$(document).ready(function () {
    let vdkObj = $('#virtual_directionkeys');

    let virtual_directionkeys =
        '<div style="position:absolute; left: 33.333333%; top: 0;width: 33.333333%; height: 50%; padding: 2%; box-sizing: border-box; user-select: none"> <div id="virtual_directionkeys_up" style="background-image: url(../../src/icon/娱乐-快乐男声.jpg); width: 100%; height: 100%"></div></div>'
        + '<div style="position:absolute; left: 0%; top: 50%;width: 33.333333%; height: 50%; padding: 2%; box-sizing: border-box; user-select: none"> <div id="virtual_directionkeys_left" style="background-image: url(../../src/tools/left.svg); width: 100%; height: 100%"></div></div>'
        + '<div style="position:absolute; left: 33.333333%; top: 50%;width: 33.333333%; height: 50%; padding: 2%; box-sizing: border-box; user-select: none"> <div id="virtual_directionkeys_down" style="background-image: url(../../src/tools/down.svg); width: 100%; height: 100%"></div></div>'
        + '<div style="position:absolute; left: 66.666666%; top: 50%;width: 33.333333%; height: 50%; padding: 2%; box-sizing: border-box; user-select: none"> <div id="virtual_directionkeys_right" style="background-image: url(../../src/tools/right.svg); width: 100%; height: 100%"></div></div>'

    vdkObj.append(virtual_directionkeys);

    let t_interval_up, t_interval_left, t_interval_down, t_interval_right;
    let t_timeout_up, t_timeout_left, t_timeout_down, t_timeout_right;
    addMouseDownEvent('virtual_directionkeys_up', 38, t_interval_up, t_timeout_up);
    addMouseDownEvent('virtual_directionkeys_left', 37, t_interval_left, t_timeout_left);
    addMouseDownEvent('virtual_directionkeys_down', 40, t_interval_down, t_timeout_down);
    addMouseDownEvent('virtual_directionkeys_right', 39, t_interval_right, t_timeout_right);
}).keydown(function (e) {
    let evt = window.event || e;
    let keyCode = evt.keyCode || evt.key.charCodeAt(0);
     console.log('[key down] keyCode = ' + keyCode)
});

function addMouseDownEvent(id, keyCode, t_interval, t_timeout) {
    $('#' + id).mousedown(function () {
        fireKeyEvent(document.getElementById(id), 'keydown', keyCode);
        t_timeout = setTimeout(function () {
            t_interval = setInterval(function () {
                fireKeyEvent(document.getElementById(id), 'keydown', keyCode)
            }, 100)
        }, 500)
    }).mouseup(function () {
        fireKeyEvent(document.getElementById(id), 'keyup', keyCode);
        clearInterval(t_interval);
        clearTimeout(t_timeout);
    }).mouseover(function () {
        // fireKeyEvent(document.getElementById(id), 'keyup', keyCode);
        clearInterval(t_interval);
        clearTimeout(t_timeout);
    });
}

function fireKeyEvent(el, evtType, keyCode) {
    let doc = el.ownerDocument,
        win = doc.defaultView || doc.parentWindow,
        evtObj;
    if (doc.createEvent) {
        if (win.KeyEvent) {
            evtObj = doc.createEvent('KeyEvents');
            evtObj.initKeyEvent(evtType, true, true, win, false, false, false, false, keyCode, 0);
        }
        else {
            evtObj = doc.createEvent('UIEvents');
            Object.defineProperty(evtObj, 'keyCode', {
                get: function () {
                    return this.keyCodeVal;
                }
            });
            Object.defineProperty(evtObj, 'which', {
                get: function () {
                    return this.keyCodeVal;
                }
            });
            evtObj.initUIEvent(evtType, true, true, win, 1);
            evtObj.keyCodeVal = keyCode;
            if (evtObj.keyCode !== keyCode) {
                console.log("keyCode " + evtObj.keyCode + " 和 (" + evtObj.which + ") 不匹配");
            }
        }
        el.dispatchEvent(evtObj);
    }
    else if (doc.createEventObject) {
        evtObj = doc.createEventObject();
        evtObj.keyCode = keyCode;
        el.fireEvent('on' + evtType, evtObj);
    }
}
