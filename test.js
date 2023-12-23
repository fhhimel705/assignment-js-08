// radian to degree
function radianToDegree(radian) {
  if (typeof radian !== "number") {
    return "give a number";
  } else {
    let degree = radian / 57.29578;
    return degree;
  }
}
console.log(radianToDegree("20"));

// oil price

function totalOilPrice(diesel, petrol, octane) {
  if (
    typeof diesel === "number" &&
    typeof petrol === "number" &&
    typeof octane === "number"
  ) {
    let dieselTotalPrice = diesel * 114;
    let petrolTotalPrice = petrol * 130;
    let octaneTotalPrice = octane * 135;
    let totalPrice = dieselTotalPrice + petrolTotalPrice + octaneTotalPrice;
    return totalPrice;
  } else {
    return "give numbers";
  }
}
console.log(totalOilPrice(2, 3, 2));

// bus fare
function publicBusFare(student) {
  if (typeof student === "number") {
    let busReamining = student % 50;
    console.log(busReamining);
    let microbusRemaining = busReamining % 11;
    console.log(microbusRemaining);
    let publicBusCost = microbusRemaining * 250;
    console.log(publicBusCost);
  } else {
    console.log("give a number");
  }
}
publicBusFare("279");

// best friend

let person01 = { name: "raju", bestFriends: "farid" };
let person02 = { name: "farid", bestFriends: "raj" };

function isBestFriend(person01, person02) {
  if (typeof person01 === "object" && typeof person02 === "object") {
    if (
      person01.name === person02.bestFriends &&
      person02.name === person01.bestFriends
    ) {
      // console.log('they are best friends');
      console.log(true);
    } else {
      // console.log('they are not best friends');
      console.log(false);
    }
  } else {
    console.log("give object as an input");
  }
}

isBestFriend(arr1, arr2);
