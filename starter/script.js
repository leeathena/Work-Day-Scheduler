// Get a reference to the HTML element
let currentDayElement = document.getElementById('currentDay');

// Get the formatted current day
let currentDayDisplay = dayjs().format('dddd, MMMM D');

let currentTimeDisplay = dayjs().format('HH:mm:ss');


// Set the text of the element
currentDayElement.textContent = `Today is ${currentDayDisplay} and the time now is ${currentTimeDisplay}`;
console.log(currentDayDisplay);

// Get the current hour
let currentHour = dayjs().hour();
console.log(`current hour: ${currentHour}`)

// Array for 9-17 time blocks
let calendarTime = [9, 10, 11, 12, 13, 14, 15, 16, 17];

// Loop through each time block
calendarTime.forEach(function(time) {
  // Select the corresponding event box by ID
  // let eventBox = document.getElementById(time.toString());
  let inputElement = document.getElementById(time.toString());;


  // Check and apply color coding and block input
  if (currentHour > time) {
    inputElement.classList.add('grey-box');
    inputElement.disabled = true; // Past
  } else if (currentHour === time) {
    inputElement.classList.add('red-box');
    inputElement.disabled = true; // Present
  } else {
    inputElement.classList.add('green-box');
    inputElement.disabled = false; // Future
  }
});

//save the event in local sotrage when the save button is clicked; uniquely identify each time block so that the corresponding event data is correctly associated with it

let saveBtns = document.querySelectorAll(".btn");

// Add a click event listener to each button
saveBtns.forEach(function(btn) {
  btn.addEventListener("click", function() {
    let savedHour = parseInt(this.id.split('-')[1], 10);
    console.log("Button hour:", savedHour);
    let inputBySavedHours = document.getElementById(savedHour)
    let userInput = inputBySavedHours.value;
    console.log(userInput);

    localStorage.setItem("eventDetail-" + savedHour, userInput);
    console.log("Saved event for " + savedHour + ": " + userInput);
  });
});

//Persist events between refreshes of a page

function loadEvents() {
  let calendarTime = [9, 10, 11, 12, 13, 14, 15, 16, 17]; // Array of your time blocks

  calendarTime.forEach(function(hour) {
    // Retrieve the saved event from local storage
    let savedEvent = localStorage.getItem("eventDetail-" + hour);
    if (savedEvent) {
      let inputByHour = document.getElementById(hour);
      inputByHour.value = savedEvent;
    }
  });
}

document.addEventListener('DOMContentLoaded', loadEvents);