window.addEventListener('DOMContentLoaded', function () {
    menu();
});

window.addEventListener('resize', function (e) {
    const header = document.querySelector('.header');
    const headerIsActie = [...header.classList].includes('header__active');

    if ((this.window.innerWidth > 900) && headerIsActie) {
        document.body.style.overflow = "visible";
    } else {
        headerIsActie && (document.body.style.overflow = "hidden");
    }
})

function menu() {
    const header = document.querySelector('.header');
    if (!header) { return; }
    const burgerButton = header.querySelector('.header__nav-burger');

    burgerButton.onclick = function (event) {
        if (header.classList.contains('header__active')) {
            header.classList.remove('header__active');
            document.body.style.overflow = "visible";
        } else {
            header.classList.add('header__active');
            document.body.style.overflow = "hidden";
        }
    }
}