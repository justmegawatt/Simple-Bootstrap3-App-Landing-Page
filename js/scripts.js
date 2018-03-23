function addPaddingToBody() {
    let navbarHeight = $('.navbar').height();
    $('body').css('paddingTop', navbarHeight + 'px');
}
addPaddingToBody();

function resizeSectionContainers() {
    let navbarHeight = $('.navbar').height();
    let windowHeight = $(window).height() - navbarHeight;
    $('.section-container').css('height', windowHeight + 'px');
}
resizeSectionContainers();

// function moveTopContentDown() {
//     let navbarHeight = $('.navbar').height();
//     let windowHeight = $(window).height() - navbarHeight;
//     $('#top-content').css('marginTop', windowHeight/4)
// }
// moveTopContentDown();