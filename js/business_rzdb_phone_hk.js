var business_db = {
    timer: null,
    active_tab: 'rzxdb',
    active_panel: 'zcxdb',
    tab: {
        rzxdb: {
            id: '#layer911B19346A06991E15EDAAE7D3ABD1EB',
            child: {
                'zcxdb': '#layer29A5A1158E90E07C90B0BA9DA0C5D98D',
                'syxdb': '#layer2B949C5B981F15336666D5C5BF5F8210'
            }
        },
        frzxdb: {
            id: '#layer8340130A211DD5A33BDC0CCDDD5068B7',
            child: {
                'ssbqdb': '#layer4CD5086FB631934A61A55138D690880F',
                'gclydb': '#layer85600F483B70BC030C5A8B6FE1FA4C78'
            }
        }
    },
    setActiveTab: function(key) {
        $(this.tab[this.active_tab]['id']).removeClass('active');
        $(this.tab[this.active_tab]['child'][this.active_panel]).removeClass('show');
        this.active_tab = key;
        $(this.tab[key]['id']).addClass('active');
        var tabChild = Object.keys(this.tab[key]['child']);
        this.setActivePanel(tabChild[0]);
    },
    setActivePanel: function (key) {
        $(this.tab[this.active_tab]['child'][this.active_panel]).removeClass('show');
        this.active_panel = key;
        $(this.tab[this.active_tab]['child'][key]).addClass('show');
    },
    setInterval: function(){
        business_db.timer = setInterval(function() {
            $('#layerD09005608052879F5B245D715C38CA8F').click();
        }, 5000);
    }
}
$(function(){
    business_db.setActiveTab('rzxdb');

    // 左箭头
    $('#layer070AAE4AFF231319115027497506E5E7').on('click', function(){
        var tab = business_db.tab[business_db.active_tab];
        var active = business_db.active_panel;
        var childKeys = Object.keys(tab.child);
        var index = childKeys.indexOf(active);
        var newActive = childKeys[index - 1];
        if (index === 0) {
            newActive = childKeys[childKeys.length - 1];
        }
        business_db.setActivePanel(newActive);
    });
    // 右箭头
    $('#layerD09005608052879F5B245D715C38CA8F').on('click', function(){
        var tab = business_db.tab[business_db.active_tab];
        var active = business_db.active_panel;
        var childKeys = Object.keys(tab.child);
        var index = childKeys.indexOf(active);
        var newActive = childKeys[index + 1];
        if (index === childKeys.length - 1) {
            newActive = childKeys[0];
        }
        business_db.setActivePanel(newActive);
    });

    business_db.setInterval();

    $('#layer66B38439E0D774331C32BDEE82CA8AEA').on('mouseover', function(){
        clearTimeout(business_db.timer);
    }).on('mouseleave', function(){
        business_db.setInterval();
    });
})