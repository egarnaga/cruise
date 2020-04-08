'use strict';

(function () {
  var navMain = document.querySelector('.main-nav');
  var navToggle = document.querySelector('.main-nav__toggle');
  var logoMenu = document.querySelector('.logo-menu');

  navMain.classList.remove('main-nav--nojs');

  navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('main-nav--closed'
    )) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
      logoMenu.classList.remove('logo-menu--closed');
      logoMenu.classList.add('logo-menu--opened');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
      logoMenu.classList.add('logo-menu--closed');
      logoMenu.classList.remove('logo-menu--opened');
    }
  });
})(document.body);


