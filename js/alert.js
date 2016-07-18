var tmpl = require('../html/alert.html'),
    css = require('../less/alert.less');

var defaultOption = {
    positive: 'ok'
};

function alert(option) {
    $.extend(defaultOption, option);
    if ($('.js-alert').length === 0) {
        $('body').append(tmpl);
        $('.js-alert .alert-positive').on('click', function() {
            alertDiv.hide();
            if (option.callback && typeof option.callback === 'function') {
                option.callback();
            }
        });
    }
    var alertDiv = $('.js-alert'),
        msgDiv = alertDiv.find('.alert-msg'),
        posDiv = alertDiv.find('.alert-positive');
    msgDiv.html(option.msg);
    posDiv.html(option.positive);
    alertDiv.show();
}

window.alert = alert;

