/*
01. check whether the file is js file or not?
*/
let file = 'javaScript.js';
let file02 = 'img-001.png';
let file03 = 20;

function isJavaScript(file){
    if(typeof file !== 'string'){
        console.log("give a string");
    }
    else{
        console.log(file.endsWith(".js"));
    }
}
isJavaScript(file03);


// console.log(file02.endsWith('.png'));
// console.log(file03.endsWith(".jpg"));
