/**
 * Created by Cao on 2017/5/24.
 */

function elsSizeControlLoad() {
    $('#app_pages .owl-dots').css('height', '5%');
}

function eleSizeControl() {
    console.log('eleSizeControl !');
    containControl();
    iframeSizeControl();
    appListSizeControl();
    setAppPageSize();
    // bodySizeControl();
    owlStageSizeControl();
    appStoreFormSizeControl();
    bodyOverflowControl();
    // navContainControl();
}

function bodyOverflowControl() {
    console.log('bodyOverflowControl');
    // let app_list = document.body;
    // let nav_height = document.getElementById('nav-contain').offsetHeight;
    let body = document.body;
    let minWidth = parseInt(body.style.minWidth);
    let minHeight = parseInt(body.style.minHeight);
    let bodyWidth = window.innerWidth;
    let bodyHeight = window.innerHeight;
    // console.log(bodyWidth + ' ' + body;Height + ' ' + parseInt(minWidth) + ' ' + parseInt(minHeight));
    bodyWidth > minWidth ?
        body.style.overflowX = 'hidden' : body.style.overflowX = 'auto';
    bodyHeight > minHeight ?
        body.style.overflowY = 'hidden' : body.style.overflowY = 'auto';
}

// function navContainControl() {
//     let app_list = $('#app_list').get(0);
//     let app_list_width = parseInt(app_list.offsetWidth);
//     console.log(app_list_width);
//     document.getElementById('nav-contain').style.width = app_list_width + 'px'
// }

function bodySizeControl() {
    let app_list = $('#app_list').get(0);
    let body = document.body;
    let width = app_list.offsetWidth;
    // let height = app_list.offsetHeight;
    // let nav_height = document.getElementById('nav-contain').offsetHeight;
    // body.style.height = (height + nav_height) + 'px';
    // body_style.height = (height + nav_height) + 'px';
    body.style.width = width + 'px';
    // console.log(windowHeight + ' ' + nav_height + ' ' + contain_height)
}

function containControl() {

}

function iframeSizeControl() {
    let contain = $('#contain').get(0);
    let contain_width = contain.offsetWidth;
    let contain_height = contain.offsetHeight;
    let apps_form_hidden = $('#apps_form_hidden').get(0);
    // console.log(contain_width, contain_height);
    apps_form_hidden.style.width = contain_width + 'px';
    apps_form_hidden.style.height = contain_height + 'px';

    let iframes = $('iframe[class^="app-iframe"]');
    iframes.css('width', function (index) {
        let iframe = iframes.get(index);

        // console.log('iframe.style.left = ' + iframe.style.left);
        if (parseInt(iframe.style.left) === 0) {
            console.log('success');
            iframe.style.width = contain_width + 'px';
            iframe.style.height = contain_height + 'px';
        }
    })

}

function setiframeSize(DOMObj) {
    let contain = $('#contain').get(0);
    let contain_width = contain.offsetWidth;
    let contain_height = contain.offsetHeight;
    DOMObj.style.width = contain_width + 'px';
    DOMObj.style.height = contain_height + 'px';
}

function appListSizeControl() {

}

function setAppPageSize() {
    let width = parseInt(window.innerWidth);
    let height = parseInt(window.innerHeight);
    let pages = $('.app_page');
    let dots = $('#app_pages .owl-dots');
    pages.css({
        // 'width': (contain_width - 37) + 'px',
        'width': width + 'px',
        'height': (height - 52) * 0.95 + 'px',
    });
    dots.css(
        {
            'height': (height - 52) * 0.05 + 'px',
        }
    )
}

function owlStageSizeControl() {

}

function appStoreFormSizeControl() {
    let form = $('#app_store_form');
    let contain = $('#contain');
    let height = contain.get(0).offsetHeight;
    let top = -height;
    form.css({
        'height': (height) + 'px',
    });
    if (form.css('visibility') === 'hidden') {
        form.css({
            'top': top + 'px',
        });
    }

    // if (parseInt(form.css('top')) < top) {
    //     form.css({
    //         'top': top + 'px',
    //     });
    // }
}
