function scuberGreetingForFeet(feet) {
  // Write your code here!
  if (feet <= 400) {
    return "This one is on me!";
  } else if (feet <= 2000) {
    return "That will be twenty bucks.";
  } else if (feet <= 2500) {
    return "I will gladly take your thirty bucks.";
  } else {
    return "No can do.";
  }
}

function ternaryCheckCity(city) {
  // Write your code here!
  let response = city === "NYC" ? "Ok, sounds good." : "No go.";
  return response;
}

function switchOnCharmFromTip(tip) {
  // Write your code here!
  let response;
  switch (tip) {
    case "generous":
      response = "Thank you so much.";
      break;

    case "not as generous":
      response = "Thank you."
      break;

    default:
      response = "Bye."
  }
  return `${response}`;
}
