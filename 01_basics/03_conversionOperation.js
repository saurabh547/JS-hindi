// const score = "true";
// const convertScore = Number(score);
// console.log(convertScore);
// console.log(typeof convertScore);

// "33" => 33
// "33abc" => NaN
// true =>1; false => 0

// let isLoggedIn = "sa";

// let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "saurabh" => true

let someNumber = 33;

let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);


// ********************* Operations ************************

let gameCounter = 100;
// gameCounter++;
++gameCounter
// console.log(gameCounter);

// learn prefix and postfix in js


// program to check if a number is prime or not

// take input from the user
const number = parseInt(57);
let isPrime = true;

// check if number is equal to 1
if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}

// check if number is greater than 1
else if (number > 1) {

    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
}

// check if number is less than 1
else {
    console.log("The number is not a prime number.");
}