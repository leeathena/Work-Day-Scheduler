$(document).ready(function() {
  // Display the current day and time using jQuery
  $('#currentDay').text(`Today is ${dayjs().format('dddd, MMMM D')} and the time now is ${dayjs().format('HH:mm:ss')}`);
  console.log(dayjs().format('dddd, MMMM D'));

  // Get the current hour
  let currentHour = dayjs().hour();
  console.log(`current hour: ${currentHour}`);

  // Array for 9-17 time blocks
  let calendarTime = [9, 10, 11, 12, 13, 14, 15, 16, 17];

  // Loop through each time block
  calendarTime.forEach(function(time) {
      let $inputElement = $("#" + time);
      console.log(`Comparing: currentHour (${currentHour}) > time (${time})`);

      // Check and apply color coding and block input
      if (currentHour < time) {
        $inputElement.addClass('future').prop('disabled', false);
    } else if (currentHour === time) {
        $inputElement.addClass('present').prop('disabled', true);
    } else {
        $inputElement.addClass('past').prop('disabled', true);
    }
  });

  // Save the event in local storage when the save button is clicked
  $(".btn").click(function() {
      let savedHour = parseInt(this.id.split('-')[1], 10);
      console.log("Button hour:", savedHour);
      let userInput = $("#" + savedHour).val();
      console.log(userInput);

      localStorage.setItem("eventDetail-" + savedHour, userInput);
      console.log("Saved event for " + savedHour + ": " + userInput);
  });

  // Load events from local storage
  function loadEvents() {
      calendarTime.forEach(function(hour) {
          let savedEvent = localStorage.getItem("eventDetail-" + hour);
          if (savedEvent) {
              $("#" + hour).val(savedEvent);
          }
      });
  }

  loadEvents();
});
