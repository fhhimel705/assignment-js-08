/*
{name : 'raju', bestFriens: 'farid'};
{name : 'farid', bestFriens: 'raju'};

** Take these two object as input and give boolean output as if raju and farid  is best friend or not?
*/
let arr1 = '55';
let arr2 = '20';

let person01 = { name: "raju", bestFriends: "farid" };
let person02 = { name: "farid", bestFriends: "raj" };

function isBestFriend(person01, person02) {
  if (typeof person01 === "object" && typeof person02 === "object") {
    if (person01.name === person02.bestFriends &&
        person02.name === person01.bestFriends)
     {
      // console.log('they are best friends');
      console.log(true);
    } 
    else {
      // console.log('they are not best friends');
      console.log(false);
    }
  } else {
    console.log("give object as an input");
  }
}

isBestFriend(arr1, arr2);
