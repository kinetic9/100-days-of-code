let timer;
let sec = 0;
let min = 0;
let hour = 0;

let timer_element = document.getElementById("timer");

let start_btn = document.getElementById("start");
start_btn.addEventListener("click", function() {
  timer = setInterval(TimerHandler, 1000);
  reset_btn.disabled = true;
});

let stop_btn = document.getElementById("stop");
stop_btn.addEventListener("click", function() {
  timer = clearInterval(timer);
  reset_btn.disabled = false;
});

let reset_btn = document.getElementById("reset");
reset_btn.addEventListener("click", function() {
  timer = clearInterval(timer);
  reset_btn.disabled = true;
  sec = 0;
  min = 0;
  hour = 0;
  timer_element.innerHTML = "00:00:00";
});

function TimerHandler() {
  sec++;
  if (sec == 60) {
    sec = 0;
    min++;
  }
  if (min == 60) {
    min = 0;
    hour++;
  }

  //   console.log(hour + ":" + min + ":" + sec);

  DisplayTime();
}

function DisplayTime() {
  let secS = sec;
  let minS = min;
  let hourS = hour;
  let timer_element = document.getElementById("timer");
  if (sec < 10) {
    secS = "0" + secS;
  }
  if (minS < 10) {
    minS = "0" + minS;
  }
  if (hourS < 10) {
    hourS = "0" + hourS;
  }
  timer_element.innerHTML = hourS + ":" + minS + ":" + secS;
}
