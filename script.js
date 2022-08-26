'use strict';

// ===================
// DEFAULT PARAMETERS
// const bookings = [];

// function createBooking(
//   flightNum,
//   numbPassengers = 1,
//   price = 199 * numbPassengers
// ) {
// ES5
//   numbPassengers = numbPassengers || 1;
//   price = price || 199;

//   const booking = {
//     flightNum,
//     numbPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// }

// createBooking('LH123');
// createBooking('LH123', 8, 250);
// createBooking('LH123', 5);
// createBooking('LH123', 2);

// createBooking('LH123', undefined, 1000);

// ===================
// VALUES VS REFERENCE
const flight = 'LH234';
const douglas = {
  name: 'Douglas Lombard',
  passport: 234563472621,
};

function checkIn(flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = `Mr. ${passenger.name}`;

  if (passenger.passport === 234563472621) {
    alert('Checked in');
  } else {
    alert('Wrong passport');
  }
}

// checkIn(flight, douglas);
// console.log(flight);
// console.log(douglas);

function newPassport(person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
}

newPassport(douglas);
checkIn(flight, douglas);
