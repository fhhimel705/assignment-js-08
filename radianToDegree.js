function radianToDegree(radian){
    if(typeof radian !== 'number'){
        return 'give a number';
    }
    else{
        let degree = radian / 57.29578;
        return degree;
    }
}
console.log(radianToDegree('20'));