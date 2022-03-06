let form = document.getElementById("form");

// Data of Reference
let daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let maleAkanNames = [
  "Kwasi",
  "Kwadwo",
  "Kwabena",
  "Kwaku",
  "Yaw",
  "Kofi",
  "Kwame",
];

let femaleAkanNames = [
  "Akosua",
  "Adwoa",
  "Abenaa",
  "Akua",
  "Yaa",
  "Afua",
  "Ama",
];

// Our final Output is to find or generate the Akan name!
let outputDay = "";
let akanName = "";

// Our main function to generate the Akan names
const generateAkanName = () => {
  // Select Elements in the DOM
  let yearOfBirth = document.getElementById("year").value;
  let monthOfBirth = Number(document.getElementById("month").value);
  let dayOfBirth = Number(document.getElementById("day").value);
  let gender = document.getElementById("gender").value;

  let ouputDayValue = document.getElementById("output-day");
  let akanNameValue = document.getElementById("akan-name");

  function clearForm() {
    form.reset();
  }

  function isDateValid() {
    if (
      dayOfBirth <= 0 ||
      dayOfBirth > 31 ||
      monthOfBirth <= 0 ||
      monthOfBirth > 12
    ) {
      return false;
    }

    return true;
  }

  function calculateDayOfWeek() {
    let dayOfWeekNumber =
      (Number(yearOfBirth.slice(0, 2)) / 4 -
        2 * Number(yearOfBirth.slice(0, 2)) -
        1 +
        (5 * Number(yearOfBirth.slice(2, 4))) / 4 +
        (26 * (monthOfBirth + 1)) / 10 +
        dayOfBirth) %
      7;

    return dayOfWeekNumber;
  }

  function compareAkanAndDays(dayValue) {
    if (gender == "male") {
      // if(dayValue == 0) {
      //   outputDay = daysOfWeek[0]
      //   akanName = maleAkanNames[0]
      // } else if(dayValue == 1) {
      //   outputDay = daysOfWeek[1]
      //   akanName = maleAkanNames[1]
      // } else if(dayValue == 2) {
      //   outputDay = daysOfWeek[2]
      //   akanName = maleAkanNames[2]
      // }
      outputDay = daysOfWeek[dayValue];
      akanName = maleAkanNames[dayValue];
    } else {
      outputDay = daysOfWeek[dayValue];
      akanName = femaleAkanNames[dayValue];
    }
  }

  function outputAkanName() {
    if (isDateValid()) {
      let dayOfAkanWeek = Math.round(calculateDayOfWeek());
      compareAkanAndDays(dayOfAkanWeek);
      clearForm();

      ouputDayValue.innerHTML = "✨ Your Day of Birth is " + outputDay;
      akanNameValue.innerHTML = "✨ Your Akan Name is " + akanName;
    } else {
      alert("Invalid Date 😅");
    }
  }
  outputAkanName();
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  generateAkanName();
});
