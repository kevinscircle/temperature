// console.log(multiplication);

// function multiplication(myNumber) {
//   // local variable (myNumber)

//   document.write("<p class='test'>" + myNumber * 5 + "</p>");
// }

//multiplication(3); // call invoke run execute

function taxesCalculation() {
  var product = prompt("Enter the product's name:");
  var price = Number(prompt("Enter the product's price:"));
  var qty = Number(prompt("Enter the qty:"));
  const taxes = 1.08;

  var subtotal = price * qty;
  var total = subtotal * taxes;

  //   console.log(product);
  //   console.log(subtotal);
  //   console.log(total);

  // console.log(product, price, qty);

  // option 3

  //document.write("<p> Name:" + product+ "</p>" +"<p> Subtotal:" + subtotal + "</p>" + "<p>Total:"+total+"</p>");

  // option 2
  //   document.write(`
  //     <p> Name: ${product} </p>
  //     <p> Subtotal: ${subtotal} </p>
  //     <p> Total: ${total} </p>
  // `);

  // option 3
  document.getElementById("products").innerHTML += `
        <p> Name: ${product} </p>
        <p> Subtotal: ${subtotal} </p>
        <p> Total: ${total} </p>
    `;
}
