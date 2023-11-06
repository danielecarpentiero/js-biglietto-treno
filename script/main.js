"use strict";

const travelDistance = prompt("How far are you going to get? (insert km)");
console.log(`You're authorized to fare ${travelDistance} km.`);

const passengerAge = prompt(
  "What's your age? (insert integer number from 1 to 99)"
);
console.log(`You are ${passengerAge} years old.`);

const ticketPrice = travelDistance * 0.21;
const juniorDiscount = (ticketPrice * 20) / 100;
const seniorDiscount = (ticketPrice * 40) / 100;

if (passengerAge < 18) {
  console.log(
    `You have right to a discount of ${juniorDiscount} euros! Total price is ${
      ticketPrice - juniorDiscount
    } euros!`
  );
} else if (passengerAge > 65) {
  console.log(
    `You have right to a discount of ${seniorDiscount} euros! Total price is ${
      ticketPrice - seniorDiscount
    } euros!`
  );
}
