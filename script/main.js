"use strict";
/* Chiedi quanti km deve viaggare l'utente */
const travelDistance = prompt("How far are you going to get? (insert km)");

/* chiedi l'età del passeggero */
const passengerAge = prompt("What's your age? (from 1 to 99)");

/* calcolo prezzo del biglietto in base ai km */
const ticketPrice = travelDistance * 0.21;
const ticketPriceFixed = ticketPrice.toFixed(2);

/* sconto junior (età inferiore ai 18 anni) */
const juniorDiscount = (ticketPrice * 20) / 100;
const juniorDiscountFixed = juniorDiscount.toFixed(2);
const juniorFinalPrice = ticketPriceFixed - juniorDiscountFixed;

/* sconto senior (età superiore ai 65 anni) */
const seniorDiscount = (ticketPrice * 40) / 100;
const seniorDiscountFixed = seniorDiscount.toFixed(2);
const seniorFinalPrice = ticketPriceFixed - seniorDiscountFixed;

if (passengerAge < 18) {
  console.log(
    `You're authorized to fare ${travelDistance} km. You are ${passengerAge} years old, so you have right to a discount of ${juniorDiscountFixed} euros! Total price is ${juniorFinalPrice} euros!`
  );
} else if (passengerAge > 65) {
  console.log(
    `You're authorized to fare ${travelDistance} km. You are ${passengerAge} years old, so you have right to a discount of ${seniorDiscountFixed} euros! Total price is ${seniorFinalPrice} euros!`
  );
} else {
  console.log(
    `You're authorized to fare ${travelDistance} km. Total price is ${ticketPrice}`
  );
}
