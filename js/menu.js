$(function(){
    var bannerHeight = typeof GLOBAL_DATA_BANNER_HEIGHT !== 'undefined' ? GLOBAL_DATA_BANNER_HEIGHT : 700;
    var activeMenuIndex = typeof GLOBAL_DATA_ACTIVE_MENU_INDEX !== 'undefined' ? GLOBAL_DATA_ACTIVE_MENU_INDEX : 0;
    console.log('【activeMenuIndex】' + activeMenuIndex);

    var last_scrolltop = 0;
    var activeMenu = $('#global-menu .global-menu-menus-item').eq(activeMenuIndex).addClass('active');
    var setActiveStyle = function (activeMenu) {
        var active = $('#global-menu .global-menu-active')
        var width = $(activeMenu).outerWidth();
        var left = $(activeMenu).position().left;
        $(active).css({
            width: width - 30 + 'px',
            left: left + 15 + 'px'
        }).addClass('show');
    }
    $('#global-menu .global-menu-menus-item').on('mouseover', function(){
        console.log('【global-menu-menus-item】mouseover');
        setActiveStyle(this);
        var subMenus = $(this).find('.global-menu-subMenus').eq(0);
        if (subMenus.length) {
            $(subMenus).css('padding-left', $(this).position().left + 'px').addClass('show');
        }
    }).on('mouseleave', function(){
        console.log('【global-menu-menus-item】mouseleave');
        setActiveStyle(activeMenu);
        var subMenus = $(this).find('.global-menu-subMenus').eq(0);
        if (subMenus.length) {
            $(subMenus).removeClass('show');
        }
    });
    setActiveStyle(activeMenu)
    if (typeof GLOBAL_SCROLLER !== 'undefined') {
        $(GLOBAL_SCROLLER).on('scroll', function() {
            var myScrollTop = $(GLOBAL_SCROLLER)[0].scrollTop || 0;
            if (myScrollTop > 60) {
                $('#global-menu').addClass('hide');
            } else {
                $('#global-menu').removeClass('hide');
            }
            if (myScrollTop > bannerHeight) {
                $('#global-menu').addClass('dark');
            } else {
                $('#global-menu').removeClass('dark');
            }
            if (myScrollTop < last_scrolltop) {
                $('#global-menu').removeClass('hide');
            }
            last_scrolltop = myScrollTop;
        });
    }

    $(window).resize(function(){
        setActiveStyle(activeMenu);
    });
});