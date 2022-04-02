// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
//Global Variables
var clueHoldTime = 1000; //how long to hold each clue's light/sound
let pattern = [];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;
var numberofButtons = 6;
var numberOfMistakes = 0;

let seconds = 59;
let minutes = 2;
let time = null;
let clock = true;

function countDown(){
  seconds--;

  if (seconds < 10){
    seconds = "0" + seconds;
    parseInt(seconds);
    
    if (seconds < 1){
      if (minutes < 10){
      minutes = "0" + minutes;
      parseInt(minutes);
        if(minutes < 1){
          minutes = "0" + minutes;
          parseInt(minutes);

          clock = false;
          startStop();
          document.getElementById("Timer").innerHTML = "Time is over";
          loseGame();
        }
        else{
          seconds = 59;
          minutes --;
        }
      
      }
    }
  }
  document.getElementById("Timer").innerHTML = "0" + minutes + ":" + seconds;
}
function startStop(){
  if(clock == true){
    time = setInterval(countDown, 1000); //update every 1 second

  }
  else{
    clearInterval(time);

    }      
  }

function resetClock(){
  clearInterval(time); //clears time or countDown function
  document.getElementById("Timer").innerHTML = "00:00";
}

function startGame(){
  //initialize game variables
  progress = 0;
  gamePlaying = true;
  clock = true;
  numberOfMistakes = 0;
  minutes = 2;
  seconds = 59;
  
  startStop();
  document.getElementById("Mistakes").innerHTML = "Lives Left: " + (3 - numberOfMistakes);
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  randomPattern();
  playClueSequence();
}
function stopGame(){
  resetClock(); 
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

function loseGame(){ 
  stopGame();
  alert("Game Over. You lost.");
}
function winGame(){
  stopGame();
  alert("Game Over. You won!");
}

function randomPattern(){
  pattern = [];
  for(let j=0; j<=numberofButtons; j++){
  let x = Math.floor(Math.random() * numberofButtons + 1);
  pattern.push(x);
  }
}

////// Sound Synthesis Functions //////
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 576.2,
  6: 666.2
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

//////////////////////////////

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  // clock = true;
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    clock = true;
    console.log("play single clue: " + pattern[i] + " in " + delay  + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
    clueHoldTime -= i*10;
    }
  }


function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  if(pattern[guessCounter] == btn){
    //Guess was correct!
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        //GAME OVER: WIN!
        winGame();
      }else{
        progress++;
        playClueSequence();
        
      }
    }else{
      //so far so good... check the next guess
      guessCounter++;
    }
  }
  else{
    numberOfMistakes += 1
    if(numberOfMistakes <= 2){
      document.getElementById("Mistakes").innerHTML = "Lives left: " + (3 - numberOfMistakes);
      playClueSequence();
    }
    if(numberOfMistakes == 3){
      document.getElementById("Mistakes").innerHTML = "Lives left: " + (3 - numberOfMistakes);
      loseGame();
      }
    }
  }