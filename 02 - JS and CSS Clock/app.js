const secondHand = document.querySelector('.second-hand');
const minutesHand = document.querySelector('.min-hand');
const hoursHand = document.querySelector('.hour-hand');
/**
 * Sets the current date for the clock.
 * Defines the seconds, minutes and hours function call,
 * Then convert it to degrees and update the UI
 * (bug): The hour hand in the UI keeps jumping to unappropriate positions once it hits 90 degs(12:00)
 * (fix): Add a condition that checks when the second hand hit 90 degrees. See JS30
 */
function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();

    const secondsDegrees = ((seconds / 60) * 360) + 90;
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    const hoursDegrees = ((minutes / 12) * 360) + 90;

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);