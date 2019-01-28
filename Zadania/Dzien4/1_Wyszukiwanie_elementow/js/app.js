$(function () {
    //Zadanie 2
    $('li', $('.main')).addClass('borderClass');
    $('.showMore').eq(0).css('color', 'red');

    //Zadanie 3
    $('li', $('.main')).addClass('colorText').addClass('backgroundElement').fadeOut('slow').fadeIn('slow');

    //Zadanie 4
    // $('a').css('color', 'red');
    // $('a', $('.menu')).css('color', 'red');
    var links = $('a', $('.menu')).addClass('redlinks');
    links.eq(0).addClass('biggerFont');

    //Zadanie 5
    var header = $('h1');
    if(!header.hasClass('creepyHeader')){
        header.addClass('creepyHeader');
    } else {
        console.log("Nagłowek ma już taką klasę");
    }
});