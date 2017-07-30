console.log("linked");

// 1. How many hours are in a year
var daysInYear = 365;
var hoursInDay = 24;
console.log("hours in year:", daysInYear * hoursInDay);

// 2. How many minutes are in a decade
var yearsInDecade = 10;
var minutesInHour = 60;
console.log("minutes in decade:", yearsInDecade * daysInYear * hoursInDay * minutesInHour);

// 3. How many seconds old they are
var secondsInMinute = 60;
var ageOfYoda = 43;
var ageInSeconds = ageOfYoda * daysInYear * hoursInDay * minutesInHour * secondsInMinute;
console.log("How old Yoda is in seconds:", ageInSeconds);

// 4. If they are older than some arbitrary number, console "I'm old", else "I'm young"
if (ageInSeconds > 982749873){
  console.log("I'm old!");
} else {
  console.log("I'm young");
}
