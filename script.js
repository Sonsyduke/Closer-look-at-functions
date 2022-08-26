'use strict';

// ===================
// DEFAULT PARAMETERS
const bookings = [];

function createBooking(
  flightNum,
  numbPassengers = 1,
  price = 199 * numbPassengers
) {
  // ES5
  //   numbPassengers = numbPassengers || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numbPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
}

createBooking('LH123');
createBooking('LH123', 8, 250);
createBooking('LH123', 5);
createBooking('LH123', 2);

createBooking('LH123', undefined, 1000);
