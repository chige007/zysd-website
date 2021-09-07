var prospectus_supplement = {
    active: '2020',
    data: {
        '2015': [
            {
                name: '截止2015年12月31日止年度业绩公告',
                cn: 'https://pmt8e84ed-pic16.websiteonline.cn/upload/yjbg-2015-1.pdf',
                en: 'https://pmt8e84ed-pic16.websiteonline.cn/upload/yjbg-2015-1.pdf',
                date: '2016年3月28日'
            }
        ],
        '2016': [
            {
                name: '截至2016年6月30日止六个月之中期业绩报告',
                cn: 'https://pmt8e84ed-pic16.websiteonline.cn/upload/yjbg-2016-1.pdf',
                en: 'https://pmt8e84ed-pic16.websiteonline.cn/upload/yjbg-2016-1.pdf',
                date: '2016年8月25日'
            },
            {
                name: '截至2016年12月31日止年度年度业绩公佈',
                cn: 'https://pmt8e84ed-pic16.websiteonline.cn/upload/yjbg-2016-2.pdf',
                en: 'https://pmt8e84ed-pic16.websiteonline.cn/upload/yjbg-2016-2.pdf',
                date: '2017年3月28日'
            },
        ],
        '2017': [
            {
                name: '截至2017年6月30日止六个月之中期业绩公告',
                cn: 'https://pmt8e84ed-pic16.websiteonline.cn/upload/yjbg-2017-1.pdf',
                en: 'https://pmt8e84ed-pic16.websiteonline.cn/upload/yjbg-2017-1.pdf',
                date: '2017年8月28日'
            },
            {
                name: '截至2017年12月31日止年度年度業績公佈',
                cn: 'https://pmt8e84ed-pic16.websiteonline.cn/upload/yjbg-2017-2.pdf',
                en: 'https://pmt8e84ed-pic16.websiteonline.cn/upload/yjbg-2017-2.pdf',
                date: '2017年3月28日'
            },
        ],
        '2018': [
            {
                name: '截至2018年6月30日止六個月之中期業績公告',
                cn: 'https://pmt8e84ed-pic16.websiteonline.cn/upload/yjbg-2018-1.pdf',
                en: 'https://pmt8e84ed-pic16.websiteonline.cn/upload/yjbg-2018-1.pdf',
                date: '2018年8月28日'
            },
            {
                name: '截至2018年12月31日止年度 年度業績公佈',
                cn: 'https://pmt8e84ed-pic16.websiteonline.cn/upload/yjbg-2018-2.pdf',
                en: 'https://pmt8e84ed-pic16.websiteonline.cn/upload/yjbg-2018-2.pdf',
                date: '2019年3月18日'
            },
        ],
        '2019': [
            {
                name: '截至2019年6月30日止六個月之中期業績公告',
                cn: 'https://pmt8e84ed-pic16.websiteonline.cn/upload/yjbg-2019-1.pdf',
                en: 'https://pmt8e84ed-pic16.websiteonline.cn/upload/yjbg-2019-1.pdf',
                date: '2019年8月28日'
            },
            {
                name: '截至2019年12月31日止年度年度業績公佈',
                cn: 'https://pmt8e84ed-pic16.websiteonline.cn/upload/yjbg-2019-2.pdf',
                en: 'https://pmt8e84ed-pic16.websiteonline.cn/upload/yjbg-2019-2.pdf',
                date: '2020年3月25日'
            },
        ],
        '2020': [
            {
                name: '截至2020年6月30日止六個月之中期業績公告',
                cn: 'https://pmt8e84ed-pic16.websiteonline.cn/upload/yjbg-2020-1.pdf',
                en: 'https://pmt8e84ed-pic16.websiteonline.cn/upload/yjbg-2020-1.pdf',
                date: '2020年8月13日'
            },
            {
                name: '截至2020年12月31日止年度年度業績公佈',
                cn: 'https://pmt8e84ed-pic16.websiteonline.cn/upload/yjbg-2020-2.pdf',
                en: 'https://pmt8e84ed-pic16.websiteonline.cn/upload/yjbg-2020-2.pdf',
                date: '2021年3月26日'
            },
        ],
    }
}

$(function(){
    var timeline = $('#prospectus_supplement ._timeline ._timeItems').eq(0);
    var report = $('#prospectus_supplement ._reports').eq(0);

    var data = prospectus_supplement.data;

    var makeTimeItem = function (year) {
        return $('<div class="_timeItem '+ year +'">'+
                    '<p>'+ year +'</p>'+
                    '<img src="https://pmt8e84ed-pic16.websiteonline.cn/upload/a6db.png"/>'+
                '</div>').on('click', function(){
                    if ($(this).hasClass('active')) return;
                    setActive(year);
                });
    }

    var makeReport = function (year, data) {
        var _reportWrap = $('<div class="_reportWrap '+ year +'"></div>').data('year', year);
        for (var i = 0 ; i < data.length ; i++) {
            var _report = $('<div class="_report">'+
                '<img src="https://pmt8e84ed-pic16.websiteonline.cn/upload/pnn0.png"/>'+
                '<div class="_content">'+
                    '<p class="_title">'+data[i].name+'</p>'+
                    '<div class="_line"></div>'+
                    '<p class="_date">'+data[i].date+'</p>'+
                    '<div class="_buttons">'+
                        '<a href="'+data[i].cn+'" target="_blank">中文下载</a>'+
                        '<a href="'+data[i].en+'" target="_blank">英文下载</a>'+
                    '</div>'+
                '</div>'+
            '</div>');
            $(_reportWrap).append(_report);
        }
        return _reportWrap;
    }

    var setActive = function (year) {
        $(timeline).find('._timeItem').removeClass('active');
        $(timeline).find('._timeItem.' + year).addClass('active');
        $(report).find('._reportWrap').removeClass('zysd-right-show active');
        $(report).find('._reportWrap.' + year).addClass('zysd-right-show active');
    }

    for(var x in data) {
        console.log(x);
        var _timeItem = makeTimeItem(x);
        $(timeline).append(_timeItem);
        var _report = makeReport(x, data[x]);
        $(report).append(_report);
    }

    var dataKeys = Object.keys(data);
    setActive(dataKeys[dataKeys.length - 1]);
})