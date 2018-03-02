
var sum=[];
var answer=0;

//Print number or operator to screen and push value to sum array

function f1(objButton){  
    document.getElementById("screen").innerHTML = (objButton.value);
    sum.push(objButton.value);
}

//clear array and screen when AC or C is pushed
function f2(objButton) {
    sum = [];
    document.getElementById("screen").innerHTML = "0";
    console.log(sum);
}

//run equation when equals is pushed
function f3(objButton) {{
        if ((sum[1]) == "+") {
        answer == ((sum[0]) += (sum[2]));
                            }
        else if ((sum[1]) = "/") {
        answer == ((sum[0]) /= (sum[2]));
                            }
        else if ((sum[1]) = "*") {
        answer == ((sum[0]) *= (sum[2]));
                            }
        else if ((sum[1]) = "-") {
        answer == ((sum[0]) -= (sum[2]));
                            }
        else answer == "invalid";
        }
    document.getElementById("screen").innerHTML = (answer);
    console.log((sum[0]) += (sum[2]))
    console.log(sum)
}



