$(document).ready( function() {
    $('.photo img').mouseenter( function() {
        $(this).fadeTo(600, 0.3);
    }).mouseleave(function() {
        $(this).fadeTo(600, 1);
    }).click( function() {
        $(this).next().toggle(500);
    });


    //Footer
    $('footer').click( function() {
        $(this).animate( {
            top : '-=30px',
            opacity : '-=.2'
        }, 500 );
    }).dblclick( function() {
        $(this).animate({
            top : '0',
            opacity : '1'
        }, 500);
    })

    //Plugin Magnific Popup
    $('.popup').magnificPopup( {
        type: 'image'
    });
})