$(function() {
    $('form').submit(function(event) {
        $('#result').html('');
        var $input = $(event.target).find('input');
        var comment = $input.val();

        $.getJSON("https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=" + comment + "&prop=info&inprop=url&callback=?", function(json) {
        if (json.query.searchinfo.totalhits === 0) {
            $('#result').append("<div class='box'>No result found. Please try again.</div>")
        } else {
            for (var i = 0; i < 9; i++) {
                var title = json.query.search[i].title;
                
                $('#result').append("<div class='box'><a href='https://en.wikipedia.org/wiki/" + title + "' target='_blank'>" + title + "</a>" + "<br>" + json.query.search[i].snippet + "</div>" + "<br>")
            }
        }
        });
        $('.form-control').val("");

        return false;
    });

});
