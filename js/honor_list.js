
var honorList_pageSize = 16;
var honorListData = [
    ['全国最具影响力中小企业信用担保机1构', 'https://pmt8e84ed-pic16.websiteonline.cn/upload/honorList_1.jpg'],
    ['广东省中小企业信用担保机构示范单位', 'https://pmt8e84ed-pic16.websiteonline.cn/upload/honorList_2.jpg'],
    ['最受佛山市民欢迎金融单位', 'https://pmt8e84ed-pic16.websiteonline.cn/upload/honorList_3.jpg'],
    ['中小企业信用担保机构领军人物吴列进', 'https://pmt8e84ed-pic16.websiteonline.cn/upload/honorList_4.jpg'],
    ['企业文化建设先进单位', 'https://pmt8e84ed-pic16.websiteonline.cn/upload/honorList_5.jpg'],
    ['2008年度中国最佳中小企业金融服务机构', 'https://pmt8e84ed-pic16.websiteonline.cn/upload/honorList_6.jpg'],
    ['2009年度全国中小企业最信赖的投资担保机构', 'https://pmt8e84ed-pic16.websiteonline.cn/upload/honorList_7.jpg'],
    ['应对金融危机中支持中小企业表现突出的担保机构', 'https://pmt8e84ed-pic16.websiteonline.cn/upload/honorList_8.jpg'],
    ['最具社会责任感企业', 'https://pmt8e84ed-pic16.websiteonline.cn/upload/honorList_9.jpg'],
    ['2009年度诚信先进单位', 'https://pmt8e84ed-pic16.websiteonline.cn/upload/honorList_10.jpg'],
    ['2009年万亿担保规模上榜机构30强', 'https://pmt8e84ed-pic16.websiteonline.cn/upload/honorList_11.jpg'],
    ['2009年全国中小企业融资担保创新奖', 'https://pmt8e84ed-pic16.websiteonline.cn/upload/honorList_12.jpg'],
    ['2009年度广东省优秀担保机构', 'https://pmt8e84ed-pic16.websiteonline.cn/upload/honorList_13.jpg'],
    ['2010年度诚信先进单位', 'https://pmt8e84ed-pic16.websiteonline.cn/upload/honorList_14.jpg'],
    ['中国担保辉煌先锋', 'https://pmt8e84ed-pic16.websiteonline.cn/upload/honorList_15.jpg'],
    ['广东金融创新奖', 'https://pmt8e84ed-pic16.websiteonline.cn/upload/honorList_16.jpg'],
    ['广东省中小企业融资服务示范机构', 'https://pmt8e84ed-pic16.websiteonline.cn/upload/honorList_17.jpg'],
    ['全国担保机构30强', 'https://pmt8e84ed-pic16.websiteonline.cn/upload/honorList_18.jpg'],
    ['佛山企业最满意的金融机构', 'https://pmt8e84ed-pic16.websiteonline.cn/upload/honorList_19.jpg'],
    ['最佳风险控制奖', 'https://pmt8e84ed-pic16.websiteonline.cn/upload/honorList_20.jpg'],
    ['推动行业发展特别贡献奖', 'https://pmt8e84ed-pic16.websiteonline.cn/upload/honorList_21.jpg'],
    ['2012最佳担保创新奖', 'https://pmt8e84ed-pic16.websiteonline.cn/upload/honorList_22.jpg'],
    ['中小企业信用担保突出贡献奖', 'https://pmt8e84ed-pic16.websiteonline.cn/upload/honorList_23.jpg'],
    ['全国最具公信力中小企业信用担保机构', 'https://pmt8e84ed-pic16.websiteonline.cn/upload/honorList_24.jpg'],
    ['2012年诚信先进单位', 'https://pmt8e84ed-pic16.websiteonline.cn/upload/honorList_25.jpg'],
    ['连续四年获“支持信用建设工作示范单位”', 'https://pmt8e84ed-pic16.websiteonline.cn/upload/honorList_26.jpg'],
    ['2013全国中小企业信用担保机构三十强', 'https://pmt8e84ed-pic16.websiteonline.cn/upload/honorList_27.jpg'],
    ['2013全国中小企业信用担保机构三十强2', 'https://pmt8e84ed-pic16.websiteonline.cn/upload/honorList_28.jpg'],
    ['2013最佳机构形象奖', 'https://pmt8e84ed-pic16.websiteonline.cn/upload/honorList_29.jpg'],
    ['2013年佛山市民最喜爱的品牌企业', 'https://pmt8e84ed-pic16.websiteonline.cn/upload/honorList_30.jpg'],
    ['2014广东省优秀企业文化突出贡献单位', 'https://pmt8e84ed-pic16.websiteonline.cn/upload/honorList_31.jpg'],
    ['2014年最佳担保公司', 'https://pmt8e84ed-pic16.websiteonline.cn/upload/honorList_32.jpg'],
    ['2014年最具成长性融资担保公司', 'https://pmt8e84ed-pic16.websiteonline.cn/upload/honorList_33.jpg'],
    ['2014年最具成长性融资担保公司2', 'https://pmt8e84ed-pic16.websiteonline.cn/upload/honorList_34.jpg'],
    ['2015“佛山中小微企业满意的金融机构”', 'https://pmt8e84ed-pic16.websiteonline.cn/upload/honorList_35.jpg'],
    ['2015年金龙奖——最具成长性融资担保公司1', 'https://pmt8e84ed-pic16.websiteonline.cn/upload/honorList_36.jpg'],
    ['2015年金龙奖——最具成长性融资担保公司', 'https://pmt8e84ed-pic16.websiteonline.cn/upload/honorList_37.jpg'],
    ['2016上市公司最佳创新奖', 'https://pmt8e84ed-pic16.websiteonline.cn/upload/honorList_41.jpg'],
    ['2016最具潜力上市公司奖 (1)', 'https://pmt8e84ed-pic16.websiteonline.cn/upload/honorList_42.jpg'],
    ['2016最具潜力上市公司奖', 'https://pmt8e84ed-pic16.websiteonline.cn/upload/honorList_43.jpg'],
    ['2017年度信用建设突出贡献单位', 'https://pmt8e84ed-pic16.websiteonline.cn/upload/honorList_44.jpg'],
    ['2017企业品牌信用金鼎奖', 'https://pmt8e84ed-pic16.websiteonline.cn/upload/honorList_45.jpg'],
    ['2017年最具潜力上市公司', 'https://pmt8e84ed-pic16.websiteonline.cn/upload/honorList_46.jpg'],
    ['2017年度广东省企业文化建设综合竞争力百强企业', 'https://pmt8e84ed-pic16.websiteonline.cn/upload/honorList_47.jpg'],
    ['中盈盛达荣获2018年广东金融百优奖之 “十优地方金融机构奖”', 'https://pmt8e84ed-pic16.websiteonline.cn/upload/honorList_48.jpg'],
    ['2017年度最佳创新奖', 'https://pmt8e84ed-pic16.websiteonline.cn/upload/honorList_49.jpg'],
    ['2017年度行业贡献奖', 'https://pmt8e84ed-pic16.websiteonline.cn/upload/honorList_50.jpg'],
    ['最佳企业管治奖', 'https://pmt8e84ed-pic16.websiteonline.cn/upload/honorList_51.jpg'],
    ['最佳企业管治奖、“最佳董事会秘书”', 'https://pmt8e84ed-pic16.websiteonline.cn/upload/honorList_52.jpg'],
    ['中盈盛达人保助贷产品获得全国融资担保机构优秀业务产品奖', 'https://pmt8e84ed-pic16.websiteonline.cn/upload/honorList_53.jpg'],
    ['中盈盛达人保助贷产品获得全国融资担保机构优秀业务产品奖2', 'https://pmt8e84ed-pic16.websiteonline.cn/upload/honorList_54.jpg'],
    ['“支小突出贡献奖”', 'https://pmt8e84ed-pic16.websiteonline.cn/upload/honorList_55.jpg'],
    ['“行业领军奖”', 'https://pmt8e84ed-pic16.websiteonline.cn/upload/honorList_56.jpg'],
    ['年度最佳科技创新担保公司', 'https://pmt8e84ed-pic16.websiteonline.cn/upload/honorList_57.jpg'],
    ['广东信用论坛特别支持单位', 'https://pmt8e84ed-pic16.websiteonline.cn/upload/honorList_58.jpg'],
    ['行业杰出贡献奖', 'https://pmt8e84ed-pic16.websiteonline.cn/upload/honorList_59.jpg'],
    ['疫情防控工作先进集体奖', 'https://pmt8e84ed-pic16.websiteonline.cn/upload/honorList_60.jpg'],
    ['2020年度A级金融发展创新团队', 'https://pmt8e84ed-pic16.websiteonline.cn/upload/honorList_61.jpg']
];

$(function(){
    var $container = $('#honor_list');
    var $pagination = $('#honor_list_pagination');

    var makeImgItem = function(data){
        return $('<div class="_imgItem">'+
                    '<div class="_imgWrap">'+
                        '<img src="'+data[1]+'"/>'+
                    '</div>'+
                    '<div class="_title" title="'+ data[0] +'">'+data[0]+'</div>'+
                '</div>').data('url', data[1]).on('click', function(){
                    openImgDialog($(this).data('url'));
                });
    }

    var makeImgItemWrap = function (page) {
        return $('<div class="_imgItemWrap '+page+'"></div>')
    }

    var makePageItem = function (page) {
        return $('<div class="_pageItem">'+ ( page + 1 ) +'</div>').data('page', page).on('click', function () {
            var num = $(this).data('page');
            setActive(num)
        });
    } 

    var setActive = function (num) {
        $($container).find('._imgItemWrap').removeClass('active');
        $($container).find('._imgItemWrap').eq(num).addClass('active');
        $($pagination).find('._pageItem').removeClass('active');
        $($pagination).find('._pageItem').eq(num).addClass('active');
    }

    var pageLength = Math.ceil(honorListData.length / honorList_pageSize);
    for(var i = 0 ; i < pageLength ; i++) {
        var $imgItemWrap = makeImgItemWrap(i);
        console.log('i', i);
        for(var j = i * honorList_pageSize ; j < i * honorList_pageSize + honorList_pageSize && j < honorListData.length; j++) {
            console.log('j', j);
            var $imgItem = makeImgItem(honorListData[j]);
            $($imgItemWrap).append($imgItem);
        }
        $($container).append($imgItemWrap);
        var $pageItem = makePageItem(i);
        $($pagination).append($pageItem);
    }

    setActive(0);
})



