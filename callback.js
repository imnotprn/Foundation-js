// * Callback Function - Function Parameters (14.00)
// function callMe() {
//   console.log("Like Hee");
// }

// function greeting(callback) {
//   console.log("Double Hee");
//   callback();
// }

// greeting(callMe);

// const callMe = () => {
//   console.log("Hee loo");
// };

// const greeting = (callback) => {
//   console.log("Like Hee");
// };

// greeting(callMe);

// * Anonymous Function

// greeting(function () {
//   console.log(`Tle Fucntion`);
// });

// greeting(() => {
//   console.log(`Tle Arrow`);
// });

// Callback Function with Parameter

// const greeting2 = (callback) => {
//   console.log("Hello Tle");
//   callback("Like Hee");
// };

// greeting2((name) => {
//   console.log(`Im Tle ${name}`);
// });

// const originalArr = [1, 2, 3, 4];

// const loopThroughArry = (arr, cb) => {
//   for (let i = 0; i < arr.length; i++) {
//     cb(arr[i]);
//   }
// };

// loopThroughArry(originalArr, (item) => {
//   console.log(item);
// });

// const mapArray = (arr, cb) => {
//   const result = [];

//   for (let i = 0; i < arr.length; i++) {
//     const newItem = cb(arr[i]);
//     result.push(newItem);
//   }
//   return result;
// };

// const newArray = mapArray(originalArr, (item) => {
//   return item * 2;
// });

// console.log(newArray);

// * Exercise: Create a function called "filterArray" to filter only positive number
// * 1. This function receive 2 parameters, arr and cb.
// * 2. cb function must receive 1 parameter, which is each item from the array
// * 3. cb must return only boolean, if it return true, keep that item, otherwise, don't keep it.
// * 4. filterArray must return a new array that keeps all true items

function filterArray(arr, cb) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const isKeeping = cb(arr[i]);
    if (isKeeping) {
      result.push(arr[i]);
    }
    // * fill here
    // *
  }

  return result;
}

const beforeFilter = [-1, 3, 20, -24];

const afterFilter = filterArray(beforeFilter, (item) => {
  return item > 0; // * fill here
});

console.log(afterFilter);
