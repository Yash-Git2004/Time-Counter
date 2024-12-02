let intervalId; // Store interval ID

// Start countdown
function calculate() {
    const date = document.querySelector("#date").value;
    const time = document.querySelector("#time").value;

    if (!date || !time) {
        alert("Please enter both date and time.");
        return;
    }

    const endTime = new Date(`${date}T${time}`);
    if (endTime <= new Date()) {
        alert("The time must be in the future!");
        return;
    }

    if (intervalId) clearInterval(intervalId); // Clear any existing timer

    intervalId = setInterval(() => calculateTime(endTime), 1000);
}

// Calculate and display remaining time
function calculateTime(endTime) {
    const currentTime = new Date();
    const timeLeft = Math.max(0, (endTime - currentTime) / 1000);

    const days = Math.floor(timeLeft / (3600 * 24));
    const hours = Math.floor((timeLeft / 3600) % 24);
    const minutes = Math.floor((timeLeft / 60) % 60);
    const seconds = Math.floor(timeLeft % 60);

    document.querySelector("#countdown-days").innerText = days;
    document.querySelector("#countdown-hours").innerText = hours;
    document.querySelector("#countdown-minutes").innerText = minutes;
    document.querySelector("#countdown-seconds").innerText = seconds;

    if (timeLeft === 0) {
        clearInterval(intervalId);
        alert("Countdown finished!");
    }
}

// Stop the countdown
function stop() {
    if (intervalId) {
        clearInterval(intervalId);
        alert("Timer stopped!");
    } else {
        alert("No active timer to stop!");
    }
}

// Reset the countdown
function reset() {
    if (intervalId) clearInterval(intervalId);
    document.querySelector("#countdown-days").innerText = 0;
    document.querySelector("#countdown-hours").innerText = 0;
    document.querySelector("#countdown-minutes").innerText = 0;
    document.querySelector("#countdown-seconds").innerText = 0;
}

// Event listeners
document.querySelector("#calculate").addEventListener("click", calculate);
document.querySelector("#stop").addEventListener("click", stop);
document.querySelector("#reset").addEventListener("click", reset);
