$(function() {
    var getOffsetTop = function (dom) {
        var top = dom.offsetTop;
        while (dom = dom.offsetParent) {
            top += dom.offsetTop;
        }
        return top;
    }
    
    if (typeof GLOBAL_ANIMATION_CONFIG !== 'undefined') {
        for (var dom in GLOBAL_ANIMATION_CONFIG) {
            if ($(dom).length) {
                GLOBAL_ANIMATION_CONFIG[dom]['top'] = getOffsetTop($(dom)[0]);
                GLOBAL_ANIMATION_CONFIG[dom]['height'] = $(dom).outerHeight();
                $(dom).addClass('zysd-transparent');
            } else {
                delete GLOBAL_ANIMATION_CONFIG[dom];
            }
        }
    
        var setAnimation = function (scrollTop) {
            var clientHeight = document.body.clientHeight;
            for (var dom in GLOBAL_ANIMATION_CONFIG) {
                var dom_top = GLOBAL_ANIMATION_CONFIG[dom]['top'];
                var dom_animation = GLOBAL_ANIMATION_CONFIG[dom]['animation'];
                var dom_height = GLOBAL_ANIMATION_CONFIG[dom]['height'];
                var dom_offset = GLOBAL_ANIMATION_CONFIG[dom]['offset'] || 0;
                if ($(dom).hasClass(dom_animation)) continue;
                if (scrollTop + clientHeight - dom_height - 30 - dom_offset > dom_top) {
                    $(dom).addClass(dom_animation);
                }
            }
        }
        $(GLOBAL_SCROLLER).on('scroll', function () {
            var scrollTop = $(this)[0].scrollTop;
            setAnimation(scrollTop);
        });
        setAnimation(0);
    }
});

function openImgDialog (url) {
    if (typeof url === 'string') {
        url = [url];
    }
    var imgList = '';
    for (var i = 0 ; i < url.length ; i++) {
        imgClass = i === 0 ? 'active empPic' : 'empPic';
        imgList += '<img class="'+ imgClass +'" src="' + url[i] + '"/>'
    }
    var leftBtn = url.length > 1 ? '<div class="employeeLifeDialogLeftBtn disabled">'+
        '<img src="https://pmt8e84ed-pic16.websiteonline.cn/upload/upka.png"/>'+
    '</div>' : '';
    var rightBtn = url.length > 1 ? '<div class="employeeLifeDialogRightBtn">'+
        '<img src="https://pmt8e84ed-pic16.websiteonline.cn/upload/8czt.png"/>'+
    '</div>' : '';
    var dialog = $('<div id="employeeLifeDialog">'+
        '<div class="employeeLifeDialogWrap">'+
            '<div class="employeeLifeDialogBox">'+
                '<div class="employeeLifeDialogCloseBtn">'+
                    '<img src="https://pmt8e84ed-pic16.websiteonline.cn/upload/5y65.png"/>'+
                '</div>'+
                leftBtn+
                rightBtn+
                imgList+
            '</div>'+
        '</div>'+
    '</div>');
    $(dialog).find('.employeeLifeDialogCloseBtn').on('click', function () {
        $('#employeeLifeDialog').remove();
    });
    $(dialog).find('.employeeLifeDialogLeftBtn').on('click', function () {
        if ($(this).hasClass('disabled')) {
            return;
        }
        var activePic = $(dialog).find('.empPic.active');
        var activeIndex = $(activePic).index('.empPic');
        var imgLength = $(dialog).find('.empPic').length;
        $(activePic).removeClass('active zysd-scale-show');
        activeIndex--;
        $(dialog).find('.empPic').eq(activeIndex).addClass('active zysd-scale-show')
        if (activeIndex === 0) {
            $(this).addClass('disabled');
        }
        $(dialog).find('.employeeLifeDialogRightBtn').removeClass('disabled');
    });
    $(dialog).find('.employeeLifeDialogRightBtn').on('click', function () {
        if ($(this).hasClass('disabled')) {
            return;
        }
        var activePic = $(dialog).find('.empPic.active');
        var activeIndex = $(activePic).index('.empPic');
        var imgLength = $(dialog).find('.empPic').length;
        $(activePic).removeClass('active zysd-scale-show');
        activeIndex++;
        $(dialog).find('.empPic').eq(activeIndex).addClass('active zysd-scale-show')
        if (activeIndex === imgLength - 1) {
            $(this).addClass('disabled');
        }
        $(dialog).find('.employeeLifeDialogLeftBtn').removeClass('disabled');
    });
    $('body').append(dialog);
    $(dialog).addClass('show');
}