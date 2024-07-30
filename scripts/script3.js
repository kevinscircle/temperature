function practice() {
  let num1 = 10;
  let num2 = 20;

  if (num1 > num2) {
    console.log("the num1 is greater than the num2");
  } else if (num1 < num2) {
    console.log("the num1 is less than the num2");
  } else {
    console.log("they equal");
  }
}

// set a function with console log to check connection

// Challenge: Driving License
// 1. Prompt the user to enter their age.
// 2. Use an if-else statement to determine if the person can get a driving license.
// 3. If the age is 18 or older, print "Congratulations! You can get your driving license."
// 4. If the age is less than 18, print "Sorry, you are too young to get a driving license."

function license() {
  let age = Number(prompt("Please enter your age: "));

  if (age >= 18) {
    console.log("Congratulations! You can get your driving license.");
  } else {
    console.log("Sorry, you are too young to get a driving license.");
  }
}

// Exercise: Guess the Number Game
// 1. Generate a random number between 1 and 10 (you can use Math.random() and Math.floor()).
// 2. Ask the user to guess the number. (prompt)
// 3. Use an if-else statement to check if the user's guess is correct.
// 4. If the guess is correct, print on the HTML "Congratulations! You guessed the number."
// 5. If the guess is incorrect, print on the HTML "Sorry, that's not correct. The number was [generated number]".

function guessnumber() {
  let guess = Number(prompt("Guess a number betweeen 1 and 10"));
  let number = Math.floor(Math.random() * 10) + 1;

  if (guess == number) {
    console.log("Congratulations! You guessed the number");
    document.getElementById("guess").innerHTML += `
       <p>Congratulations! You guessed the number </p>`;
  } else {
    document.getElementById("guess").innerHTML += `
       <p>Sorry, that's not correct. The number was ${guess} </p>`;
    console.log(`Sorry, that's not correct. The number was ${number} `);
  }
}


//Database simulation
let userName="sjimenez@sdgku.edu";
let password="Test1234";
function login(){
    //get the uname and pass from the user
    let uname=prompt("Enter your user name:");
    let pass=prompt("Enter your password:");
    //compare the inputs with the DB data
    if(uname==userName && pass==password){
        document.getElementById("results").innerHTML="Welcome to the system " + uname;
    }else{
        document.getElementById("results").innerHTML="Invalid credentials";
    }
}
