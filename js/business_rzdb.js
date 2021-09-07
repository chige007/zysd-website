var business_db = {
    timer: null,
    active_tab: 'rzxdb',
    active_panel: 'zcxdb',
    tab: {
        rzxdb: {
            id: '#layerE8C2DDE8402AA1972250643868EFD071',
            child: {
                'zcxdb': '#layer48AEFB2B6EDD76671203F07E219414BD',
                'syxdb': '#layerDED703A60CE02E4B20FC732537EE7CAB'
            }
        },
        frzxdb: {
            id: '#layerBE45EE52C9F5032CE0FBB5B839236BF2',
            child: {
                'ssbqdb': '#layer8ACC27FEEB8930976FE0EDD1BFDF50B4',
                'gclydb': '#layer4CEBF4C185AB507DFE851915032FA23D'
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
            $('#layer8BAAF46336184E289CD166DFD9CC2296').click();
        }, 5000);
    }
}
$(function(){
    business_db.setActiveTab('rzxdb');

    // 左箭头
    $('#layer4EE35A1BB7F7E75BF353D9AF81A56D6C').on('click', function(){
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
    $('#layer8BAAF46336184E289CD166DFD9CC2296').on('click', function(){
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

    $('#layer92794E0C8CB16D2C517BF200A264A93A').on('mouseover', function(){
        clearTimeout(business_db.timer);
    }).on('mouseleave', function(){
        business_db.setInterval();
    });
})