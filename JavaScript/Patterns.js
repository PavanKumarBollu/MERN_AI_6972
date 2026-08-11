//1

// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row += "*";
//   }
//   console.log(row);
// }
// 4

const size = 5;

// for (let row = 0; row < size; row++) {
//   let rowStr = "";

//   for (let col = 0; col < size; col++) {
//     // Print stars for the borders (first/last row, first/last column)
//     if (row === 0 || row === size - 1 || col === 0 || col === size - 1) {
//       rowStr += "*";
//     } else {
//       // Print spaces for the empty area in the middle
//       rowStr += " ";
//     }
//   }

//   console.log(rowStr);
// }

// //5
// const rows = 5;

// for (let i = 0; i < rows; i++) {
//   let rowStr = "";

//   // 1. Print leading spaces
//   for (let j = 0; j < i; j++) {
//     rowStr += " ";
//   }

//   // 2. Print stars (odd numbers: 9, 7, 5, 3, 1)
//   for (let k = 0; k < 2 * (rows - i) - 1; k++) {
//     rowStr += "*";
//   }

//   console.log(rowStr);
// }
// // 6

const n = 5; // Controls the size (number of rows in the top half)

// 1. Top Half (Upright Triangle)
for (let i = 1; i <= n; i++) {
  let rowStr = "";

  // Print leading spaces
  for (let j = 1; j <= n - i; j++) {
    rowStr += " ";
  }

  // Print stars
  for (let k = 1; k <= 2 * i - 1; k++) {
    rowStr += "*";
  }

  console.log(rowStr);
}

//       // 2. Bottom Half (Upside-Down Triangle)
for (let i = n - 1; i >= 1; i--) {
  let rowStr = "";

  // Print leading spaces
  for (let j = 1; j <= n - i; j++) {
    rowStr += " ";
  }

  // Print stars
  for (let k = 1; k <= 2 * i - 1; k++) {
    rowStr += "*";
  }

  console.log(rowStr);
}
