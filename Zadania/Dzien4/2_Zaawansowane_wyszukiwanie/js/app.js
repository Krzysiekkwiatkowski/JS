$(function () {
    //Zadanie 1
    $('span[data-task="_task1"]').siblings('p').last().closest('section').next().find('.container').css('background-color', 'green').addClass('answerTask1').slideUp(4000);

    //Zadanie 2
    $('span[data-task="_task2"]').parent().siblings($('.shopping'),'section').children('div').eq(1).find('button').closest('.cart-item').addClass('cart-updated');
});