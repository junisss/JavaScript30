const secondsHand = document.querySelector('.second-hand');
const minutesHand = document.querySelector('.min-hand');
const hoursHand = document.querySelector('.hour-hand');
const allHands = document.querySelectorAll('.hand');

function setDate() {
  const now = new Date();
  const second = now.getSeconds();
  const secondsDegrees = ((second / 60) * 360) + 90;
  secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minute = now.getMinutes();
  const minutesDegrees = ((minute / 60) * 360) + 90;
  minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;
  
  const hour = now.getHours();
  const hoursDegrees = ((hour / 12) * 360) + 90;
  hoursHand.style.tranform = `rotate(${hoursDegrees}deg)`;

  // take out wrap of hands when sec = 90

  if (secondsDegrees === 90){
    allHands.forEach(hand => hand.style.transition = 'none')
  } else {
    allHands.forEach(hand => hand.style.transition = '')
  };

};

setInterval(setDate, 1000);