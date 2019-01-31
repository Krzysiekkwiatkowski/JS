$(function () {
    var buttonUp = $('i').eq(0).parent();
    var buttonDown = $('i').eq(1).parent();
    var buttonSave = $('i').eq(2).parent();
    buttonUp.on('click', function () {
        var spinner = $('#spinnerValue');
        var minInput = $('#min');
        var maxInput = $('#max');
        var stepInput = $('#step');
        var min = parseFloat(minInput.val());
        var max = parseFloat(maxInput.val());
        var step = parseFloat(stepInput.val());
        var spinner = $('#spinnerValue');
        var actualValue = parseFloat(spinner.attr('value'));
        if(actualValue + step <= max) {
            spinner.attr('value', Math.round((actualValue + step)*10)/10);
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
        if(actualValue - step >= min) {
            spinner.attr('value', Math.round((actualValue - step)*10)/10);
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
    });
});