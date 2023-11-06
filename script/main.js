"use strict";

const travelDistance = prompt("How far are you going to get? (insert km)");
console.log(`You're authorized to fare ${travelDistance} km.`);

const passengerAge = prompt(
  "What's your age? (insert integer number from 1 to 99)"
);
console.log(`You are ${passengerAge} years old.`);

const ticketPrice = travelDistance * 0.21;
const ticketPriceFixed = ticketPrice.toFixed(2);

const juniorDiscount = (ticketPrice * 20) / 100;
const juniorDiscountFixed = juniorDiscount.toFixed(2);

const seniorDiscount = (ticketPrice * 40) / 100;
const seniorDiscountFixed = seniorDiscount.toFixed(2);

if (passengerAge < 18) {
  console.log(
    `You have right to a discount of ${juniorDiscountFixed} euros! Total price is ${
      ticketPriceFixed - juniorDiscountFixed
    } euros!`
  );
} else if (passengerAge > 65) {
  console.log(
    `You have right to a discount of ${seniorDiscountFixed} euros! Total price is ${
      ticketPriceFixed - seniorDiscountFixed
    } euros!`
  );
}
