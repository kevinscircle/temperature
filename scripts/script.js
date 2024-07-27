console.log("hey");

// var num1 = prompt("Enter your number");
// var num2 = prompt("Enter your number2:");
// var sum = Number(num1) + Number(num2);
// document.write(num1 + " + " + num2 + " = " + sum);

var num1 = prompt("Enter your number");
var num2 = prompt("Enter your number2:");
var operation = prompt(" Menu : 1. Sum - 2. Subs - 3. Div - 4. Mult");
if (operation == "1") {
  var sum = Number(num1) + Number(num2); //sum operation
  document.write(num1 + " + " + num2 + " = " + sum); //display the result
  console.log("sum", sum);
} else if (operation == "2") {
  var subtraction = Number(num1) - Number(num2);
  console.log("subtraction", subtraction);
  document.write(num1 + " - " + num2 + " = " + subtraction);
} else if (operation == "3") {
  if (num2 === 0 || num2 === "0") {
    document.write("You can't divide by zero");
  } else {
    var division = Number(num1) / Number(num2);
    console.log("division", division);
    document.write(num1 + " / " + num2 + " = " + division);
  }
} else if (operation == "4") {
  var multiplication = Number(num1) * Number(num2);
  document.write(num1 + " * " + num2 + " = " + multiplication);
  console.log("multiplication", multiplication);
} else {
  document.write("Invalid Operation");
  console.log("Invalid Operation");
}


// var num1 = Number(prompt("Enter your number"));
// var num2 = Number(prompt("Enter your number2:"));
// var operation = prompt(" Menu : 1. Sum - 2. Subs - 3. Div - 4. Mult");
// if(operation=="1"){
//     var sum=num1+num2;//sum operation
//     document.write(num1 + " + " + num2 + "=" +sum); //display the result
// }