// * .forEach
const prices = [20, 15, 30, 35, 40];

prices.forEach((price, ex) => {
  console.log(ex, price);
});

const newPrices = prices.map((price) => {
  return price * 1.1;
});

// * .filter
const premiumPrices = newPrices.filter((price) => {
  return price > 30;
});
// console.log("New Prices:", newPrices);

const sumPrice = newPrices.reduce((prevVal, price) => {
  return prevVal + price;
});
// console.log("Total Price:" + sumPrice);

// * .reduce

const list = [1, 2, 3, 4, 5];
const sum = list.reduce((previousValue, currentValue) => {
  return previousValue + currentValue;
});

// console.log(sum);
