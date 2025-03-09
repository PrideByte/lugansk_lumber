window.addEventListener('DOMContentLoaded', function () {
    main();
});

function main() {
    const headerHeight = document.querySelector('.header')?.clientHeight;
    const buttons = document.querySelectorAll('.goods .button');
    
    if (!buttons.length) { return; }
    
    buttons.forEach(el => {
        el.addEventListener('click', e => {
            e.preventDefault();
            const scrollOffset = document.querySelector(el.getAttribute('href')).offsetTop;
            console.log(scrollOffset - headerHeight);

            window.scroll({
                top: ((scrollOffset - headerHeight) <= 0) ? 0 : (scrollOffset - headerHeight),
                left: 0,
                behavior: "smooth",
            });
        });
    });
}