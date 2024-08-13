let workTimeId = document.getElementById("work-time");
const breakTimeId = document.getElementById("break-time");
const minutesId = document.getElementById("minutes");
const secondsId = document.getElementById("seconds");
const works = document.getElementById("work");
const breaks = document.getElementById("break");
const circle = document.getElementById("circle");
let startBtn = document.getElementById("startBtn");

let workTime = 0;
let breakTime = 0;

let timerType = true;
let idInterval  = null;
let workMinutes = 0;
let breaksMinutes = 0;
let actualMinutes = 0;
let actualSeconds = 0;

function start(){
  workTime = workTimeId.value;
  breakTime = breakTimeId.value;

  workMinutes = parseInt(workTime);
  breaksMinutes = parseInt(breakTime);

  actualMinutes = workMinutes;
  actualSeconds = 0;

  startBtn.style.display = "none";
  works.classList.add("active");

  if(idInterval){
    clearInterval(idInterval);
  }

  let timerFunction = () =>{
    minutesId.innerHTML = actualMinutes.toString().padStart(2,'0');
    secondsId.innerHTML = actualSeconds.toString().padStart(2,'0');

    if(actualSeconds === 0){
      actualSeconds = 59;
      actualMinutes -=1 ;
    }else{
      actualSeconds -=1;
    }
    if(actualMinutes <= 0 && actualSeconds <= 0){
      changeMode(timerType);
      actualSeconds = 0;
    }
  }
  idInterval = setInterval(timerFunction,1000);
}

function restart(){
  startBtn.style.display = "inline-block";
  clearInterval(idInterval);
  idInterval = null;
  actualMinutes = workMinutes;
  actualSeconds = 0;
  minutesId.innerHTML = actualMinutes.toString().padStart(2,'0');
  secondsId.innerHTML = actualSeconds.toString().padStart(2,'0');
  if(timerType===false){
    changeMode(timerType);
  }
}

function changeMode(change){
  if(change){
    works.classList.remove("active");
    breaks.classList.add("active");
    circle.style.border = "7px solid #72EEA8FF";
    actualMinutes = breaksMinutes;
    timerType = false;
    return
  }
  works.classList.add("active");
  breaks.classList.remove("active");
  circle.style.border = "7px solid #EE7276FF";
  actualMinutes = workMinutes;
  timerType = false;
}
