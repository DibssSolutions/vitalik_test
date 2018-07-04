import sayHello from './lib/sayHello.js';

sayHello();

document.querySelector('.lang-changer').addEventListener('mouseover', (e) => {
  document.querySelector('.lang-changer').classList.toggle('lang-changer--open');
});
