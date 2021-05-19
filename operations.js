const calculator = {
    displayVal = '0',
    firstOperand = null,//initial value
    waitingForSecondOperand: false, //is the first operand and the operator inputed?
    operator: null,//initial value

};
function updateDisplay(){
    const display = document.querySelector('.output');
    display.value=calculator.displayVal;
}
updateDisplay();








// function sub(a, b) {
//     return a - b;
// }

// function mul(a, b) {
//     return a * b;
// }

// function div(a, b) {
//     return a / b;
// }

// function eq(res) {
//     alert(res);
// }

// function test() {
//     alert("merge");
// }

// function display() {
//     document.getElementById("one").addEventListener("click", function () {
//         document.getElementById("operator1").innerHTML = 1;
//     });
//     document.getElementById("two").addEventListener("click", function () {
//         document.getElementById("operator1").innerHTML = 2;
//     });
//     document.getElementById("three").addEventListener("click", function () {
//         document.getElementById("operator1").innerHTML = 3;
//     });
//     document.getElementById("four").addEventListener("click", function () {
//         document.getElementById("operator1").innerHTML = 4;
//     });
//     document.getElementById("five").addEventListener("click", function () {
//         document.getElementById("operator1").innerHTML = 5;
//     });
//     document.getElementById("six").addEventListener("click", function () {
//         document.getElementById("operator1").innerHTML = 6;
//     });
//     document.getElementById("seven").addEventListener("click", function () {
//         document.getElementById("operator1").innerHTML = 7;
//     });
//     document.getElementById("eight").addEventListener("click", function () {
//         document.getElementById("operator1").innerHTML = 8;
//     });
//     document.getElementById("nine").addEventListener("click", function () {
//         document.getElementById("operator1").innerHTML = 9;
//     });
//     document.getElementById("zero").addEventListener("click", function () {
//         document.getElementById("operator1").innerHTML = 0;
//     });
// }
// //we create an array where we put all values,
// //then we add all of them (for addition);
// //the array elements will be input from the calculator buttons
// var a = [];
// var i = 0;
// var sum = 0;
// function add(){
//     a[i]=document.getElementById("operator1").value;//add number in array from calculator interface
//     i++;
//     for(var j = 0;j<a.length;j++){
//         sum = sum + a[j];
//     }
//     console.log(sum) ;
// }