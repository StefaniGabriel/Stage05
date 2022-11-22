
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

const buttonDark = document.querySelector('.dark')
const buttonClear = document.querySelector('.clear')

const audioRain = document.querySelector('.rain audio')
const audioForest = document.querySelector('.forest audio')
const audioCoffeeshop = document.querySelector('.coffeeshop audio')
const audioFireplace = document.querySelector('.fireplace audio')

let audioPlayAndPause = ""
let volumeDecreasesAndIncreases = ""
let volumeForest = document.querySelector('.forest input')
let volumeRain = document.querySelector('.rain input')
let volumeCoffeeshop = document.querySelector('.coffeeshop input')
let volumeFireplace = document.querySelector('.fireplace input')

buttonClear.addEventListener('click', function(){
    buttonClear.classList.add('hide')
    buttonDark.classList.remove('hide')

    let darkCode = document.querySelector('html')
    darkCode.classList.toggle('dark-mode')
   
})

buttonDark.addEventListener('click', function(){
    buttonDark.classList.add('hide')
    buttonClear.classList.remove('hide')

    let darkCode = document.querySelector('html')
    darkCode.classList.toggle('dark-mode')
  })

function countdown(){
    setTimeout(function() {
        let seconds = Number(secondsDisplay.textContent)
        let minutes = Number(minutesDisplay.textContent)

        secondsDisplay.textContent = "00"


        if ( minutes <= 0) {
            return
        }

        if ( seconds <= 0) {
            seconds = 60

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
    
    minutesDisplay.textContent = String(decrease - 5).padStart(2,"0")

    if( decrease <= 0){
        minutesDisplay.textContent = "00"
        secondsDisplay.textContent = "00"
    }
    
  

  })


buttonIncrease.addEventListener('click', function() {
    let increase = Number(minutesDisplay.textContent) 
    minutesDisplay.textContent = String(increase + 5).padStart(2,"0")})


function playSoundCard(){
    if(audioPlayAndPause.paused){
        audioPlayAndPause.play()
       
    }else{
        audioPlayAndPause.pause()
        
    }

}


function playingColor(){
    
    buttonCoffeeshop.classList.remove('playing')
    buttonRain.classList.remove('playing')
    buttonFireplace.classList.remove('playing')
    buttonForest.classList.remove('playing')
}

function volumeDecreasesAndIncreasesRun() {
    audioPlayAndPause.volume = volumeDecreasesAndIncreases.value / 100
}



buttonForest.addEventListener('click', function(){
    playingColor()
    this.classList.toggle('playing')
    audioCoffeeshop.pause()
    audioFireplace.pause()
    audioRain.pause()
    audioPlayAndPause = audioForest
    volumeDecreasesAndIncreases = volumeForest
    playSoundCard()
    volumeDecreasesAndIncreasesRun()
    

})

buttonCoffeeshop.addEventListener('click', function(){
    playingColor()
    this.classList.toggle('playing')
    audioFireplace.pause()
    audioForest.pause()
    audioRain.pause()
    audioPlayAndPause = audioCoffeeshop
    volumeDecreasesAndIncreases = volumeCoffeeshop
    playSoundCard() 
    volumeDecreasesAndIncreasesRun()
    
})

buttonRain.addEventListener('click', function(){
    playingColor()
    this.classList.toggle('playing')
    audioCoffeeshop.pause()
    audioFireplace.pause()
    audioForest.pause()
    audioPlayAndPause = audioRain
    volumeDecreasesAndIncreases = volumeRain
    playSoundCard()
    volumeDecreasesAndIncreasesRun()
})

buttonFireplace.addEventListener('click', function(){
    playingColor()
    this.classList.toggle('playing')
    audioCoffeeshop.pause()
    audioForest.pause()
    audioRain.pause()
    audioPlayAndPause = audioFireplace
    volumeDecreasesAndIncreases = volumeFireplace
    playSoundCard()
    volumeDecreasesAndIncreasesRun()
    
})