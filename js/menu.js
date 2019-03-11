var menu = document.querySelector('.header__list');
var button = document.querySelector('.header__navbutton');

button.addEventListener('click', function(event) {
  if (menu.classList.contains('menu--opened')) {
    menu.classList.remove('menu--opened');
    button.classList.remove('button--close');
    menu.classList.add('menu--closed')
  } else {
    menu.classList.remove('menu--closed');
    button.classList.add('button--close');
    menu.classList.add('menu--opened')
  }
});
