let type = true;
let idInterval  = null;
let workMinutes = 0;
let breaksMinutes = 0;
let actualMinutes = 0;
let actualSeconds = 0;


function start(){
  const works = document.getElementById("work");
  const breaks = document.getElementById("break");
  const circle = document.getElementById("circle");
  let workTimeId = document.getElementById("work-time");
  const breakTimeId = document.getElementById("break-time");
  const workTime = workTimeId.value;
  const breakTime = breakTimeId.value;

  workMinutes = parseInt(workTime);
  breaksMinutes = parseInt(breakTime);

  actualMinutes = workMinutes;
  actualSeconds = 0;

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
      if(type == true){
        works.classList.remove("active");
        breaks.classList.add("active");
        circle.style.border = "7px solid #72EEA8FF";
        actualMinutes = breaksMinutes;
      }else{
        works.classList.add("active");
        breaks.classList.remove("active");
        circle.style.border = "7px solid #EE7276FF";
        actualMinutes = workMinutes;
      }
      actualSeconds = 0;
      type = !type;
    }
  }

  idInterval = setInterval(timerFunction,1000);
}

function restart(){
  clearInterval(idInterval);
  idInterval = null;
  actualMinutes = workMinutes;
  actualSeconds = 0;
  document.getElementById("minutes").innerHTML = actualMinutes.toString().padStart(2,'0');
  document.getElementById("seconds").innerHTML = actualSeconds.toString().padStart(2,'0');
}
