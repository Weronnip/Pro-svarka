const scrollToTopBth = document.getElementById('to-header');

window.onscroll = function() {
    Scroll()
}

function Scroll() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollToTopBth.classList.add("show");
    } else {
        scrollToTopBth.classList.remove("show");
    }
}
