import { colors } from './colors'

const refs = {
    btnstart: document.querySelector('[data-action="start"]'),
    btnstop: document.querySelector('[data-action="stop"]'),
    body: document.querySelector('body')
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let intervalId = null


refs.btnstart.addEventListener('click', colorPickStart)
refs.btnstop.addEventListener('click', colorPickStop)

function colorPickStart(e) {
 intervalId = setInterval(() => {
refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)]
    }, 1000)
    refs.btnstart.disabled = true
    refs.btnstop.disabled = false
}


function colorPickStop(e) {
    clearInterval(intervalId)
    refs.btnstart.disabled = false
    refs.btnstop.disabled = true
    refs.body.style.backgroundColor = 'white'
}

 