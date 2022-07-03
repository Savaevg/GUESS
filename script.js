let secretNumber = Math.floor(Math.random() * 50) + 1;
let score = 20;
const btn = document.querySelector('.btn');
const input = document.querySelector('.number-input');
const numberContainer = document.querySelector('.question');
const message = document.querySelector('.guess-message');
const scoreContainer = document.querySelector('.score');
const highscoreContainer = document.querySelector('.highscore');
let highscore = 0;
const btnAgain = document.querySelector('.btn_again')
const again = document.querySelector('.again')
console.log(secretNumber);
function check() {
  if (score > 1) {
    score --;
    scoreContainer.textContent = score;
  } else {
    scoreContainer.textContent = 0;
    message.innerHTML = 'Игра окончена';
    numberContainer.textContent = secretNumber;
    input.disabled = true
    btnAgain.style.display = 'flex'
  }
}


btn.addEventListener('click', () => {
  const value = +input.value;

  if (!value) {
    message.innerHTML = 'Введете число'
  } else if (value > 50) {
    message.innerHTML = 'Вы ввели слишком большое значение'
  } else if (value === secretNumber) {
    message.innerHTML = 'вы угадали';
    numberContainer.textContent = secretNumber;
    input.disabled = true
    btnAgain.style.display = 'flex'
    if (score > highscore) {
      highscoreContainer.textContent = score;
      highscore = score
    }
  } else if (value > secretNumber) {
    message.innerHTML = 'Слишком много';
    check()
  } else if (value < secretNumber) {
    message.innerHTML = 'Слишком мало';
    check()
  }
  input.value = ''
})

again.addEventListener('click', (e) => {
  numberContainer.textContent = '???'
  message.innerHTML = 'Начни угадывать'
  input.disabled = false;
  score = 20;
  scoreContainer.innerHTML = 20;
  btnAgain.style.display = 'none';
  secretNumber = Math.floor(Math.random() * 50) + 1;
  console.log(secretNumber);
})




