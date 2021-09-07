$(function(){
    var config = {
        contianer: [
            '#layerDFC286E346AB1E8974EE6378480FDCB8',
            '#layer689329A08E28CC8A527557C2F997F471',
            '#layer3F1C469BF1088128BC3A07D010F5FBCC',
            '#layer9E4382DB87C260DDB22539F48BBCF60A',
            '#layer330C7917CF6E049FD67B842C3B48037E',
            '#layerC34C1F7B65FCDA1377688D708D5AD96F',
        ],
        images: [
            '#layer0295BC9A6FCE45277771C34039E7F612',
            '#layerE58F93F31F3913961A22896F76491122',
            '#layerF10854AFFF2067008B7189DE0FF8A0C8',
            '#layer3DE1A830493E217766E37CAA0BC01322',
            '#layerE5207167FD45B0A4212615649D007D48',
            '#layer91C4E0473EEE6493806E76FAA0DDF016',
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