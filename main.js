const timerForm = document.getElementById("timerForm");
const timerRest = document.getElementById("timerRestS");
const pauseButton = document.getElementById("pauseButton");

let intervalId;
let initialInterval;
let remainingInterval;
let isPaused = false;

timerForm.addEventListener("submit", formHandler);
pauseButton.addEventListener("click", toggleTimer);

function formHandler(event) {
  event.preventDefault();
  const intervalValue = +document.getElementById("interval").value;

  if (typeof intervalValue === "number" && intervalValue > 0) {
    initialInterval = intervalValue;
    resetTimer();
    startTimer();
  }
}

function startTimer() {
  intervalId = setInterval(() => {
    if (remainingInterval > 0) {
      remainingInterval--;
      timerRest.innerText = formatTime(remainingInterval);
      console.log("remainingInterval:", remainingInterval);
    } else {
      console.log("clearInterval");
      clearInterval(intervalId);
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(intervalId);
  remainingInterval = initialInterval;
  timerRest.innerText = formatTime(remainingInterval);
  isPaused = false;
  pauseButton.innerText = "Pause";
}

function toggleTimer() {
  if (isPaused) {
    isPaused = false;
    pauseButton.innerText = "Pause";
    startTimer();
  } else {
    isPaused = true;
    pauseButton.innerText = "Resume";
    clearInterval(intervalId);
  }
}

function formatTime(seconds) {
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor((seconds % 3600) / 60);
  let remainingSeconds = seconds % 60;

  let formattedTime = "";

  if (hours > 0) {
    formattedTime += `${hours.toString().padStart(2, "0")}:`;
  }

  formattedTime += `${minutes.toString().padStart(2, "0")}:${remainingSeconds
    .toString()
    .padStart(2, "0")}`;

  return formattedTime;
}
