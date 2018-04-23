define(['jq', 'hand', 'tab'], function($, hand, tab) {
    function newA() {

        $.ajax({
            url: '../../data/data.json',
            success: function(data) {
                console.log(data)
                var tpl = $('#tpl').html();
                var template = hand.compile(tpl);
                var html = template(data);
                $('body').html(html);
            }
        })

        $('.jia').click(function() {
            if ($(this).children().eq(0).html() == '-') {
                $(this).children().eq(0).html('+')
                $(this).next().addClass('show')
            } else {
                $(this).children().eq(0).html('-')
                $(this).next().removeClass('show')
            }
        })
        $('.second').click(function() {
            if ($(this).children().eq(0).html() == '-') {
                $(this).children().eq(0).html('+')
                $(this).next().addClass('show')
            } else {
                $(this).children().eq(0).html('-')
                $(this).next().removeClass('show')
            }
        })
        $('.second-1').click(function() {
            if ($(this).children().eq(0).html() == '-') {
                $(this).children().eq(0).html('+')
                $(this).next().addClass('show')
            } else {
                $(this).children().eq(0).html('-')
                $(this).next().removeClass('show')
            }
        })
        $('.second-2').click(function() {
            if ($(this).children().eq(0).html() == '-') {
                $(this).children().eq(0).html('+')
                $(this).next().addClass('show')
            } else {
                $(this).children().eq(0).html('-')
                $(this).next().removeClass('show')
            }
        })
    }
    return {
        newA: newA
    }


})