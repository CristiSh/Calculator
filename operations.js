const calculator = {
    displayValue: '0',
    firstOperand : null,//initial value
    waitingForSecondOperand: false, //checks if the first operand and the operator is inputed
    operator: null,//initial value

};
function updateDisplay(){
    const display = document.querySelector('.output');//gets all the elements with the class output
    display.value=calculator.displayValue;
}
updateDisplay();

const keys = document.querySelector('.number,.sign');
keys.addEventListener('click',(event)=>{//access the clicked element
    const {target} = event; //the element that triggered the event (what we click, in this case); equiv to const target = event.target;
    // const {value} = target;

    if(!target.matches('button')){
    return;
}

// switch(value){
//     case '+':
//     case '-':
//     case '*':
//     case '/':
//     case '=':
// }


if(target.classList.contains('sign')){
    console.log('sign',target.value);
    return;
}
console.log('digit',target.value);

}
);
