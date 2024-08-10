let timerType = true;
let idInterval  = null;
let workMinutes = 0;
let breaksMinutes = 0;
let actualMinutes = 0;
let actualSeconds = 0;


function start(){
  const works = document.getElementById("work");
  let workTimeId = document.getElementById("work-time");
  const breakTimeId = document.getElementById("break-time");
  let startBtn = document.getElementById("startBtn");

  const workTime = workTimeId.value;
  const breakTime = breakTimeId.value;

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
    document.getElementById("minutes").innerHTML = actualMinutes.toString().padStart(2,'0');
    document.getElementById("seconds").innerHTML = actualSeconds.toString().padStart(2,'0');

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
  let startBtn = document.getElementById("startBtn");

  startBtn.style.display = "inline-block";
  clearInterval(idInterval);
  idInterval = null;
  actualMinutes = workMinutes;
  actualSeconds = 0;
  document.getElementById("minutes").innerHTML = actualMinutes.toString().padStart(2,'0');
  document.getElementById("seconds").innerHTML = actualSeconds.toString().padStart(2,'0');
  if(timerType===false){
    changeMode(timerType);
  }
}

function changeMode(change){
  const works = document.getElementById("work");
  const breaks = document.getElementById("break");
  const circle = document.getElementById("circle");

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
