console.log("hello world");

if(jQuery) {
console.log("jQuery loaded");
}

else {
    console.log("no query");
}
$('.faq-question').click(function() {
 $(this).children('p').slideToggle(500)
 $(this).children('button').toggleClass('closed open')
});