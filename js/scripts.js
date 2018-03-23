function addPaddingToBody() {
    let navbarHeight = $('.navbar').height();
    $('body').css('paddingTop', navbarHeight + 'px');
}
addPaddingToBody();

function resizeTopContainer() {
    let navbarHeight = $('.navbar').height();
    let windowHeight = $(window).height() - navbarHeight;
    $('#top-container').css('height', windowHeight + 'px');
}
resizeTopContainer();