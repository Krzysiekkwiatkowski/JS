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

    //Zadanie 3
    var insertHere = $('section').eq(0);
    var sortButton = $('<button id="sort">');
    insertHere.append(sortButton);
    sortButton.text('Sortuj');
    var sort = $('#sort');
    sort.on('click', function () {
        var elements = $('.main').children();
        var liElements = $('.main').children().text();
        var readyArray = liElements.split('Usuń');
        var array = [];
        for (var i = 0; i < readyArray.length; i++) {
            array[i] = readyArray[i].trim();
        }
        array.pop();
        for (var i = 0; i < array.length - 1; i++) {
            var result = sorting(array[i], array[i + 1]);
            if (result == -1) {
                var first = array[i + 1];
                var second = array[i];
                array[i] = first;
                array[i + 1] = second;
            }
        }
        for (var i = 0; i < array.length; i++) {
            var lis = $('.main').children();
            var toPut = null;
            for (var j = 0; j < lis.length; j++) {
                if(lis.eq(j).text().replace("Usuń", "").trim() == array[array.length -1 - i]){
                    toPut = lis.eq(j).detach();
                    console.log(j);
                }
            }
            toPut.parent().prepend(toPut);
        }
    });

    function sorting(a, b) {
        var firstLength = a.length;
        var secondLength = b.length;
        var max = 0;
        if (firstLength > secondLength) {
            max = firstLength;
        } else if (secondLength > firstLength) {
            max = secondLength;
        } else {
            max = firstLength;
        }
        for (var i = 0; i < max; i++) {
            if (a.charCodeAt(i) > b.charCodeAt(i)) {
                return -1;
            } else if (b.charCodeAt(i) > a.charCodeAt(i)) {
                return 1;
            } else {
                continue;
            }
        }
    }
});