$(function () {
    //Zadanie 1
    var button = $(".task_1").find('button');
    button.on('click', function () {
        var div = $('<div class="panel">');
        button.parent().append(div);
        div.text('Jakiś przykładowy tekst');
        div.css('text-indent', '-9999px');
        $(this).on('mouseenter', function () {
            $(this).removeAttr('text-indent')
        });

        $('.task_1').on('mouseenter', 'div', function () {
            $(this).css('text-indent', '');
        });
    });

    //Zadanie 2
    var ul = $('.main');
    var button = ul.children().append('<button style="display: inline"> Usuń </button>');
    ul.one('click', 'button', function () {
        $(this).parent().remove();
    });

    var submit = $('.people').find('input').eq(2);
    submit.on('click', function () {
        var addUser = $('#addUser');
        var age = $('#age');
        var list = $('.main');
        var li = $('<li>');
        li.attr('data-age', age.val());
        li.text(addUser.val());
        li.append('<button style="display: inline">Usuń</button>');
        list.append(li);
        var ul = $('.main');
        ul.on('click', 'button', function () {
            $(this).parent().remove();
        });
    });
});