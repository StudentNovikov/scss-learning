document.querySelector('.popup__btn').addEventListener('click', () => {
    document.querySelector('.popup').classList.add('show')
})

document.querySelector('.popup__close').addEventListener('click', () => {
    document.querySelector('.popup').classList.remove('show')
})

document.querySelector('.fa-hamburger').addEventListener('click', toggleMenu)

const menu = document.querySelector('.burger__menu');

function toggleMenu() {
    menu.classList.contains('show')
        ? menu.classList.remove('show')
        : menu.classList.add('show')
}