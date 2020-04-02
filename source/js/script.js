let headerPage = document.querySelector('.page-header');
let navigationMain = document.querySelector('.main-nav');
let navigationToggle = document.querySelector('.main-nav__toggle');

headerPage.classList.remove('page-header--nojs');
navigationMain.classList.remove('main-nav--nojs');

navigationToggle.addEventListener('click', function() {
  if (navigationMain.classList.contains('main-nav--closed')) {
    navigationMain.classList.remove('main-nav--closed');
    navigationMain.classList.add('main-nav--opened');
  } else {
    navigationMain.classList.add('main-nav--closed');
    navigationMain.classList.remove('main-nav--opened');
  }
});
