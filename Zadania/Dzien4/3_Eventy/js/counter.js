$(function () {
    //Zadanie 2
    var content = $('form');
    content.html('<textarea id="text" maxlength="100"></textarea>\n' +
        '    <p id="counter"></p>');
    var text = $('#text');
    var counter = $('#counter');
    text.on('keyup', function () {
        var textLength = text.val().length;
        counter.text(textLength + "/100");
        if(textLength < 34){
            counter.css('color', 'green');
        } else if(textLength > 33 && textLength < 67){
            counter.css('color', 'yellow');
        } else {
            counter.css('color', 'red');
        }
    })
});