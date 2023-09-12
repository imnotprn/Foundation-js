// function normallLoop() {
//   for (let i = 1; i <= 3; i++) {
//     console.log(i);
//   }
// }

// normallLoop();

// function reverseLoop() {
//   for (i = 3; i >= 0; i--) {
//     console.log(i);
//   }
// }

// reverseLoop();

// function loopThroughArray() {
//   const foodFav = ["A", "B", "C", "D"];
//   for (i = 0; i < foodFav.length; i++) {
//     console.log(foodFav[i]);
//   }
// }

// loopThroughArray();

function loopThroughArray() {
  const foodFav = ["A", "B", "C", "D"];
  for (i = foodFav.length - 1; i >= 0; i--) {
    console.log(foodFav[i]);
  }
  // continue

  for (i = 0; i < foodFav.length; i++) {
    if (foodFav[0] === "B") {
      continue;
    }
    console.log(foodFav[i]);
  }
  //  break
  for (i = 0; i < foodFav.length; i++) {
    if (foodFav[0] === "B") {
      break;
    }
    console.log(foodFav[i]);
  }
}

// loopThroughArray();

// While Loop
function whileLoop() {
  // let i = 0
  // while (i < 5 ) {
  //     console.log(i)
  //     i++
  // }

  let count = 1;
  while (count < 100) {
    count = count + 2;
  }
  console.log(count);
}

// whileLoop();

function nestedloop() {
  for (let i = 0; i < 3; i++) {
    console.log("i", i);
  }
  for (let x = 0; x < 3; x++) {
    console.log("x", x);
  }
}

// nestedloop();

//  * Exercise:
// * Write a code that will loop from 0 to 15. For each loop, it will check if the current index number is odd or even, and display a message to the console.

function loop() {
  for (i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
      console.log(i, "is even");
    } else {
      console.log(i, "is odd");
    }
  }
}

loop();

// * Example Output:
// * > 0 is even
// * > 1 is odd
// * > 2 is even

// * > 15 is odd
