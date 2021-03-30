const CLASS_BURGER_CLICKED = 'menu__burger-clicked';
const CLASS_LIST_SHOW = 'list-show';
const menu_button = document.querySelector('.menu__burger');
const menu_list = document.querySelector('.menu__list');

menu_button.addEventListener('click', toggleMenu);
menu_button.addEventListener('click', animateButton);

function animateButton() {
    menu_button.classList.contains(CLASS_BURGER_CLICKED)
        ? menu_button.classList.remove(CLASS_BURGER_CLICKED)
        : menu_button.classList.add(CLASS_BURGER_CLICKED)
}

function toggleMenu() {
    menu_list.classList.contains(CLASS_LIST_SHOW)
        ? menu_list.classList.remove(CLASS_LIST_SHOW)
        : menu_list.classList.add(CLASS_LIST_SHOW)

}