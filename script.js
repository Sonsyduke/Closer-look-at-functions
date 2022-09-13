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

const flight = 'LH123';
const douglas = {
  name: 'Douglas Lombard',
  passport: 23454627582,
};

function checkIn(flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = `Mr. ${passenger.name}`;

  if (passenger.passport === 23454627582) {
    alert('Check in');
  } else {
    alert('Wrong passport');
  }
}

checkIn(flight, douglas);
console.log(flight);
console.log(douglas);

// Is the same as doing
const flightNum = flight;
const passenger = douglas;

function newPassport(person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
}

newPassport(douglas);
checkIn(flight, douglas);
console.log(douglas);
