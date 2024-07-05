
const search = document.querySelector('.search');
const input = document.querySelector('.header__item-form');
const inputClose = document.querySelector('.header__input-close');

const buttonOpen = document.querySelector(".menu__mobile");
const buttonClose = document.querySelector('.header__item-close');
const menu = document.querySelector('.header__list');
const shadow = document.querySelector('.shadow');



search.addEventListener('click', ()=> {
  input.classList.add('open');
});

inputClose.addEventListener('click', ()=> {
  input.classList.remove('open');
});




buttonOpen.addEventListener('click', ()=> {
  menu.classList.add('mobile__list');
  shadow.classList.add('open');
});

buttonClose.addEventListener('click', ()=> {
  menu.classList.remove('mobile__list');
  shadow.classList.remove('open');
});