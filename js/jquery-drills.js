$(document).ready(function() {
    $('#bgColor').css('background-color','red')
    $('#cloneDiv').clone().appendTo( "#cloneContainer" );
    $('.buttonlist .btn:odd').addClass('btn-warning');
    $('.buttonlist .btn:nth-child(4)').addClass('btn-info');
    $('#inputPassword').prop( "disabled", true);
    $('.checkbox input').prop( "checked", true);
    $('#inputName').prop( "placeholder", "Emanuele");
    $( "select option:contains('Orange')" ).prop("selected", true)
    $( '#hidee' ).hide();
    $( "#slideme" ).slideUp();
    $( "#fademe" ).fadeIn();
    $( "#removeme" ).remove();
    $( "#emptyme" ).empty();
    $('.highlight-divs').not(".highlighted").css({opacity: 0.5});
    $( "#findme" ).css({position: "relative", top: 25, left: 25}).text('position: "relative", top: 25, left: 25');
});