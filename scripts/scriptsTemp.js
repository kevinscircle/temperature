function temp() {
var temperature = prompt("Enter temperature in celsius");
var conversion = temperature * (9/5) + 32;




document.getElementById('conversion').innerHTML += `
<p>The conversion of Celsius ${temperature}&deg to Fahrenheit is ${conversion}&deg</p>`;

}