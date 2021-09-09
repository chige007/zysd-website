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
    $('#employeeLifeDialog').remove();
    var imgList = '';
    for (var i = 0 ; i < url.length ; i++) {
        imgClass = i === 0 ? 'active _picture' : '_picture';
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
            '<div class="employeeLifeDialogCloseBtn">'+
                '<img src="https://pmt8e84ed-pic16.websiteonline.cn/upload/5y65.png"/>'+
            '</div>'+
            leftBtn+
            rightBtn+
            imgList+
        '</div>'+
    '</div>');
    $(dialog).find('.employeeLifeDialogCloseBtn').on('click', function () {
        $('#employeeLifeDialog').remove();
    });
    $(dialog).find('.employeeLifeDialogLeftBtn').on('click', function () {
        if ($(this).hasClass('disabled')) {
            return;
        }
        var activePic = $(dialog).find('._picture.active');
        var activeIndex = $(activePic).index('._picture');
        var imgLength = $(dialog).find('._picture').length;
        $(activePic).removeClass('active zysd-scale-show');
        activeIndex--;
        $(dialog).find('._picture').eq(activeIndex).addClass('active zysd-scale-show')
        if (activeIndex === 0) {
            $(this).addClass('disabled');
        }
        $(dialog).find('.employeeLifeDialogRightBtn').removeClass('disabled');
    });
    $(dialog).find('.employeeLifeDialogRightBtn').on('click', function () {
        if ($(this).hasClass('disabled')) {
            return;
        }
        var activePic = $(dialog).find('._picture.active');
        var activeIndex = $(activePic).index('._picture');
        var imgLength = $(dialog).find('._picture').length;
        $(activePic).removeClass('active zysd-scale-show');
        activeIndex++;
        $(dialog).find('._picture').eq(activeIndex).addClass('active zysd-scale-show')
        if (activeIndex === imgLength - 1) {
            $(this).addClass('disabled');
        }
        $(dialog).find('.employeeLifeDialogLeftBtn').removeClass('disabled');
    });
    $(dialog).find('._picture').on('mousewheel', function(event, delta){
        event.preventDefault();
        event.stopPropagation();
        var delta = (event.originalEvent.wheelDelta && (event.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  // chrome & ie
                (event.originalEvent.detail && (event.originalEvent.detail > 0 ? -1 : 1));  
        var dir = delta > 0 ? 'Up' : 'Down';
        var scale = $(this).data('scale') || 1;
        if (dir === 'Up' && scale < 4) {
            if (scale > 4) return;
            $(this).css('transform', 'scale('+ (scale + 0.1)  +')').data('scale', scale + 0.1);
        } else if (scale > 0.25) {
            var scale = $(this).data('scale') || 1;
            $(this).css('transform', 'scale('+ (scale - 0.1)  +')').data('scale', scale - 0.1);
        }
    }).on('mousedown', function(e){
        event.preventDefault();
        event.stopPropagation();
        console.log(e.offsetX, e.offsetY);
        $(this).data('lock', false).data('offsetX', e.offsetX).data('offsetY', e.offsetY);
    }).on('mouseup', function(e){
        event.preventDefault();
        event.stopPropagation();
        $(this).data('lock', true);
    }).on('mousemove', function(e){
        event.preventDefault();
        event.stopPropagation();
        if ($(this).data('lock') === false) {
            var x = e.offsetX - $(this).data('offsetX')
            var y = e.offsetY - $(this).data('offsetY');
            var translateX = $(this).data('translateX') || 0;
            var translateY = $(this).data('translateY') || 0;
            $(this).css('transform', 'translate('+(translateX + x)+'px, '+(translateY + y)+'px) scale('+($(this).data('scale') || 1)+')').data('translateX', translateX + x).data('translateY', translateY + y);
        }
    });
    $('body').append(dialog);
    $(dialog).addClass('show');
}