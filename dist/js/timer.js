function timer() {
  const d = new Date();
  let hr = d.getHours();
  let min = d.getMinutes();
  let sec = d.getSeconds();
  hr = hr < 10 ? `0${hr}` : hr;
  min = min < 10 ? `0${min}` : min;
  sec = sec < 10 ? `0${sec}` : sec;
  let m = hr >= 12 ? "PM " : "AM ";
  let time = `${hr}:${min}:${sec}  ${m}`;
  document.querySelector(".--timer--").innerHTML = time;
}
timer();
setInterval(() => {
  timer();
}, 900);
