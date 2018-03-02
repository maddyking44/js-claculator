
var sum=[];
var answer=0;
var gem=0;

//For numbers, print number to screen and push value to sum array

function f1(objButton){  
    document.getElementById("screen").innerHTML = (objButton.value);
    sum.push(objButton.value);
}



//for operators, print operator to screen and push operator to sum array
function f2(objButton) {
    document.getElementById("screen").innerHTML = (objButton.value);
    sum.push(objButton.value).toString;
}

//run equation when equals is pushed
function f3(objButton) {
    var answer = sum.reduce(
            function(a, b, c){
                return (abc)
            });
    document.getElementById("screen").innerHTML = (answer);
}

console.log(sum)




 //if (objButton.value = "C" || "AC") {
 //   sum=[];
 //}

