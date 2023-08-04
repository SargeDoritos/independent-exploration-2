// number of seconds that have passed
let time = 0;
// reference to the <span> containing the number
let counterElement = document.getElementById("time");

function showMessage() {
    time++;
    counterElement.textContent = time;
    console.log('You spent ' + time + ' here');
}

let intervalId = setInterval(showMessage, 1000);

setTimeout ( () => {
    clearInterval(intervalId);
}, 100000)