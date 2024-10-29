function sayHelloAwait(time){
    setTimeout(()=>{
        console.log("Hello");
    }, time);    
}

console.log("start");
sayHelloAwait(3_000);
console.log("end");