import Sounds from "./sounds.js"

let sounds = Sounds()


const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

const buttonStop = document.querySelector('.stop')
const buttonPlay = document.querySelector('.play')
const buttonIncrease = document.querySelector('.volume-increase')
const buttonDecrease = document.querySelector('.volume-decrease')

const buttonRain = document.querySelector('.rain')
const buttonForest = document.querySelector('.forest')
const buttonCoffeeshop = document.querySelector('.coffeeshop')
const buttonFireplace = document.querySelector('.fireplace')

let audioPlayAndPause = ""
const audioRain = document.querySelector('.rain audio')
const audioForest = document.querySelector('.forest audio')
const audioCoffeeshop = document.querySelector('.coffeeshop audio')
const audioFireplace = document.querySelector('.fireplace audio')






function countdown(){
    setTimeout(function() {
        let seconds = Number(secondsDisplay.textContent)
        let minutes = Number(minutesDisplay.textContent)

        secondsDisplay.textContent = "00"


        if ( minutes <= 0) {
            return
        }

        if ( seconds <= 0) {
            seconds = 6

            minutesDisplay.textContent = String(minutes -1).padStart(2, "0")
        }

        secondsDisplay.textContent = String(seconds -1).padStart(2, "0")

        

countdown()
}, 1000 )}

buttonPlay.addEventListener('click', function(){ 
countdown()})


buttonStop.addEventListener('click', function() { 
    minutesDisplay.textContent = "00"
    secondsDisplay.textContent = "00"
} )

buttonDecrease.addEventListener('click', function() {
    let decrease = Number(minutesDisplay.textContent)
    
    if( decrease <= 0){
      decrease.textContent = "00"
    }
    
      minutesDisplay.textContent = String(decrease - 5).padStart(2,"0")
     
  })

buttonIncrease.addEventListener('click', function() {
    let decrease = Number(minutesDisplay.textContent) 
    minutesDisplay.textContent = String(decrease + 5).padStart(2,"0")
})

function PlayAndPauseCard(){
    if(audioPlayAndPause.paused){
        audioPlayAndPause.play()
       
    }else{
        audioPlayAndPause.pause()
       
    }
    
}

buttonForest.addEventListener('click', function(){

    audioPlayAndPause = audioForest
    PlayAndPauseCard()
    audioCoffeeshop.pause()
    audioFireplace.pause()
    audioRain.pause()
    
    
});

buttonCoffeeshop.addEventListener('click', function(){
    audioPlayAndPause = audioCoffeeshop
    PlayAndPauseCard() 
    audioForest.pause()
    audioFireplace.pause()
    audioRain.pause()
});

buttonRain.addEventListener('click', function(){
    audioPlayAndPause = audioRain
    PlayAndPauseCard()
    audioCoffeeshop.pause()
    audioFireplace.pause()
    audioForest.pause()
});

buttonFireplace.addEventListener('click', function(){
    audioPlayAndPause = audioFireplace
    PlayAndPauseCard()
    audioCoffeeshop.pause()
    audioForest.pause()
    audioRain.pause()
    
})