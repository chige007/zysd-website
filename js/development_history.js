var development_history_data = {
    '2003': {
        '6月': '2003年，为打造产业强市，佛山市委市政府决定引入担保扶持中小微企业。6月6日，中盈盛达在政府出资引导下正式成立。',
    },
    '2006': {
        '6月': '2006年6月，中盈盛达被全国中小企业信用担保机构负责人联席会议评为“全国最具影响力中小企业信用担保机构”，标志着中盈盛达已跻身全国担保行业的前列。',
        '12月': '2006年12月，被广东省经贸委、财政厅、地税局、国税局、工商局、金融办和人民银行联合确认为“广东省中小企业信用担保机构示范单位”（首批）。',
    },
    '2007': {
        '4月': '2007年4月，中盈盛达增资扩股至2.0513亿元，并在此次增资扩股中正式在经营团队高层管理人员和核心骨干中实施“股权激励计划”。'
    },
    '2008': {
        '8月': '2008年8月，中盈盛达参与发起设立广东省信用协会，并当选常务副会长单位，由此开启了我司参与全省社会信用体系建设的探索道路。',
        '9月': '2008年9月，中盈盛达董事长吴列进被全国中小企业信用担保机构负责人联席会议评为“中小企业信用担保机构领军人物”（首批10人）。'
    },
    '2009': {
        '9月': '2009年9月26日，中盈盛达与合肥国资和当地优秀民营企业共同设立安徽中盈盛达担保投资有限公司，标志着中盈盛达模式走出广东，在长三角地区复制推广。'
    },
    '2010': {
        '12月': '2010年12月，全省融资性担保公司规范整顿验收工作现场观摩会在中盈盛达召开，中盈盛达成为全省首个通过市级验收的担保机构。同时，中盈盛达被广东省人民政府授予2010年广东省 “金融创新奖”，这是省政府和相关监管部门对中盈盛达规范性和创新性的高度肯定。'
    },
    '2011': {
        '6月': '2011年6月，佛山禅城中盈盛达小额贷款有限公司正式成立，标志着中盈盛达在产业链扩张、打造中小微企业系统化投融资服务平台上迈出了重要一步。'
    },
    '2012': {
        '12月': '2012年12月，中盈盛达被全国中小企业信用担保机构负责人联席会议评为“全国最具公信力中小企业信用担保机构”，授予“中小企业信用担保突出贡献奖”。'
    },
    '2014': {
        '6月': '2014年6月6日，中盈盛达与中山市、火炬开发区两级国资，以及当地优秀民营企业共同出资设立中山中盈盛达科技融资担保投资有限公司，标志着中盈盛达探索混合所有制模式在珠三角地区复制推广。'
    },
    '2015': {
        '12月': '2015年12月23日，中盈盛达在香港H股正式挂牌上市，成功进军资本市场。',
        '12月 ': '2015年12月25日，云浮市普惠融资担保股份有限公司获广东省金融局批准成立。这是云浮市政府贯彻落实省经信委、财政厅“粤经信技术〔2015) 315 号”文件为支持云浮经济发展战略以及提高政策担保机构运作效率，由云浮市政府运用改革创新思维参照公共产品PPP模式，引入上市品牌专业机构——广东中盈盛达融资担保公司和温氏集团组建的政策性担保平台。',
    },
    '2016': {
        '12月': '2016年12月，中盈盛达董事长吴列进被评为“广东十大经济风云人物”、“十大徽商领袖”。',
        '12月 ': '2016年荣膺《中国融资》年度最具潜力上市公司奖与最佳创新上市公司奖。'
    },
    '2017': {
        '6月': '2017年6月，中盈盛达当选为广东省信用协会会长单位，标志着中盈盛达逐渐从信用事业的参与者成为引领者。'
    },
    '2018': {
        '1月': '2018年1月，中盈盛达董事长吴列进光荣当选第十三届全国人大代表。',
        '4月': '2018年4月，中盈盛达完成H股、内资股同步增发，佛山金控成为公司第一大股东，省市区三级国资持股比例超过31%，中盈盛达开启“国有体制 市场机制”发展新模式。',
        '6月': '2018年6月，中盈盛达荣获2018年广东金融百优奖之“十优地方金融机构奖”。',
    },
    '2019': {
        '11月': '2019年 11 月，佛山市正式设立了首期规模为 3 亿元的融资担保基金，成为广东首个设立地方担保基金对接国家融资担保基金、省再担保的地级市，构建了三级政府风险分担机制，中盈盛达成为首批合作机构。'
    },
    '2020': {
        '3月': '2020年3月，中盈盛达成为佛山市创业担保贷款担保基金运营管理机构；同年9月，中盈盛达被认定为广东省首批政府性融资担保机构，标志着中盈盛达已成为地方政府扶持中小微企业、推动实体经济发展的重要抓手。 ',
    },
    '2021': {
        '10月': '2021年10月，中盈盛达国际金融中心正式启用，成为佛山地方金融新地标。'
    }
};
$(function(){

    var timeline = $('#development-history .development-history-timeline .development-history-timeline-dot-wrap').eq(0);
    var content = $('#development-history .development-history-content').eq(0);
    var getTimeDot = function(year) {
        return $('<div class="development-history-timeline-dot"><p>'+ year +'</p><div></div></div>').data('year', year).on('click', function() {
            if ($(this).hasClass('active'))
                return;
            setActive($(this).index());
        });
    }
    var getMonthEvents = function (month, content) {
        return '<div class="development-history-content-month-event">'+
                    '<div class="development-history-content-month-event-left">'+
                        month+
                    '</div>'+
                    '<div class="development-history-content-month-event-right">'+
                        content+
                    '</div>'+
                '</div>'
    }
    var getYearEvents = function (year, content) {
        var monthEventsDom = '';
        for (var x in content) {
            monthEventsDom += getMonthEvents(x, content[x]);
        }
        var dom = $('<div class="development-history-content-year-event">'+
                    '<div class="development-history-content-year-event-title">'+ year +' 公司大事纪</div>'+
                    '<div class="development-history-content-month-event-top">'+
                        '<img src="https://pmt8e84ed-pic16.websiteonline.cn/upload/jbsf.png" alt="">'+
                    '</div>'+
                    '<div class="development-history-content-month-event-wrap">'+
                        monthEventsDom+
                    '</div>'+
                    '<div class="development-history-content-month-event-bottom">'+
                        '<img src="https://pmt8e84ed-pic16.websiteonline.cn/upload/d4mx.png" alt="">'+
                    '</div>'+
                '</div>').data('year', year).on('click', function() {
                    if ($(this).hasClass('active-right')) {
                        setActive($(this).index());
                    } else if ($(this).hasClass('active-left')) {
                        setActive($(this).index());
                    }
                }).on('mousewheel', function(event, delta){
                    event.preventDefault();
                    event.stopPropagation();
                    var delta = (event.originalEvent.wheelDelta && (event.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  // chrome & ie
                            (event.originalEvent.detail && (event.originalEvent.detail > 0 ? -1 : 1));  
                    var dir = delta > 0 ? 'Up' : 'Down';
                    if (dir === 'Up') {
                        $(this).find('.development-history-content-month-event-top').click();
                    } else {
                        $(this).find('.development-history-content-month-event-bottom').click();
                    }
                });
        var scrolling = false;
        $(dom).find('.development-history-content-month-event-top').on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            if (scrolling) return;
            var eventWrap = $(this).siblings('.development-history-content-month-event-wrap').eq(0);
            var scrollTop = $(eventWrap)[0].scrollTop;
            if (scrollTop === 0) 
                return;
            scrolling = true;
            $(eventWrap).animate({scrollTop: scrollTop - 80 <= 0 ? 0 : scrollTop - 80}, 400, function() {
                scrolling = false;
            });
        });
        $(dom).find('.development-history-content-month-event-bottom').on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            if (scrolling) return;
            var eventWrap = $(this).siblings('.development-history-content-month-event-wrap').eq(0);
            var scrollTop = $(eventWrap)[0].scrollTop;
            scrolling = true;
            $(eventWrap).animate({scrollTop: scrollTop + 80}, 400, function() {
                scrolling = false;
            });
        });
        return dom;
    }
    var setActive = function(index) {
        $(timeline).find('.development-history-timeline-dot').removeClass('active');
        var offsetLeft = $(timeline).find('.development-history-timeline-dot').eq(index).addClass('active').offset().left;
        var wrapWidth = $(timeline).innerWidth();
        scrollLeft = $(timeline)[0].scrollLeft;
        $(timeline).animate({scrollLeft: scrollLeft + offsetLeft - wrapWidth / 2}, 400); 
        $(content).find('.development-history-content-year-event').removeClass('active active-left active-right');
        $(content).find('.development-history-content-year-event').eq(index).addClass('active');
        $(content).find('.development-history-content-year-event').eq(index - 1).addClass('active-left');
        $(content).find('.development-history-content-year-event').eq(index + 1).addClass('active-right');
    }

    for (var x in development_history_data) {
        $(timeline).append(getTimeDot(x));
        $(content).append(getYearEvents(x, development_history_data[x]));
    }

    setActive(Object.keys(development_history_data).length / 2 + 1);
    
});