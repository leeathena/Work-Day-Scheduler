// Get a reference to the HTML element
var currentDayElement = document.getElementById('currentDay');

// Get the formatted current day
var currentDayDisplay = dayjs().format('dddd, MMMM D');

var currentTimeDisplay = dayjs().format('HH:mm:ss');

// Set the text of the element
currentDayElement.textContent = `Today is ${currentDayDisplay} and the time now is ${currentTimeDisplay}`;
console.log(currentDayDisplay);

// Get the current hour
var currentHour = dayjs().hour();
console.log(`current hour: ${currentHour}`)

// Array for 9-17 time blocks
var calendarTime = [9, 10, 11, 12, 13, 14, 15, 16, 17];

// Loop through each time block
calendarTime.forEach(function(time) {
  // Select the corresponding event box by ID
  var eventBox = document.getElementById(time.toString());
  var inputElement = document.querySelectorAll(".form-control")

  // Check and apply color coding and block input
  if (currentHour > time) {
    eventBox.classList.add('grey-box');
    inputElement.disabled = true; // Past
  } else if (currentHour === time) {
    eventBox.classList.add('red-box');
    inputElement.disabled = true; // Present
  } else {
    eventBox.classList.add('green-box');
    inputElement.disabled = false; // Future
  }
});

//save the event in local sotrage when the save button is clicked; uniquely identify each time block so that the corresponding event data is correctly associated with it

saveBtns.forEach(function(btn) {
  btn.addEventListener("click", function() {
    // Assuming the ID of the button is in the format 'save-XX'
    var hour = this.id.split('-')[1];
    
    // Now get the input field corresponding to this hour
    var inputElement = document.getElementById(hour);
    
    if (inputElement) {
      var userInput = inputElement.value;
      localStorage.setItem("eventDetail-" + hour, userInput);
      console.log("Saved event for " + hour + ": " + userInput);
    } else {
      console.error("No input element found for hour: " + hour);
    }
  });
});

//Persist events between refreshes of a page
