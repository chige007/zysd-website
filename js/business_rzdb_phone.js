var business_db = {
    timer: null,
    active_tab: 'rzxdb',
    active_panel: 'zcxdb',
    tab: {
        rzxdb: {
            id: '#layer321246A86A9E0E4EA8B31DDE884591F3',
            child: {
                'zcxdb': '#layerC5BBECDA68DCB51E4BFE3608A95A5AC0',
                'syxdb': '#layerFE5314923DA592A60D77A758DE68C012'
            }
        },
        frzxdb: {
            id: '#layerE9E5CA989B700562C51A03CD4AA33263',
            child: {
                'ssbqdb': '#layerE73D68B83EA46934491FBBAEF770CB67',
                'gclydb': '#layerDABBB84CEC504980AF31D5DBB4DF1B64'
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
            $('#layer7BDBF2862C1E31511D20957E19D852BA').click();
        }, 5000);
    }
}
$(function(){
    business_db.setActiveTab('rzxdb');

    // 左箭头
    $('#layer2F197E431BCD3BABB52B7CD8639EE78B').on('click', function(){
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
    $('#layer7BDBF2862C1E31511D20957E19D852BA').on('click', function(){
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

    $('#layer127FF103BE70D44B02F4CBDCFB55EB30').on('mouseover', function(){
        clearTimeout(business_db.timer);
    }).on('mouseleave', function(){
        business_db.setInterval();
    });
})