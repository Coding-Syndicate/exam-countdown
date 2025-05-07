let days = document.getElementById("days");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");




const dateTarget = new Date(2025, 5, 2);
let myInt = setInterval(updateTime,1000);


function updateTime() {
  const currentTime = new Date();

  let difference = dateTarget.getTime() - currentTime.getTime();
  
  days.innerText = format(Math.floor(difference / 86_400_000));
  let temp = difference % 86_400_000;
  hours.innerText = format(Math.floor(temp / 3_600_000));
  temp = temp % 3_600_000;
  minutes.innerText = format(Math.floor(temp / 60_000));
  temp = temp % 60_000;
  seconds.innerText = format(Math.floor(temp / 1000));
  
  
}
function format(x){
  return x < 10 ? `0${x}`: `${x}`;
}


