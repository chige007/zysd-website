$(function() {
    $('#layerD0CE0FF76B6019FA22B58CBEECF76B14, #layerFB20D789EFA02D594E8E75D8CAFDA082, #layerAFAD7C9E9B91A4B90A80404B64D7E1C7').on('mouseover', function() {
        $('#layer60601DE8DC252E362C5EF21F5E87CA08').addClass('show');
    }).addClass('zysd_tab').data('index', 0);
    $('#layer60601DE8DC252E362C5EF21F5E87CA08').on('mouseleave', function () {
        if ($(this).hasClass('active'))return;
        $(this).removeClass('show');
    }).addClass('zysd_tab').data('index', 0);
    $('#layer15BD078BDD1E2AFE842E622CB9E4EDEE, #layerBA1917BC374FA3A77E740FCE35F36C6A, #layerC6A3F8F7DF43CE9E6E8FF556D6758964').on('mouseover', function() {
        $('#layer0CC6CAFD052165553B083A8451E194D5').addClass('show');
    }).addClass('zysd_tab').data('index', 1);
    $('#layer0CC6CAFD052165553B083A8451E194D5').on('mouseleave', function () {
        if ($(this).hasClass('active'))return;
        $(this).removeClass('show');
    }).addClass('zysd_tab').data('index', 1);
    $('#layerF94BD75A43EB9DE2EA704E7D7D7BDBB5, #layer5E37F953AEF1350FF4EF132CA12004A5, #layer0DF247B171FFF5A1985B25A9080CEE0E').on('mouseover', function() {
        $('#layer2C65B22AF9A46AF9C61AEBF0B92A5379').addClass('show');
    }).addClass('zysd_tab').data('index', 2);
    $('#layer2C65B22AF9A46AF9C61AEBF0B92A5379').on('mouseleave', function () {
        if ($(this).hasClass('active'))return;
        $(this).removeClass('show');
    }).addClass('zysd_tab').data('index', 2);

    var setActive = function (index) {
        var content = [
            '#layer1C97E5A0A052B55ABBEF0B81857BB91A',
            '#layer09C3710D5E64FE624327C5F62193B0C7',
            '#layer6C9CCF4CF63D50A7409EE6391FE9F683'
        ]
        var image = [
            '#layer60601DE8DC252E362C5EF21F5E87CA08',
            '#layer0CC6CAFD052165553B083A8451E194D5',
            '#layer2C65B22AF9A46AF9C61AEBF0B92A5379'
        ]
        $(image[0] + ', ' + image[1] + ', ' + image[2]).removeClass('show active');
        $(image[index]).addClass('show active')
        $(content[0] + ', ' + content[1] + ', ' + content[2]).removeClass('zysd-right-show');
        $(content[index]).addClass('zysd-right-show')
    }


    $('.zysd_tab').on('click', function (e) {
        e.stopPropagation();
        var index = $(this).data('index');
        setActive(index);
    });

    setActive(0);
});