// Create a new Date object
var currentDate = new Date();

// Get the options for formatting the date and time
var options = {
  timeZone: 'Asia/Kolkata', // India time zone
  hour12: true, // Use 12-hour clock format
  weekday: 'long', // Display full weekday name
  year: 'numeric', // Display the year
  month: 'long', // Display the full month name
  day: 'numeric', // Display the day of the month
  hour: 'numeric', // Display the hour
  minute: 'numeric', // Display the minute
  second: 'numeric' // Display the second
};

// Get the current time in India
var indiaTime = currentDate.toLocaleString('en-IN', options);

console.log("Current time in India: " + indiaTime);
