$(function() {
    $('#home-business .home-business-nav-item').on('click', function(){
        console.log('【home-business-nav-item】click');
        if ($(this).hasClass('active')) return;
        var index = $(this).index();
        var active_item = $(this).siblings('.active')
        var active_index = $(active_item).index();
        console.log(index, active_index);
        $(active_item).removeClass('active');
        $(this).addClass('active');

        $('#home-business .home-business-content-item').eq(active_index).removeClass('active show zysd-up-show').addClass('hide');
        $('#home-business .home-business-content-item').eq(index).removeClass('hide').addClass('active show');
    })
})