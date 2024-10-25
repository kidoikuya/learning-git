try{
    console.log(calculateAverage(1, 2, 3));
    console.log(calculateAverage(1, 2, 3, 4, 5));
    console.log(calculateAverage());
    console.log(calculateAverage(1, 2, "a", 4, 5));
}catch(err){ 
    console.error(err.message);
}

function calculateAverage(...numbers){
    return numbers.length
     && numbers.reduce(
        (prev, num)=> {
            if(typeof num !== "number"){
                throw new TypeError("数値以外の値を指定することはできません。");
            }
            return prev + num;
        }, 0) / numbers.length;
}