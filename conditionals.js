let num = 5;
if (num > 10) {
    console.log("x is greater than 10");
} else if (num > 5) {
    console.log("x is greater than 5");
} else {
    console.log("x is less than or equal to 5");
}

// ----------------------

let a = 5;
let b = 10;
let c = 15;

if (a > b || a > c) {
  console.log("At least one of the conditions is true");
} else {
  console.log("Both of the conditions are false");
}

// ----------------------

let day = "Sunday";

switch (day) {
  case "Monday":
    console.log("Today is Monday");
    break;
  case "Tuesday":
    console.log("Today is Tuesday");
    break;
  case "Wednesday":
    console.log("Today is Wednesday");
    break;
  case "Thursday":
    console.log("Today is Thursday");
    break;
  case "Friday":
    console.log("Today is Friday");
    break;
  case "Saturday":
    console.log("Today is Saturday");
    break;
  case "Sunday":
    console.log("Today is Sunday");
    break;
  default:
    console.log("Invalid day");
}

// ----------------------

let anotherday = "Tuesday";
let activity;

switch (anotherday) {
  case "Monday":
    activity = "Go to the gym";
    break;
  case "Tuesday":
    activity = "Attend coding meetup";
    break;
  case "Wednesday":
    activity = "Watch a movie";
    break;
  case "Thursday":
    activity = "Visit a museum";
    break;
  case "Friday":
    activity = "Dinner with friends";
    break;
  case "Saturday":
    activity = "Hiking in the mountains";
    break;
  case "Sunday":
    activity = "Rest at home";
    break;
  default:
    activity = "Undefined day";
}

console.log(activity);

// ----------------------