var business_db = {
    timer: null,
    active_tab: 'rzxdb',
    active_panel: 'zcxdb',
    tab: {
        rzxdb: {
            id: '#layer5F0595938E486F7557CC1003D1F475AD',
            child: {
                'zcxdb': '#layer5F677FF23032A88472CB43D8CA957AB4',
                'syxdb': '#layer972CC187F72FB710944166E28610DB4F'
            }
        },
        frzxdb: {
            id: '#layerBB4B038002EAEAE37EB5CABFBB800944',
            child: {
                'ssbqdb': '#layer72B2C4D6DC65A7076D5CE6A479F83438',
                'gclydb': '#layer66CE516183D6199FD295B3AD01ED8D06'
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
            $('#layer936CC785CE53488718B5250A563595CD').click();
        }, 5000);
    }
}
$(function(){
    business_db.setActiveTab('rzxdb');

    // 左箭头
    $('#layer9C117330023FB22465E8CC91E3F443C4').on('click', function(){
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
    $('#layer936CC785CE53488718B5250A563595CD').on('click', function(){
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

    $('#layer2230A51786149C5E3CF67E20E84142E0').on('mouseover', function(){
        clearTimeout(business_db.timer);
    }).on('mouseleave', function(){
        business_db.setInterval();
    });
})