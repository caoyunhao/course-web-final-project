/**
 * Created by Cao on 2017/5/19.
 */

$(document).ready(function () {
    console.log('main js is ready');
    $('#input_id')
        .focus(function () {
            $('#div_id').addClass('focus');
        })
        .blur(function () {
            $('#div_id').removeClass('focus');
            let id_obj = $('#input_id');
            let input_id = id_obj.val();
            if (checkEmailFormat(input_id) === 0) {
                let new_input_val = input_id + '@yunos.com';
                id_obj.val(new_input_val);
                checkInput();
            }
        })
        .bind('input propertychange', function () {
            checkInput();
        });
    $('#input_pwd')
        .focus(function () {
            $('#div_pwd').addClass('focus');
        })
        .blur(function () {
            $('#div_pwd').removeClass('focus');
            checkInput();
        })
        .bind('input propertychange', function () {
            checkInput();
        });

    $('#submit_btn').click(function () {
        Login();
    });
    $('#error_msg').click(function () {
        $('#error').addClass('hide');
    });
    $('#forget_pwd_link').click(function (e) {
        stopPropagation(e);
    })
});

function checkInput() {
    let input_id = $('#input_id').val();
    let input_pwd = $('#input_pwd').val();
    let submit_btn = $('#submit_btn');
    console.log('input_id = ' + input_id);
    if (checkEmailFormat(input_id) === 1 && checkPwd(input_pwd)) {
        submit_btn.removeClass('disable');
    } else {
        submit_btn.addClass('disable');
    }
}

function checkEmailFormat(email) {
    let email_full_format = /^(([A-Za-z0-9])|([A-Za-z0-9]-)|([A-Za-z0-9]\.)){4,}\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
    let email_front_format = /^[A-Za-z](([A-Za-z0-9])|(-[A-Za-z0-9])|(\.[A-Za-z0-9])){3,}$/;
    if (email_full_format.test(email)) {
        console.log('checkEmailFormat() return code 1');
        return 1;
    } else if (email_front_format.test(email)) {
        console.log('checkEmailFormat() return code 0');
        return 0;
    } else {
        console.log('checkEmailFormat() return code -1');
        return -1;
    }
}

function checkPwd(pwd) {
    let pwd_full_format = /^[\w]{6,}$/;
    return pwd_full_format.test(pwd);
}

function Login() {
    let input_id = $('#input_id').val();
    let input_pwd = $('#input_pwd').val();
    if (input_id !== 'admin@yunos.com' || input_pwd !== '123456') {
        $('#error').removeClass('hide');
    } else {
        console.log('jump index');
        window.parent.hideLoginFormFaded();
        window.parent.setCookie('user_id', input_id);
        window.parent.loginToIndex();
    }
}
