// for (i = 2; i <= 100; i += 2) {
//   //   console.log("i", i);
// }

// let students=["Mike","Brett","Kevin","Ryan","Emilio","Juan"];
// for(let i=0;i<=5;i+=1){
//     document.write("<p>" + students[i]+"</p>");
// }

function multiTabble() {
  let num = Number(prompt("Enter the mult table:"));
  let start = Number(prompt("Enter the start num:"));
  let stop = Number(prompt("Enter the stop num:"));

  for (let i = start; i <= stop; i++) {
    console.log(`${i} x ${num} = ${i * num}`);
  }
}

// multiTabble();
// console.log("hey");

function challenge() {
  let num = Number(prompt("Enter a number:"));
  for (let i = 0; i < 100; i++) {
    if (num == i) {
      console.log("I found it");
    } else {
      console.log("i", i);
    }
  }
}

// challenge();

let ages = [22, 35, 20, 43, 37, 33, 51, 27];

function age() {
  for (i = 0; i < ages.length; i++) {
    console.log(ages[i]);
  }
}

// age(ages);

// level 2  sum of ages

function practice() {
  let total = 0;
  for (let i = 0; i < ages.length; i++) {
    total = total + ages[i];
    console.log("total", total);
  }
}

// practice(ages);

// level 3 display average

function average(params) {
  let total = 0;
  for (let i = 0; i < ages.length; i++) {
    total = total + ages[i];
  
  }
    console.log("total", total);
  console.log("average", total / ages.length);
}


// average();

