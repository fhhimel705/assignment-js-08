/*
reserved bus ==> 50
microbus ==> 11
rest of the people will go by public bus .

total student : 65.
bus remaining --> 15;
microbus remaining --> 4;
public bus --> 4;
public bus fare --> 250tk;

total student : 129.
bus remaining --> 29;
microbus remaining --> 7;
public bus --> 7;
public bus fare --> 250tk;

*** Take student numbers as input and calculate that how many students have to travle by public transport after taking as many as bus and microbus needed but seats have to filled and give the total amount of public bus fare as output.
*/

function publicBusFare(student) {
  if (typeof student === "number") {
  let busReamining = student % 50;
  console.log(busReamining);
  let microbusRemaining = busReamining % 11;
  console.log(microbusRemaining);
  let publicBusCost = microbusRemaining * 250;
  console.log(publicBusCost);
}
else{
    console.log('give a number');
}
}
publicBusFare('279');
