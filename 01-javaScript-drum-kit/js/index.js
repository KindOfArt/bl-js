// const allAlphabet = document.querySelectorAll('.key__item');

// function audioFn(key) {
//   const audio = document.querySelector(`audio[data-key="${key}"]`);
//   if (!audio) {
//     return;
//   }
//   audio.currentTime = 0;
//   audio.play();
// }
// // console.log(allAlphabet);
// const playSound = event => {
//   // console.log(event.currentTarget.dataset.key);
//   const { key } = event.currentTarget.dataset;
//   audioFn(key);
//   event.currentTarget.classList.add('playing');
// };
// function removeTransition(event) {
//   if (event.propertyName !== 'transform') {
//     return;
//   }
//   this.classList.remove('playing');
//   console.log(event.propertyName);
// }

// allAlphabet.forEach(letter => letter.addEventListener('transitionend', removeTransition));

// allAlphabet.forEach(letter => letter.addEventListener('click', playSound));
// document.addEventListener('keydown', event => {
//   console.log(event.keyCode);
//   const { keyCode } = event;
//   audioFn(keyCode);
//   const item = document.querySelector(`.key__item[data-key="${keyCode}"]`);
//   console.log(item);
//   item.classList.add('playing');
// });

// ========== ДЕЛЕГУВАННЯ ============

const listRef = document.querySelector('.key__list');
const allAlphabet = document.querySelectorAll('.key__item');

function audioFn(key) {
  const audio = document.querySelector(`audio[data-key="${key}"]`);
  if (!audio) {
    return;
  }
  audio.currentTime = 0;
  audio.play();
}

function removeTransition(event) {
  if (event.propertyName !== 'transform') {
    return;
  }
  this.classList.remove('playing');
  console.log(event.propertyName);
}

allAlphabet.forEach(letter => letter.addEventListener('transitionend', removeTransition));

listRef.addEventListener('click', e => {
  let key = 0;
  if (e.target.nodeName === 'LI') {
    e.target.classList.add('playing');
    console.log(e.target.dataset.key);
    key = e.target.dataset.key;
  }
  if (e.target.nodeName !== 'LI' && e.target.nodeName !== 'UL') {
    e.target.parentNode.classList.add('playing');
    key = e.target.parentNode.dataset.key;
  }
  if (key === 0) {
    return;
  }

  audioFn(key);
});
