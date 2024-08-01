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
    let celsius = (temperature - 32) * (5 / 9);
    return (document.getElementById("choice").innerHTML += `
        <p>The conversion of Fahrenheit ${temperature}&deg to Celsius is ${celsius}&deg</p>`);
  } else if (up == "F") {
    let fahrenheit = temperature * (9 / 5) + 32;

    return (document.getElementById("choice").innerHTML += `
        <p>The conversion of Celsius ${temperature}&deg to Fahrenheit is ${fahrenheit}&deg</p>`);
  } else {
    alert("Invalid input");
  }
}

function convertTemperatureRange() {
  //startValue, endValue, string
  let startValue = Number(prompt("Enter starting temperature range number"));
  let endValue = Number(prompt("Enter ending temperature range number"));
  let string = prompt("Enter C for Celsius or F for Fahrenheit");
  let up = string.toUpperCase();

  for (let i = startValue; i <= endValue; i++) {
    let temperature = i;
    console.log("temperature", temperature);

    if (up === "C") {
      let celsius = (temperature - 32) * (5 / 9);
      console.log("celsius", celsius);
      document.getElementById("range").innerHTML += `
        <p>The conversion of Fahrenheit ${temperature}&deg to Celsius is ${celsius}&deg</p>`;
    } else if (up === "F") {
      let fahrenheit = temperature * (9 / 5) + 32;
      console.log("fahrenheit", fahrenheit);

      document.getElementById("range").innerHTML += `
      <p>The conversion of Celsius ${temperature}&deg to Fahrenheit is ${fahrenheit}&deg</p>`;
    } else {
      alert("error");
    }
  }
}
