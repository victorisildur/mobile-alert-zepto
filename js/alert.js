(function(win) {
    var defaultOption = {
        positive: 'ok'
    };
    var isFirst = true;;
    function alert(option) {
        $.extend(option, defaultOption);
        var alertDiv = $('.js-alert'),
            msgDiv = alertDiv.find('.alert-msg'),
            posDiv = alertDiv.find('.alert-positive');
        alertDiv.show();
        msgDiv.html(option.msg);
        posDiv.html(option.positive);
        if (isFirst) {
            posDiv.on('click', function() {
                alertDiv.hide();
            });
            isFirst = false;
        }
    }
    win.alert = alert;
})(window);
