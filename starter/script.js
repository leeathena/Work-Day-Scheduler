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
var calendarTime = [0,9, 10, 11, 12, 13, 14, 15, 16, 17];

// Loop through each time block
calendarTime.forEach(function(time) {
  // Select the corresponding event box by ID
  var eventBox = document.getElementById(time.toString());

  // Check and apply color coding
  if (currentHour > time) {
    eventBox.classList.add('grey-box'); // Past
  } else if (currentHour === time) {
    eventBox.classList.add('red-box'); // Present
  } else {
    eventBox.classList.add('green-box'); // Future
  }
});


//enable user input for present and future blocks

//save the event in local sotrage when the save button is clicked; uniquely identify each time block so that the corresponding event data is correctly associated with it

// saveButton.addEventListener('click', function() {


//save button design

//Persist events between refreshes of a page
//Page Load Event:check local storage for any saved events and populate the time blocks accordingly