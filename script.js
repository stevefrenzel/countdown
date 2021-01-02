/* eslint-disable indent */

function countdownTimer() {
  const difference = +new Date('2021-03-31') - +new Date();
  let remaining = "Time's up!";

  if (difference > 0) {
    const parts = {
      Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      Minutes: Math.floor((difference / 1000 / 60) % 60),
      Seconds: Math.floor((difference / 1000) % 60),
    };
    remaining = Object.keys(parts)
      .map((part) => {
        return `${parts[part]} ${part}`;
      })
      .join(' ');
  }

  document.getElementById('countdown').innerHTML = remaining;
}

countdownTimer();
setInterval(countdownTimer, 1000);
