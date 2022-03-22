//scroll
export function initNavMenu() {
    var navbar = document.querySelector('nav')
    window.onscroll = function () {
        // pageYOffset or scrollY
        if (window.pageYOffset > 100) {
            navbar.classList.add('stickyadd')
        } else {
            navbar.classList.remove('stickyadd')
        }
    }
}