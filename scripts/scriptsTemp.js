function temp() {
  var temperature = prompt("Enter temperature in celsius");
  var conversion = temperature * (9 / 5) + 32;

  document.getElementById("conversion").innerHTML += `
<p>The conversion of Celsius ${temperature}&deg to Fahrenheit is ${conversion}&deg</p>`;
}

function convertTemperature() {
  let temperature = prompt("Enter temperature in Celsius or Fahrenheit");
  let scale = prompt("Enter C for celsisus or F for Fahrenheit");
  let up = scale.toUpperCase();
  console.log("temperature", temperature);
  console.log("scale", up);

  if (up == "C") {
    let fahrenheit = temperature * (9 / 5) + 32;
    return (document.getElementById("choice").innerHTML += `
        <p>The conversion of Celsius ${temperature}&deg to Fahrenheit is ${fahrenheit}&deg</p>`);
  } else if (up == "F") {
    let celsius = (temperature - 32) * (5 / 9);
    return (document.getElementById("choice").innerHTML += `
        <p>The conversion of Celsius ${temperature}&deg to Fahrenheit is ${celsius}&deg</p>`);
  } else {
    alert("Invalid input");
  }
}
