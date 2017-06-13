/**
 * Created by Cao on 2017/5/16.
 */

$(document).ready(function () {
    console.log('adapt-screen.js is ready');
});

if (window.addEventListener) {
    window.addEventListener('load', AdaptScreen, false);
    window.addEventListener("resize", AdaptScreen, false);
}
else {
    window.addEventListener('onload', AdaptScreen);
    window.attachEvent("onresize", AdaptScreen);
}

let global_column_num;
let global_row_num;
let global_item_num = 13;

function setAppNum(app_num) {
    global_item_num = app_num;
}

function AdaptScreen() {
    eleSizeControl();
    autoAdaptScreen();
}

function appAdaptScreen() {
    eleSizeControl();
    autoAdaptScreen();
}

function getAdaptScreenArgs() {
    let x_space = 200;
    let y_space = 200;
    let s = 1;
    let app_box = document.getElementById('app_page');
    let appbox_width = app_box.offsetWidth;
    let appbox_height = app_box.offsetHeight;
    let screen_pro = appbox_width / appbox_height;              // 屏幕比例
    global_column_num = calColumn(screen_pro, appbox_width);    // 设置列数 2~7
    global_row_num = Math.ceil(global_item_num / global_column_num);    // 行数
// y = setVerticalSpace(global_column_num);
    x_space = 150 + appbox_width / global_column_num * 0.2;
    y_space = 150 + appbox_height / global_row_num * 0.3;

    x_space = Math.min(x_space, (appbox_width - 80) / global_column_num);
    y_space = Math.min(y_space, (appbox_height + 80) / global_row_num);
    let width_per_row = x_space * (global_column_num - 1) + 142;
    let height_per_col = y_space * (global_row_num - 1) + 120;
    // x, y 左上角开始位置
    let x_begin = (appbox_width - width_per_row) * 0.5;
    let y_begin = (appbox_height - height_per_col) * 0.5;

    let items_width = 142 * global_column_num; //一行实际长度
    let items_height = 160 * global_row_num;   //一列实际长度
    s = setScale(appbox_width, items_width, global_column_num);
    // setItemTranslate(x_begin, y_begin, x_space, y_space, s);
    return [x_begin, y_begin, x_space, y_space, s];
}

function autoAdaptScreen() {
    let args = getAdaptScreenArgs();
    setItemTranslate(args);
}

function calColumn(_pro, _gamebox_width) {
    let _result = 7;
    if (_pro >= 1.5) {
        if (_gamebox_width < 1100) {
            _result -= 2;
        }
    }
    else if (_pro >= 0.95 && _pro < 1.5) {
        _result -= 2;
    }
    else if (_pro >= 0.64 && _pro < 0.95) {
        _result -= 3;
    }
    else if (_pro >= 0.4 && _pro < 0.64) {
        _result -= 4;
    }
    else if (_pro < 0.4) {
        _result -= 5;
    }
    return _result;
}

function setScale(_gamebox_width, _items_width, _column_num) {
    let result = 1;
    if (_column_num === 7) {
        let display_scale_width = _gamebox_width * 0.7;
        if (_items_width > display_scale_width) {
            result = 1 - (_items_width - display_scale_width) / _items_width;
        }
        return result;
    } else if (_column_num === 5) {
        let display_scale_width = _gamebox_width * 0.6;
        if (_items_width > display_scale_width) {
            result = 1 - (_items_width - display_scale_width) / _items_width;
        }
        return result;
    } else if (_column_num === 4) {
        let display_scale_width = _gamebox_width * 0.5;
        if (_items_width > display_scale_width) {
            result = 1 - (_items_width - display_scale_width) / _items_width;
        }
        return result;
    } else if (_column_num === 3) {
        let display_scale_width = _gamebox_width * 0.5;
        if (_items_width > display_scale_width) {
            result = 1 - (_items_width - display_scale_width) / _items_width;
        }
        return result;
    } else if (_column_num === 2) {
        let display_scale_width = _gamebox_width * 0.5;
        if (_items_width > display_scale_width) {
            result = 1 - (_items_width - display_scale_width) / _items_width;
        }
        return result;
    }
}

function setItemPosition(args) {
    setItemPositionArgs(args[0], args[1], args[2], args[3], args[4])
}

function setItemTranslate(args) {
    setItemTranslateArgs(args[0], args[1], args[2], args[3], args[4]);
}

function setItemPositionArgs(_x_begin, _y_begin, _x_space, _y_space, s) {
    let items = $('a[id^="item"]');
    items.css('-webkit-transition', '0ms ease-out');
    items.css('-webkit-transform', function (index) {
        let newXValue = _x_begin + _x_space * (index);
        let newYValue = _y_begin;
        let newSValue = s;
        if (index >= global_column_num) {
            let qu = parseInt(index / global_column_num); //商
            let re = parseInt(index % global_column_num); //余数
            newXValue = _x_begin + _x_space * (re);
            newYValue = _y_begin + _y_space * (qu);
        }
        return 'translateX(' + newXValue + 'px) ' +
            'translateY(' + newYValue + 'px) ' +
            'translateZ(0px) ' +
            'scale(' + newSValue + ')';
    })
}

function setItemTranslateArgs(_x_begin, _y_begin, _x_space, _y_space, s) {
    for (let page_index = 1; page_index < 3; ++page_index) {
        let _id = "page" + page_index + "-item";
        let selector = 'a[id^=' + _id + ']';
        let items = $(selector);
        items.css('-webkit-transition', '500ms ease-out');
        items.css('-webkit-transform', function (index) {
            let newXValue = _x_begin + _x_space * (index);
            let newYValue = _y_begin;
            let newSValue = s;
            if (index >= global_column_num) {
                let qu = parseInt(index / global_column_num); //商
                let re = parseInt(index % global_column_num); //余数
                newXValue = _x_begin + _x_space * (re);
                newYValue = _y_begin + _y_space * (qu);
            }
            // newYValue -= 50;
            return 'translateX(' + newXValue + 'px) ' +
                'translateY(' + newYValue + 'px) ' +
                'translateZ(0px) ' +
                'scale(' + newSValue + ')';
        });
    }
}

