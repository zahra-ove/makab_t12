$(document).ready(function() {

    $('#logo').hover(function(){
        $('#logo').removeClass('bg-almostdark');
        // $('#logo').css("color", "black !important");
        $('#logo').removeClass('text-white');
        $('#logo').css('color', 'black');
    });

    $('#logo').mouseout(function(){
        $('#logo').addClass('bg-almostdark');
        $('#logo').css('color', 'white');
    })


    $('#toggleMenu').click(function(){
        $('#navbarSupportedContent').toggleClass('d-none');
    })

    $('#toggleMenu').click(function(){
        $('#toggleMenu').css('background-color', 'white');
        $("#toggleMenu").find('.fa-bars').addClass('blackColor');
    })
});

