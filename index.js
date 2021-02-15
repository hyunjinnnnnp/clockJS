const secondHand = document.querySelector(".second-hand");
const minsHand = document.querySelector(".min-hand");
const hoursHand = document.querySelector(".hour-hand");
const clockDigit = document.querySelector(".clockDigit");

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90; //css에서 90도 회전한 값
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  const mins = now.getMinutes();
  const minsDegrees = (mins / 60) * 360 + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;
  const hours = now.getHours();
  const hoursDegrees = (hours / 12) * 360 + 90;
  hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;

  clockDigit.innerHTML = `${hours < 10 ? "0" + hours : hours}: ${
    mins < 10 ? "0" + mins : mins
  }: ${seconds < 10 ? "0" + seconds : seconds}`;
}

setInterval(setDate, 1000);
