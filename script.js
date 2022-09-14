'use strict';

// ===================
// DEFAULT PARAMETERS

// const bookings = [];

// function createBooking(
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
// ES5
// numPassengers = numPassengers || 1;
// price = price || 199;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// }

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH123', 5);

// END OF DEFAULT PARAMETERS
// ===================

// ===================
// HOW PASSING ARGUMENTS WORKS: VALUE VS REFERENCE

// const flight = 'LH123';
// const douglas = {
//   name: 'Douglas Lombard',
//   passport: 23454627582,
// };

// function checkIn(flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = `Mr. ${passenger.name}`;

//   if (passenger.passport === 23454627582) {
//     alert('Check in');
//   } else {
//     alert('Wrong passport');
//   }
// }

// checkIn(flight, douglas);
// console.log(flight);
// console.log(douglas);

// Is the same as doing
// const flightNum = flight;
// const passenger = douglas;

// function newPassport(person) {
//   person.passport = Math.trunc(Math.random() * 10000000000);
// }

// newPassport(douglas);
// checkIn(flight, douglas);
// console.log(douglas);

// END OF VALUES VS REFERENCES
// ===================

// ===================
// CALLBACK FUNCTION

// function oneWord(str) {
//   return str.replace(/ /g, '').toLowerCase();
// }

// function upperFirstWord(str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// }

// Higher-order function
// function transformer(str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);
// }

// transformer('JavaScript is the best', upperFirstWord);
// transformer('JavaScript is the best', oneWord);

// JS uses callbacks all the time
// function high5() {
//   console.log('High five');
// }

// document.body.addEventListener('click', high5);

// ['Douglas', 'Rolly', 'Adam'].forEach(high5);

// Write something you see in the main world using the same concept

// const name = prompt('What is your name');
// const answerBtn = document.querySelector('.poll');
// answerBtn.addEventListener('click', greeting);

// function greeting() {
//   alert(`Welcome back, ${name}`);
// }

// END OF CALLBACK FUNCTIONS
// ===================

// ===================
// RETURNING FUNCTIONS
// function greet(greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// }

// const greeterHey = greet('Hey');
// greeterHey('Jonas');
// greeterHey('Douglas');

// greet('Hello')('Douglas');

// Challenge
// const greeter = greeting => {
//   return name => {
//     console.log(`${greeting} ${name}`);
//   };
// };

const greetArr = greeting => name => console.log(`${greeting} ${name}`);

// greeter('Hello')('Douglas');
greetArr('Hi')('Douglas');
