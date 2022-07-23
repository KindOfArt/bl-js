const allAlphabet = document.querySelectorAll('.key__item');
// console.log(allAlphabet);
const playSound = (event) => {
    // console.log(event.currentTarget.dataset.key);
    const {key} = event.currentTarget.dataset;
            const audio = document.querySelector(`audio[data-key="${key}"]`);
           if(!audio) {
            return;
           }
           audio.currentTime = 0;
           audio.play();
}

allAlphabet.forEach(letter => letter.addEventListener('click', playSound));
