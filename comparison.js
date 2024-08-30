// comparison of numbers
console.log(5>10);
console.log(10>5);
console.log(5 == 10);
console.log(10 == 10);
console.log(10 >= 10);
console.log(15>=5);

// comparison of variable
var applePrice = 250;
var bananaPrice = 50;

console.log(applePrice<bananaPrice);

// more comparison
if (5>7){
    console.log("what? false!");
}
else{
    console.log("5 is not greater than 7. it is a Wrong Comparison");
}

var muttonPrice = 400;

if (muttonPrice<300){
    console.log("please give me a dish of mutton");
}
else if (muttonPrice<=500){
    console.log("please give a half dish of mutton");
}
else {
    console.log("please give a dish of vegetable");
}

    // Multiple Condition

    const salary = 25000;
    const isBCS = true;
    const height = 61;

    if (salary>20000 && height >60){
        console.log("good groom");
    }
    else{
        console.log("search another groom");
    }

    if (salary>25000 || height> 65){
        console.log("it is ok.");
    }
    else {
        console.log("search another");
    }

    // Multi-Level Condition 


