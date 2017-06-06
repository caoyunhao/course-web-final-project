/**
 * Created by Cao on 2017/5/24.
 */

function bodyOverflowControl() {
    console.log('bodyOverflowControl');
    let app_list = $('#app_list').get(0);
    let body = document.body;
    let minWidth = parseInt(app_list.style.minWidth);
    let minHeight = parseInt(app_list.style.minHeight);
    let bodyWidth = body.offsetWidth;
    let bodyHeight = body.offsetHeight;
    // console.log(bodyWidth + ' ' + bodyHeight + ' ' + parseInt(minWidth) + ' ' + parseInt(minHeight));
    bodyWidth > minWidth ?
        body.style.overflowX = 'hidden' : body.style.overflowX = 'auto';
    bodyHeight > minHeight ?
        body.style.overflowY = 'hidden' : body.style.overflowY = 'auto';
}
