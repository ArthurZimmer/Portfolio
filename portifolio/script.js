function scrollToElement(elementSelector, instance = 0) {
    const elements = $(elementSelector);
    
    if (elements.length > instance) {
        $('html, body').animate({
            scrollTop: $(elements[instance]).offset().top
        }, 'smooth');
    }
}

$('#link1').on('click', function() {
    scrollToElement('.header');
});

$('#link2').on('click', function() {
    scrollToElement('.header', 1);
});

$('#link3').on('click', function() {
    scrollToElement('.column');
});
