// console.log("Hello world");//WORKING

// let name = "Sathish";
// name="Sar";
// const dept = "ECE";

// let age =19;
// var a = 20;
// console.log(a, name, dept, age);
// console.log(20^30);
// console.log(20& 30);


// let ab = prompt("Enter your signal");
// if(ab=="red")
//     console.log("stop");
// else if(ab=="orange")
//     console.log("wait");
// else
//     console.log("kelambu");

let a = Number(prompt("Enter a number to reverse:"));
let rev = 0;
while(a>0)
{
    rev = rev*10+(a%10);
    a = Math.floor(a/10);
}
console.log(rev);

let i = 1;
while(i<20)
{
    console.log(i);
    i+=2;
}