

let currentRound = 0;
let currentDrill = 0;
let timeRemaining = workout[currentRound].drills[currentDrill].duration;


let timerInterval;

const workoutTitle = document.getElementById('workout-title');
const workoutExplanation = document.getElementById('workout-explanation');
const workoutInstructions = document.getElementById('workout-instructions');
const workoutTime = document.getElementById('total-workout-time');
const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('start-btn');
const pauseButton = document.getElementById('pause-btn');
const delayInput = document.getElementById('delay-input');
const bellSound = document.getElementById('bell-sound');
const prevButton = document.getElementById('prev-btn'); // Previous button
const nextButton = document.getElementById('next-btn'); // Next button
workoutTime.innerText = workoutTime.innerText + " " + calculateTotalDuration(workout);

let isPaused = false; // Variable to track if the workout is paused

startButton.addEventListener('click', startWorkout);
pauseButton.addEventListener('click', togglePause);
prevButton.addEventListener('click', previousDrill); // Previous button event
nextButton.addEventListener('click', nextDrill); // Next button event

function startWorkout() {
    const delay = parseInt(delayInput.value) || 15; // Use user-defined delay or default to 15
    startButton.disabled = true; // Disable button to prevent multiple clicks
    pauseButton.disabled = false; // Enable pause button
    prevButton.disabled = false; // Enable previous button
    nextButton.disabled = false; // Enable next button
    workoutTitle.innerText = "Get Ready!";
    workoutExplanation.innerText = `Starting in ${delay} seconds...`;
    timeRemaining = delay;
    displayTime(timeRemaining);

    // Display timer while waiting
    timerInterval = setInterval(() => {
        if (timeRemaining > 0) {
            timeRemaining--;
            displayTime(timeRemaining);
        } else {
            clearInterval(timerInterval);
            playBellSound();
            startActualWorkout();
        }
    }, 1000); // Update every second
}

function startActualWorkout() {
    timeRemaining = workout[currentRound].drills[currentDrill].duration;
    displayWorkoutInfo();
    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    if (isPaused) return; // If paused, do nothing

    if (timeRemaining > 0) {
        timeRemaining--;
        displayTime(timeRemaining);
    } else {
        clearInterval(timerInterval);
        console.log("here")
        playBellSound();
        currentDrill++;
        if (currentDrill < workout[currentRound].drills.length) {
            timeRemaining = workout[currentRound].drills[currentDrill].duration;
            displayWorkoutInfo();
            timerInterval = setInterval(updateTimer, 1000);
        } else {
            currentDrill = 0;
            currentRound++;
            if (currentRound < workout.length) {
                timeRemaining = workout[currentRound].drills[currentDrill].duration;
                displayWorkoutInfo();
                timerInterval = setInterval(updateTimer, 1000);
            } else {
                workoutTitle.innerText = "Workout Complete!";
                workoutExplanation.innerText = "";
                startButton.disabled = false
                pauseButton.disabled = true; // Disable pause button when workout is complete
                prevButton.disabled = true; // Disable previous button when complete
                nextButton.disabled = true; // Disable next button when complete
                currentRound = 0;
                currentDrill = 0;
            }
        }
    }
}

function togglePause() {
    isPaused = !isPaused; // Toggle pause state
    pauseButton.innerText = isPaused ? "Resume Workout" : "Pause Workout"; // Change button text
}

function displayWorkoutInfo() {
    workoutTitle.innerText = workout[currentRound].title;
    workoutExplanation.innerText = workout[currentRound].drills[currentDrill].explanation;
    workoutInstructions.innerText = workout[currentRound].drills[currentDrill].instructions;
    displayTime(timeRemaining);
}

function displayTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    timerDisplay.innerText = `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}



function playBellSound() {
    bellSound.currentTime = 0; // Reset sound to start
    bellSound.play(); // Play the sound
}

function previousDrill() {
    if (currentDrill > 0) {
        currentDrill--;
        timeRemaining = workout[currentRound].drills[currentDrill].duration;
        displayWorkoutInfo();
    } else if (currentRound > 0) {
        currentRound--;
        currentDrill = workout[currentRound].drills.length - 1; // Go to last drill of previous round
        timeRemaining = workout[currentRound].drills[currentDrill].duration;
        displayWorkoutInfo();
    }
}

function nextDrill() {
    console.log(currentRound)
    console.log(workout[currentRound])

    if (currentDrill < workout[currentRound].drills.length - 1) {
        currentDrill++;
        timeRemaining = workout[currentRound].drills[currentDrill].duration;
        displayWorkoutInfo();
    } else if (currentRound < workout.length - 1) {
        currentRound++;
        currentDrill = 0; // Go to first drill of the next round
        timeRemaining = workout[currentRound].drills[currentDrill].duration;
        displayWorkoutInfo();
    }
}

function calculateTotalDuration(workoutArray) {
    let totalDuration = 0;

    workoutArray.forEach(round => {
        round.drills.forEach(drill => {
            totalDuration += drill.duration;
        });
    });
    const hours = Math.floor(totalDuration / 3600);
    const minutes = Math.floor((totalDuration % 3600) / 60);
    const remainingSeconds = totalDuration % 60;

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;

}