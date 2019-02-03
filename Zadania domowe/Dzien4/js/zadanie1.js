$(function () {
    var buttonUp = $('i').eq(0).parent();
    var buttonDown = $('i').eq(1).parent();
    var buttonSave = $('i').eq(2).parent();
    var progressBar = $('.progressInner');
    var buttonup = 0;

    buttonUp.on('click mousedown', function (event) {
        if (event.type == "mousedown") {
            setInterval(function () {
                var spinner = $('#spinnerValue');
                var minInput = $('#min');
                var maxInput = $('#max');
                var stepInput = $('#step');
                var min = parseFloat(minInput.val());
                var max = parseFloat(maxInput.val());
                var step = parseFloat(stepInput.val());
                var spinner = $('#spinnerValue');
                var actualValue = parseFloat(spinner.attr('value'));
                if (actualValue + step <= max) {
                    var result = Math.round((actualValue + step) * 10) / 10;
                    spinner.attr('value', result);
                    progressBar.css('width', actual((result - min), (max - min)) + '%');
                }
            }, 1000);
        }
    });

    buttonDown.on('click', function () {
        var spinner = $('#spinnerValue');
        var minInput = $('#min');
        var maxInput = $('#max');
        var stepInput = $('#step');
        var min = parseFloat(minInput.val());
        var max = parseFloat(maxInput.val());
        var step = parseFloat(stepInput.val());
        var spinner = $('#spinnerValue');
        var actualValue = parseFloat(spinner.attr('value'));
        if (actualValue - step >= min) {
            var result = Math.round((actualValue - step) * 10) / 10;
            spinner.attr('value', result);
            progressBar.css('width', actual((result - min), (max - min)) + '%');
        }
    });

    buttonSave.on('click', function () {
        var spinner = $('#spinnerValue');
        var minInput = $('#min');
        var maxInput = $('#max');
        var stepInput = $('#step');
        var min = parseFloat(minInput.val());
        var max = parseFloat(maxInput.val());
        var step = parseFloat(stepInput.val());
        spinner.attr('min', min);
        spinner.attr('max', max);
        spinner.attr('step', step);
        spinner.attr('value', min);
        progressBar.css('width', '0%');
    });

    function actual(actual, max) {
        return (actual * 100) / max;
    }
});