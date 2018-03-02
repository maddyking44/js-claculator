
var sum=[];
var work=0;



//when button is pushed, retain value and print to screen
var work = addEventListener("onClick", print); 

function print() {
document.getElementById("screen").innerHTML = work;
}

//push value to sum array
sum.push(work);

//calculate values in sum array and convert to string
for (i=0; i<sum.length; i++) {
var ans = (sum.reduce).toString;
}

// prints result to screen
function res() {
document.getElementById("screen").innerHTML = ans;
}
