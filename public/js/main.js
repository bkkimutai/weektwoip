const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
let akanName = null;

function userInfo() {
  let dateOfBirth = document.getElementById("dob").value;
  let dd = parseInt(dateOfBirth.slice(0, 2));
  let mm = parseInt(dateOfBirth.slice(3, 5));
  let cc = parseInt(dateOfBirth.slice(6, 8));
  let yy = parseInt(dateOfBirth.slice(8));
  let gender = document.getElementById("gender").value;
  return { dd, mm, cc, yy, gender };
}

function dayCalculationIndex(dd, mm, cc, yy) {
  let indexOfDay = Math.floor((((yy/4) - 2*cc - 1) + ((5*yy/4)) + ((26*(mm+1)/10)) + dd) % 7);
  return indexOfDay;
}

function generateAkanName() {
  let { dd, mm, cc, yy, gender } = userInfo();
  let indexOfDay = dayCalculationIndex(dd, mm, cc, yy);
  if (gender === "male") {
    akanName = maleNames[indexOfDay];
  } else if (gender === "female") {
    akanName = femaleNames[indexOfDay];
  } else {
    console.log("Gender not known! Please retry with male/female");
  }
  document.getElementById("output").innerHTML = "Your Akan name is: " + akanName;
}
