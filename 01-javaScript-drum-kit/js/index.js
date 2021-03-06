const allAlphabet = document.querySelectorAll('.key__item');
// console.log(allAlphabet);
const playSound = event => {
  // console.log(event.currentTarget.dataset.key);
  const { key } = event.currentTarget.dataset;
  const audio = document.querySelector(`audio[data-key="${key}"]`);
  if (!audio) {
    return;
  }
  audio.currentTime = 0;
  audio.play();
  event.currentTarget.classList.add('playing');
};
function removeTransition(event) {
  if (event.propertyName !== 'transform') {
    return;
  }
  this.classList.remove('playing');
  console.log(event.propertyName);
}

allAlphabet.forEach(letter => letter.addEventListener('transitionend', removeTransition));

allAlphabet.forEach(letter => letter.addEventListener('click', playSound));
document.addEventListener('keydown', event => {
    console.log(event.keyCode);
    const { keyCode } = event;
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    if (!audio) {
      return;
    }
    audio.currentTime = 0;
    audio.play();
    const item = document.querySelector(`.key__item[data-key="${keyCode}"]`);
    console.log(item);
    item.classList.add('playing');
})