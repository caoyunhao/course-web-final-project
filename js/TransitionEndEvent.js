/**
 * Created by Cao on 2017/6/11.
 */

function addTransitionEndEvent(DOMObj, func) {
    if (DOMObj.addEventListener) {
        DOMObj.addEventListener("webkitTransitionEnd", func);
    }
    else {
        DOMObj.attachEvent("webkitTransitionEnd", func);
    }
}
