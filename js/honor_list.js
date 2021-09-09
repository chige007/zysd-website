
var honorList_pageSize = 16;
var honorListData = [
    ['2009年度全国中小企业最信赖的投资担保机构', 'https://pmt8e84ed-pic16.websiteonline.cn/upload/8_iepm.jpg'],
    ['2008年度中国最佳中小企业金融服务机构', 'https://pmt8e84ed-pic16.websiteonline.cn/upload/7.jpg'],
    ['纳税超1000万元企业2012', 'https://pmt8e84ed-pic16.websiteonline.cn/upload/6_gizq.jpg'],
    ['中小企业信用担保机构领军人物吴列进', 'https://pmt8e84ed-pic16.websiteonline.cn/upload/4_utmi.jpg'],
    ['最具社会责任感企业', 'https://pmt8e84ed-pic16.websiteonline.cn/upload/11_jdr1.jpg'],
    ['应对金融危机中支持中小企业表现突出的担保机构', 'https://pmt8e84ed-pic16.websiteonline.cn/upload/10.jpg'],
    ['全国支持中小企业发展风云人物（吴列进）', 'https://pmt8e84ed-pic16.websiteonline.cn/upload/9.jpg'],
    ['最受佛山市民欢迎金融单位', 'https://pmt8e84ed-pic16.websiteonline.cn/upload/8.jpg'],
    ['纳税超1000万元企业2011', 'https://pmt8e84ed-pic16.websiteonline.cn/upload/6_30xp.jpg'],
    ['纳税超1000万元企业2010', 'https://pmt8e84ed-pic16.websiteonline.cn/upload/6_uo2n.jpg'],
    ['纳税超1000万元企业2009', 'https://pmt8e84ed-pic16.websiteonline.cn/upload/6_z3c4.jpg'],
    ['纳税超1000万元企业2008', 'https://pmt8e84ed-pic16.websiteonline.cn/upload/6_1arh.jpg'],
    ['广东省中小企业信用担保机构示范单位', 'https://pmt8e84ed-pic16.websiteonline.cn/upload/5_u6xd.jpg'],
    ['全国最具影响力中小企业信用担保机1构', 'https://pmt8e84ed-pic16.websiteonline.cn/upload/4_2beb.jpg'],
    ['企业文化建设先进单位', 'https://pmt8e84ed-pic16.websiteonline.cn/upload/5_zth8.jpg']
];

$(function(){
    var $container = $('#honor_list');
    var $pagination = $('#honor_list_pagination');

    var makeImgItem = function(data){
        return $('<div class="_imgItem">'+
                    '<div class="_imgWrap">'+
                        '<img src="'+data[1]+'"/>'+
                    '</div>'+
                    '<div class="_title">'+data[0]+'</div>'+
                '</div>').data('url', data[1]).on('click', function(){
                    openImgDialog($(this).data('url'));
                });
    }

    var makeImgItemWrap = function (page) {
        return $('<div class="_imgItemWrap '+page+'"></div>')
    }

    var makePageItem = function (page) {
        return $('<div class="_pageItem">'+ ( page + 1 ) +'</div>').data('page', page);
    } 

    pageLength = Math.ceil(honorListData.length / honorList_pageSize);
    for(var i = 0 ; i < pageLength ; i++) {
        var $imgItemWrap = makeImgItemWrap(i);
        for(var j = i * honorList_pageSize ; j < honorListData.length ; j++) {
            var $imgItem = makeImgItem(honorListData[j]);
            $($imgItemWrap).append($imgItem);
        }
        $($container).append($imgItemWrap);
        var $pageItem = makePageItem(i);
        $($pagination).append($pageItem);
    }
})



