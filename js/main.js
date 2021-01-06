let adClose = document.getElementById("close-ad");
let adOpen = document.getElementById("open-ad");
let advertise = document.getElementById("advertise");
let clientAD = document.getElementById("client-ad");
let zipcodBtn = document.getElementById("zipcode-btn");
let zipcodeValue = document.getElementsByClassName("zip-search");
var form = document.getElementById("zip-form");

// Mongomery County Zip Codes
let zipcodeList = [
  20810,
  20811,
  20812,
  20813,
  20814,
  20815,
  20816,
  20817,
  20818,
  20824,
  20825,
  20827,
  20830,
  20832,
  20833,
  20837,
  20838,
  20839,
  20841,
  20842,
  20847,
  20848,
  20849,
  20850,
  20851,
  20852,
  20853,
  20854,
  20855,
  20857,
  20859,
  20860,
  20861,
  20862,
  20866,
  20868,
  20871,
  20872,
  20874,
  20875,
  20876,
  20877,
  20878,
  20879,
  20880,
  20882,
  20883,
  20884,
  20885,
  20886,
  20889,
  20891,
  20892,
  20894,
  20895,
  20896,
  20897,
  20898,
  20899,
  20901,
  20902,
  20903,
  20904,
  20905,
  20906,
  20907,
  20908,
  20910,
  20911,
  20912,
  20913,
  20914,
  20915,
  20916,
  20918,
  20993,
  20997,
];

function changeStyle() {
  clientAD.style.display = "none";
  adClose.style.display = "none";
  adOpen.style.display = "inline-block";
  advertise.style.height = "0";
}

function revertStyle(event) {
  advertise.style.height = "100px";
  adOpen.style.display = "none";
  adClose.style.display = "inline-block";
  clientAD.style.display = "block";
}

function adDisplayTimer() {
  clientAD.style.visibility = "visible";
}

function disableMessage() {
  document.getElementById("zipcode-msg-output").innerHTML = "";
  document.getElementById("zipcode-msg-output").style.color = "black";
  document.getElementById("zipcode-msg-output").style.visibility = "hidden";
}

function handleForm(event) {
  event.preventDefault();
}

function zipcodeChecker() {
  let zipcode = Number(zipcodeValue[0].value);
  console.log(zipcode);
  // Get form data
  //   let zipcodeValue = document.getElementsByClassName("zip-search").value;
  //   Check if Null or Number
  // Save form data to variable
  // Check zipcode in zipcodeList

  if (zipcodeList.includes(zipcode)) {
    document.getElementById("zipcode-msg-output").style.color = "#afd275";
    document.getElementById("zipcode-msg-output").innerHTML =
      "We’ve got your area covered!";
    document.getElementById("zipcode-msg-output").style.visibility = "visible";
    zipcode = "";
  } else {
    // document.getElementById("zipcode-msg-output").style.color = "#e7717d";
    document.getElementById("zipcode-msg-output").style.color = "red";
    document.getElementById("zipcode-msg-output").innerHTML =
      "Sorry, we haven’t expanded to that area yet.";
    document.getElementById("zipcode-msg-output").style.visibility = "visible";
    zipcode = "";
  }

  setTimeout(disableMessage, 8000);
  // Display message for 8 seconds
  // Hide message
  // Clear form data

  //   if (zipcode > 20000) {
  //     // Display message
  //     // “We’ve got your area covered!”
  //     document.getElementById("zipcode-msg-output").innerHTML = "We’ve got your area covered!";
  //     document.getElementById("zipcode-msg-output").style.visibility = "visible";

  //     return true;
  //   } else {
  //     // Display message
  //     document.getElementById("zipcode-msg-output").innerHTML = "Sorry, we haven’t expanded to that area yet.";
  //     document.getElementById("zipcode-msg-output").style.visibility = "visible";
  //     return false;
  //   }
}

// adClose.onclick = (event) => {
//   changeStyle(event);
// };

// console.log(zipcodeValue[0].value);
setTimeout(adDisplayTimer, 5000);
// clientAD.addEventListener("load", adDisplayTimer);
adClose.addEventListener("click", changeStyle);
adOpen.addEventListener("click", revertStyle);
zipcodBtn.addEventListener("click", zipcodeChecker);
form.addEventListener("submit", handleForm);
// zipcodBtn.addEventListener("click", zipcodeChecker);
