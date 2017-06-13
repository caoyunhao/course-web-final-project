/**
 * Created by Cao on 2017/6/12.
 */

function adaptScreenLoad() {
    containSizeControl();
    // sliderSizeControl();
}

function containSizeControl() {
    let top = $('#nav-top');
    let top_height = top.get(0).offsetHeight;
    let bottom = $('#nav-bottom');
    let bottom_height = bottom.get(0).offsetHeight;
    let body = document.body;
    let body_height = body.offsetHeight;
    let contain = $('#contain');
    contain.css('height', (body_height - top_height - bottom_height) + 'px');
}

function sliderSizeControl() {
    // let body = document.body;
    // let body_width = body.offsetWidth;
    // let item = $('.slide-item');
    // item.css('height', (body_width / 2) + 'px');
    // let height = item.get(0).offsetHeight;
    // let slide = $('#slide');
    // slide.css('height', height + 'px')
}
