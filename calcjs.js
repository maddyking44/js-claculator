
var sum=[];
var answer="";

//Print number or operator to screen and push value to sum array

function f1(objButton){  
    document.getElementById("screen").innerHTML = (objButton.value);
    sum.push(objButton.value);
}

//clear array and screen when AC or C is pushed
function f2(objButton) {
    sum = [];
    document.getElementById("screen").innerHTML = "0";
    console.log(sum)
}

// //run equation when equals is pushed
// function f3(objButton) {
//     document.getElementById("screen").innerHTML = (sum);
//     console.log(sum)
// }

//run equation when equals is pushed
function f3(objButton) {{{
     var operator = sum[1];
     var first = Number(sum[0]);
     var second = Number(sum[2]);
        if (operator == "+") {
        answer = (first += second);
                            }
        else if (operator == "/") {
        answer = (first /= second);
                            }
        else if (operator == "*") {
        answer = (first *= second);
                            }
        else if (operator == "-") {
        answer = (first -= second);
                            }
        else answer = "invalid";
        }
    document.getElementById("screen").innerHTML = (answer);
    console.log((first) += (second))
    console.log(sum)
}
sum = [];
}



