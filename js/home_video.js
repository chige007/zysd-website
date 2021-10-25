$(function(){
    // var doc = $('#layer3D2094F153B9C5FE4C59CBE9E4E16F65_frmlofjslider').contents().context;
    document.getElementById('layer3D2094F153B9C5FE4C59CBE9E4E16F65_frmlofjslider').onload = function () {
        var body = $(this).contents()[0].body
        console.log(body)
        setTimeout(function(){
            a = $(body).find('.mF_ladyQ .pic li>a');
            img = $(body).find('.mF_ladyQ .pic li>a>img');
            $(a).css({
                display: 'flex',
                height: '100%',
                width: '100%',
                'justify-content': 'center',
                'align-items': 'center'
            })
            $(img).css({
                height: '100%',
                width: 'auto'
            })
        }, 1000);
    }

});


// 繁体
$(function(){
    // var doc = $('#layer3D2094F153B9C5FE4C59CBE9E4E16F65_frmlofjslider').contents().context;
    document.getElementById('layerA0E877E33B4454FC90BF77CD5ECC39EB_frmlofjslider').onload = function () {
        var body = $(this).contents()[0].body
        console.log(body)
        setTimeout(function(){
            a = $(body).find('.mF_ladyQ .pic li>a');
            img = $(body).find('.mF_ladyQ .pic li>a>img');
            $(a).css({
                display: 'flex',
                height: '100%',
                width: '100%',
                'justify-content': 'center',
                'align-items': 'center'
            })
            $(img).css({
                height: '100%',
                width: 'auto'
            })
        }, 1000);
    }

});