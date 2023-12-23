/*
01. Calculate the total oil price that i have to pay.
** diesel ==> 114.
** petrol ==> 130.
** octane ==> 135.
*/


function totalOilPrice(diesel, petrol, octane) {
  if ( typeof diesel === "number" && typeof petrol === "number" && typeof octane === "number" ) {
    let dieselTotalPrice = diesel * 114;
    let petrolTotalPrice = petrol * 130;
    let octaneTotalPrice = octane * 135;
    let totalPrice = dieselTotalPrice + petrolTotalPrice + octaneTotalPrice;
    return totalPrice;
  } 
  else {
    return "give numbers";
  }
}
console.log(totalOilPrice(2, 3, 2));
