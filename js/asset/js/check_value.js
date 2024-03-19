function add_input_error_layer(errorType, targetElement) {
    let htmlText = '<div class="error_alert">' + errorType + '</div>'
    $(targetElement).after(htmlText)
}

function commonCheckValue(btn) {
    let check = 0;
    btn.find('input').each(function (index, item) {
        if ($(this).hasClass('skip_check')) {
            return
        } else {
            let test = 0;
            if ($(item).val() == '') {
                add_input_error_layer('Please enter', $(item))
                test++;
                // if ($(item).hasClass('emailInput')) {
                //     add_input_error_layer('Please enter', $(item))
                //     test++;
                // } else if ($(item).hasClass('firstNameInput')) {
                //     add_input_error_layer('Please enter', $(item))
                //     test++;
                // } else if ($(item).hasClass('lastNameInput')) {
                //     add_input_error_layer('Please enter', $(item))
                //     test++;
                // } else if ($(item).hasClass('passwordInput')) {
                //     add_input_error_layer('Please enter', $(item))
                //     test++;
                // } else if ($(item).hasClass('passwordConfirmInput')) {
                //     add_input_error_layer('Please enter', $(item))
                //     test++;
                // } else if ($(item).hasClass('companyNameInput')) {
                //     add_input_error_layer('Please enter', $(item))
                //     test++;
                // } else if ($(item).hasClass('phoneNumberInput')) {
                //     add_input_error_layer('Please enter', $(item))
                //     test++;
                // } else if ($(item).hasClass('currentPasswordInput')) {
                //     add_input_error_layer('Please enter', $(item))
                //     test++;
                // } else if ($(item).hasClass('newPasswordInput')) {
                //     add_input_error_layer('Please enter', $(item))
                //     test++;
                // } else if ($(item).hasClass('confirmNewPasswordInput')) {
                //     add_input_error_layer('Please enter', $(item))
                //     test++;
                // } else if ($(item).hasClass('contentInput')) {
                //     add_input_error_layer('Please enter', $(item))
                //     test++;
                // } else if ($(item).hasClass('domainAddressInput')) {
                //     add_input_error_layer('Please enter', $(item))
                //     test++;
                // } else if ($(item).hasClass('messengerIdInput')) {
                //     add_input_error_layer('Please enter', $(item))
                //     test++;
                // } else if ($(item).hasClass('nameInput')) {
                //     add_input_error_layer('Please enter', $(item))
                //     test++;
                // } else if ($(item).hasClass('contryInput')) {
                //     add_input_error_layer('Please enter', $(item))
                //     test++;
                // } else if ($(item).hasClass('cityInput')) {
                //     add_input_error_layer('Please enter', $(item))
                //     test++;
                // } else if ($(item).hasClass('zipCodeInput')) {
                //     add_input_error_layer('Please enter', $(item))
                //     test++;
                // } else if ($(item).hasClass('streetAddressInput')) {
                //     add_input_error_layer('Please enter', $(item))
                //     test++;
                // } else if ($(item).hasClass('paymentDateInput')) {
                //     add_input_error_layer('Please enter', $(item))
                //     test++;
                // } else if ($(item).hasClass('cardNumberInput')) {
                //     add_input_error_layer('Please enter', $(item))
                //     test++;
                // } else if ($(item).hasClass('cardHolderInput')) {
                //     add_input_error_layer('Please enter', $(item))
                //     test++;
                // } else if ($(item).hasClass('expirationMoYeYInput')) {
                //     add_input_error_layer('Please enter', $(item))
                //     test++;
                // } else if ($(item).hasClass('cvcInput')) {
                //     add_input_error_layer('Please enter', $(item))
                //     test++;
                // } else if ($(item).hasClass('parnterCodeInput')) {
                //     add_input_error_layer('Please enter', $(item))
                //     test++;
                // }
            } else if ($(item).val().length < $(item).attr('minlength')) {
                add_input_error_layer('Too short', $(item))
                test++;
                // if ($(item).hasClass('emailInput')) {
                //     add_input_error_layer('Too short', $(item))
                //     test++;
                // } else if ($(item).hasClass('firstNameInput')) {
                //     add_input_error_layer('Too short', $(item))
                //     test++;
                // } else if ($(item).hasClass('lastNameInput')) {
                //     add_input_error_layer('Too short', $(item))
                //     test++;
                // } else if ($(item).hasClass('passwordInput')) {
                //     add_input_error_layer('Too short', $(item))
                //     test++;
                // } else if ($(item).hasClass('passwordConfirmInput')) {
                //     add_input_error_layer('Too short', $(item))
                //     test++;
                // } else if ($(item).hasClass('companyNameInput')) {
                //     add_input_error_layer('Too short', $(item))
                //     test++;
                // } else if ($(item).hasClass('phoneNumberInput')) {
                //     add_input_error_layer('Too short', $(item))
                //     test++;
                // } else if ($(item).hasClass('currentPasswordInput')) {
                //     add_input_error_layer('Too short', $(item))
                //     test++;
                // } else if ($(item).hasClass('newPasswordInput')) {
                //     add_input_error_layer('Too short', $(item))
                //     test++;
                // } else if ($(item).hasClass('confirmNewPasswordInput')) {
                //     add_input_error_layer('Too short', $(item))
                //     test++;
                // } else if ($(item).hasClass('contentInput')) {
                //     add_input_error_layer('Too short', $(item))
                //     test++;
                // } else if ($(item).hasClass('domainAddressInput')) {
                //     add_input_error_layer('Too short', $(item))
                //     test++;
                // } else if ($(item).hasClass('messengerIdInput')) {
                //     add_input_error_layer('Too short', $(item))
                //     test++;
                // } else if ($(item).hasClass('nameInput')) {
                //     add_input_error_layer('Too short', $(item))
                //     test++;
                // } else if ($(item).hasClass('contryInput')) {
                //     add_input_error_layer('Too short', $(item))
                //     test++;
                // } else if ($(item).hasClass('cityInput')) {
                //     add_input_error_layer('Too short', $(item))
                //     test++;
                // } else if ($(item).hasClass('zipCodeInput')) {
                //     add_input_error_layer('Too short', $(item))
                //     test++;
                // } else if ($(item).hasClass('streetAddressInput')) {
                //     add_input_error_layer('Too short', $(item))
                //     test++;
                // } else if ($(item).hasClass('paymentDateInput')) {
                //     add_input_error_layer('Too short', $(item))
                //     test++;
                // } else if ($(item).hasClass('cardNumberInput')) {
                //     add_input_error_layer('Too short', $(item))
                //     test++;
                // } else if ($(item).hasClass('cardHolderInput')) {
                //     add_input_error_layer('Too short', $(item))
                //     test++;
                // } else if ($(item).hasClass('expirationMoYeYInput')) {
                //     add_input_error_layer('Too short', $(item))
                //     test++;
                // } else if ($(item).hasClass('cvcInput')) {
                //     add_input_error_layer('Too short', $(item))
                //     test++;
                // } else if ($(item).hasClass('parnterCodeInput')) {
                //     add_input_error_layer('Too short', $(item))
                //     test++;
                // }
            } else if ($(item).hasClass('emailInput')) {
                let regExp = /^[0-9a-zA-Z.;\-!#]+@[A-Za-z0-9\-]+\.[A-Za-z]+/;
                if (!regExp.test($(item).val())) {
                    add_input_error_layer('Wrong format', $(item))
                    test++;
                }
            }
            if (test == 0) {
                $(item).parent().removeClass('error_alert_border')
                $(item).parent().find('.error_alert').remove()
            } else {
                if ($(this).attr('type') != 'hidden') {
                    $(item).parent().addClass('error_alert_border');
                    check++;
                }
            }


        }
    })
    // btn.find('textarea').each(function (index, item) {
    //     let test = 0;
    //     if ($(item).parent().css("display") != "none") {
    //         if ($(item).val() == '') {
    //             add_input_error_layer('Please enter', $(item))
    //             test++;
    //         } else if ($(item).val().length < $(item).attr('minlength')) {
    //             add_input_error_layer('Too short', $(item))
    //             test++;
    //         }
    //         if (test == 0) {
    //             $(item).parent().removeClass('error_alert_border')
    //             $(item).parent().find('.error_alert').remove()
    //         } else {
    //             $(item).parent().addClass('error_alert_border');
    //             check++;
    //         }
    //     }
    // })
    if (check > 0) {
        return false;
    } else {
        return true;
    }
}