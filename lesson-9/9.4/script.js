const number1 = parseFloat(prompt("Enter first number: ")); 
const number2 = parseFloat(prompt("Enter second number: ")); 
const number3 = parseFloat(prompt("Enter third number: "));

    if ((number1 >= number2) && (number1 >= number3)) {
       max = number1;
    }
    else if ((number2 >= number1) && (number2 >= number3)) {
       max = number2;
    }
  else{
    max = number3;
  }
alert(max);