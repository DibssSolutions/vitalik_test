import sayHello from './lib/sayHello.js';

sayHello();

// document.querySelector('.lang-changer').addEventListener('mouseover', (e) => {
//   document.querySelector('.lang-changer').classList.toggle('lang-changer--open');
// });

const video = document.getElementById('video');
let playing = false;

document.querySelector('.tv__play').addEventListener('click', e => {
  if (playing) {
    video.pause();
  } else {
    video.play();
  }
  playing = !playing;
});
