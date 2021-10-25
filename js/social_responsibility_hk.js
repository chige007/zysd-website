$(function(){
    var config = {
        contianer: [
            '#layer33169231D3C4F261C709BF8B75F4DF37',
            '#layerB24B50138ECC9568DDF0F8A9F3883621',
            '#layer78AF232B0DADD184833BC8523DB557D0',
            '#layer7D8C5448E8CF4344FAC96DB6DB5D6D77',
            '#layer1DEEC3D4FD89A4908C52F7BC279A1CA8',
            '#layer66013BE2C2373D44986473FE3C996681',
        ],
        images: [
            '#layerF320E7D27C9AB42BFF752CC00DC203FF',
            '#layerAE034F2DED4097FE4A0FD09EAA516F8B',
            '#layer8EE6409DD3CD0895AD3D20E6A169AD55',
            '#layerE35E15A0807C09C44A678B2F473201EC',
            '#layer3B4CDB932CC72EB72644944B566EFA8B',
            '#layer8E84291A8B8D3DA110C2C78E6CF92ED5',
        ]
    }

    for (var i = 0 ; i < config.contianer.length ; i++) {
        var contianer = config.contianer[i];
        $(contianer).hide();
    }

    for (var i = 0 ; i < config.contianer.length ; i++) {
        var img = config.images[i];
        var container = config.contianer[i];
        (function(_img, _container){
            $(_img).on('mouseover', function (e) {
                e.stopPropagation();
                $(_container).fadeIn(400);
            })
            $(_container).on('mouseleave', function (e) {
                e.stopPropagation();
                $(this).fadeOut(400);
            });
        })(img, container)
    }
});