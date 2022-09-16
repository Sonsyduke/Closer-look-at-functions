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

// const greetArr = greeting => name => console.log(`${greeting} ${name}`);

// greeter('Hello')('Douglas');
// greetArr('Hi')('Douglas');

// END OF RETURNING FUNCTIONS
// ===================

// ===================
// THE CALL, APPLY AND BIND METHODS

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LM',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// lufthansa.book(239, 'Douglas Lombard');
// lufthansa.book(639, 'John Smith');
// console.log(lufthansa);

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = lufthansa.book;

// Does NOT work
// book(23, "Sarah Williams");

// Call Method
// book.call(eurowings, 23, 'Sarah Williams');
// console.log(eurowings);

// book.call(lufthansa, 239, 'Mary Cooper');
// console.log(lufthansa);

// const swiss = {
//   airline: 'Swiss Air Lines',
//   iataCode: 'LX',
//   bookings: [],
// };

// book.call(swiss, 583, 'Mary Cooper');
// console.log(swiss);

// // Apply method
// const flightData = [583, 'George Cooper'];
// book.apply(swiss, flightData);
// console.log(swiss);

// book.call(swiss, ...flightData);

// Bind method
// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// bookEW(23, 'Steven Williams');

// Specifying the arguments before hand is call Partial application
// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Douglas Lombard');

// With Event Listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
// function addTax(rate, value) {
//   return value + value * rate;
// }

// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

// console.log(addVAT(100));
// console.log(addVAT(23));

// CHALLENGE
// Use returning functions to get the same result as on the top

// function addTAX(rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// }

// const addVAT2 = addTAX(0.23);
// console.log(addVAT2(100));
// console.log(addVAT2(23));

// END OF CALL, APPLY AND BIND METHOD
// ===================

// ===================
// CODING CHALLENGE

const pollBtn = document.querySelector('.poll');
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // for (let i = 0; i < this.options.length; i++) {
    //   console.log(`${this.options[i]}`);
    // }
    const answer = Number(
      prompt(`${this.question} 
    ${this.options[0]}
    ${this.options[1]}
    ${this.options[2]}
    ${this.options[3]}
    (Write option number)`)
    );
    if (typeof answer === 'number' && answer < 4) {
      this.answers[answer]++;
    }
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      // const answersString =
      console.log(`Poll results are ${this.answers}`);
    }
  },
};

// poll.registerNewAnswer.bind();
pollBtn.addEventListener('click', poll.registerNewAnswer.bind(poll));
