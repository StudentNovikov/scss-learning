new Splide('.splide', {
    type: 'loop',
    height: '25rem',
    autoWidth: true,
    focus: 'center',
}).mount();

document.querySelectorAll('.spoiler__header').forEach(header => {
    header.addEventListener('click', (e) => {
        if (e.target.nextElementSibling.classList.contains('show')) {
            e.target.nextElementSibling.classList.remove('show');
        } else {
            e.target.nextElementSibling.classList.add('show');
        }
    })
})