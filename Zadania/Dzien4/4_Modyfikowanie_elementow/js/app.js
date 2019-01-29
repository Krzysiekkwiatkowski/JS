$(function () {
    //Zadanie 1
    var people = $('.people');
    var button = people.children().eq(2);
    button.on('click', function () {
         var id = $('#addUser').val();
         var age = $('#age').val();
         var list = $('.main');
         var newLi = $('<li>');
        newLi.attr('data-age', age);
        newLi.text(id);
        list.append(newLi);
        if(age < 16){
            newLi.css('color', 'green');
        } else if(age > 15 && age < 41){
            newLi.css('color', 'blue');
        } else {
            newLi.css('color', 'brown');
        }
    });

    //Zadanie 2
    var section = $('.where-i-am');
    var div = section.find('div');
    div.find('p').before($('<span>').text('Jestem tutaj before'));
    div.find('p').after($('<span>').text('Jestem tutaj after'));
    $('<span>').text('Jestem tutaj insertBefore').insertBefore(div);
    $('<span>').text('Jestem tutaj insertAfter').insertAfter(div);
});