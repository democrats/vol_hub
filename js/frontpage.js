$(document).ready(function() {
    //Autofill Donate Form
    $('[data-amt]').click(function() {
        var amount = $(this).data('amt');
        $('input[value="' + amount + '"]').attr('checked', true);
            $('#autofill-donate').submit();
    });
    //45 for 45 form
    $('#donation-45').click(function(){
        $('#input-45').attr('checked', true);
        $('#form-45').submit();
    });
//Election Countdown
var now = new Date();
var electionDay = new Date("Tue Nov 8 2016 03:00:00 GMT-0400 (EDT)");
var daysTil = (electionDay - now ) / 1000 / 60 / 60 / 24;
var eDay = Math.ceil(daysTil)
console.log(daysTil);    
console.log(eDay);
$('#days').text(eDay);


//Action Links
$('.overlay-iwv').click(function() {
    window.open('https://iwillvote.com');
}); $('.action-vol').click(function() {
    window.open('https://my.democrats.org/page/s/help-elect-democrats');
}); $('.action-share').click(function() {
    window.open('https://democrats.org/my-vote');
}); $('.action-speak').click(function() {
    window.open('http://my.democrats.org/page/s/hvf-share-your-story');
}); $('.action-learn').click(function() {
    window.open('https://democrats.org/page/fact-check');
});

//Social Toggle
$('.social-toggle').click(function() {
    $(this).toggleClass('active');
    $('.social-visible, .social-toggle-box').toggleClass('active');

});
//Mobile Social Toggle
$('.navbar-toggle').click(function() {
    $(this).toggleClass('active');
    $('.mobile-nav').slideToggle();
}); $(window).resize(function() {
    if ($(window).width() > 768) {
        $('.mobile-nav').hide();
    }
});

});