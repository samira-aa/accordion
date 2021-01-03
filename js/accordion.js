$(function() {
    $('.any-acc .title').click(function() {
        if ($(this).children('i').hasClass('fa-minus')) {
            $(this).siblings('.slide').slideUp();
            $(this).children('i').removeClass('fa-minus');
            $(this).children('i').addClass('fa-plus');
            $(this).removeClass('style-title');
        } else {
            $(this).parent('.any-acc').siblings('.any-acc').children('.slide').slideUp();
            $(this).parent('.any-acc').siblings('.any-acc').children('.title').children('i').removeClass('fa-minus');
            $(this).parent('.any-acc').siblings('.any-acc').children('.title').removeClass('style-title');
            $(this).parent('.any-acc').siblings('.any-acc').children('.title').children('i').addClass('fa-plus');
            $(this).siblings('.slide').slideDown();
            $(this).children('i').addClass('fa-minus');
            $(this).addClass('style-title');
        }

    })
})