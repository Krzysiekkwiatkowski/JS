$(function () {
    //Zadanie 1
    var buttons = $('button' ,$('.hero-buttons'));
    var ironman = buttons.eq(0);
    var thor = buttons.eq(1);
    var wolverine = buttons.eq(2);
    ironman.on('click', function () {
        console.log("kliknięto mnie");
    });
    thor.one('click', function () {
        console.log("kliknięto mnie, ale już drugi raz nie dam się kliknąć");
    });
    wolverine.one('click', function () {
        wolverine.off();
        thor.off();
        ironman.off();
    });

    //Zadanie 3
    var section = $('section.superhero-description');
    section.find('dd').css('display', 'none');
    var dt = section.find('dt').on('click', function () {
        if($(this).next().css('display') == 'none'){
            $(this).next().css('display', 'content').fadeIn('slow');
        } else {
            $(this).next().fadeOut('slow');
        }
    });

    //Zadanie 4
    var form = $('.login');
    var showPass = $('.show-hide-btn');
    showPass.on('click', function (event) {
        event.preventDefault();
        var pass = form.find('input').eq(1);
        if(pass.attr('type') == 'password'){
            pass.attr('type', 'text');
        } else {
            pass.attr('type', 'password');
        }
    });

    //Zadanie 5
    var menu = $('.menu');
    menu.on('mouseenter', function () {
          console.log("Hura");
    });

    //Zadanie 6
    var formAgain = $('.login');
    var inputs = formAgain.find('input');
    inputs.on('click', function () {
        $(this).css('box-shadow', '0 4px 0 greenyellow, 0 4px 0 green, 0 4px 0 forestgreen');
        $(this).on('mouseleave', function () {
            $(this).css('backgroundColor', 'grey');
        })
    });
});