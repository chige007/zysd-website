$(function() {
    $('#layerA37493782DCC6B27B80972BF154DD9B4, #layerE31431D1202321F01C86F3A60EE25584, #layer6A0CD9E16A16CB26798FCF7E295523E7').on('mouseover', function() {
        $('#layer44D4A474A62EA1A2A26CB9912A35DDB3').addClass('show');
    }).addClass('zysd_tab').data('index', 0);
    $('#layer44D4A474A62EA1A2A26CB9912A35DDB3').on('mouseleave', function () {
        if ($(this).hasClass('active'))return;
        $(this).removeClass('show');
    }).addClass('zysd_tab').data('index', 0);

    $('#layerDE0335CF0433CDC278B0B30D98224D51, #layer201E8D710188E37F0F35693DF318C13A, #layer0A4A7F34F3376E81F2F235499C8F670B').on('mouseover', function() {
        $('#layer3ABBD1801C65E2A05094C4C8D2FEE26F').addClass('show');
    }).addClass('zysd_tab').data('index', 1);
    $('#layer3ABBD1801C65E2A05094C4C8D2FEE26F').on('mouseleave', function () {
        if ($(this).hasClass('active'))return;
        $(this).removeClass('show');
    }).addClass('zysd_tab').data('index', 1);

    $('#layerFDB10AC7E265F5B6B56141E6EE797866, #layer53F088935CF699578D1DCC328DD03A05, #layerA32F2216185183710A0AE6FCB9E78ECE').on('mouseover', function() {
        $('#layer52E7F1F2A21DDC97D04B24DAF5DF5F2E').addClass('show');
    }).addClass('zysd_tab').data('index', 2);
    $('#layer52E7F1F2A21DDC97D04B24DAF5DF5F2E').on('mouseleave', function () {
        if ($(this).hasClass('active'))return;
        $(this).removeClass('show');
    }).addClass('zysd_tab').data('index', 2);

    var setActive = function (index) {
        var content = [
            '#layer4684C600AF371A6618B43CDB0DDFAA21',
            '#layerA858B29C3843DDA6A13CD6A9EA48CC0C',
            '#layerAFF5949973ACFA385B38C66888415EF5'
        ]
        var image = [
            '#layer44D4A474A62EA1A2A26CB9912A35DDB3',
            '#layer3ABBD1801C65E2A05094C4C8D2FEE26F',
            '#layer52E7F1F2A21DDC97D04B24DAF5DF5F2E'
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