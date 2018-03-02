
var sum=[];
var work=0;

//For numbers, print number to screen and push value to sum array

function f1(objButton){  
    document.getElementById("screen").innerHTML = (objButton.value);
    sum.push(objButton.value);
}

//for operators, print operator to screen and push operator to sum array
function f2(objButton) {
    document.getElementById("screen").innerHTML = (objButton.value);
    sum.push(objButton.value);
}

 console.log(sum)

 //if (objButton.value = "C" || "AC") {
 //   sum=[];
 //}

