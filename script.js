let type = true;
function start(){
  const works = document.getElementById("work");
  const breaks = document.getElementById("break");
  const circle = document.getElementById("circle");

  let workMinutes = 1;
  let seconds = 10;
  let breaksMinutes = 1;

  let actualMinutes = workMinutes;
  let actualSeconds = seconds;
  works.classList.add("active");
  let timerFunction = () =>{
    document.getElementById("minutes").innerHTML = actualMinutes;
    document.getElementById("seconds").innerHTML = actualSeconds;

    if(actualSeconds == 0){
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

  setInterval(timerFunction,1000);
}

