const body = document.getElementById('body')
const icons = document.getElementById('icons')
const play = document.getElementById('play')
const back = document.getElementById('back')
icons.addEventListener("click", ()=>{
    icons.classList.add('display-none')
    play.classList.remove('display-none')
})

back.addEventListener("click", ()=>{
    play.classList.add('display-none')
    icons.classList.remove('display-none')
})