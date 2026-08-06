// // type conversion and coercion

// console.log("5" + 1); // 6
// console.log("5" - 1); // 4
// console.log("5" * 2); // 10
// console.log("5" / 2); // 2.5
// console.log("5" % 2); // 1

// //  manual Converstion
// console.log(Number("5") + 1); // 6
// console.log(String("TEXT"));
// console.log(Boolean("TEXT")); // true

// false, 0, -0, "", 0n, null, undefined,NaN

// aprat from the above mentioned values anythin else whould result in true
// Pavan [] , " ", true, 1(anynumber) , (anytextapartfrom "")

// if (false) console.log("Truthy");
// else console.log("Falsy");
// if (0) console.log("Truthy");
// else console.log("Falsy");
// if (-0) console.log("Truthy");
// else console.log("Falsy");
// if ("") console.log("Truthy");
// else console.log("Falsy");
// if (null) console.log("Truthy");
// else console.log("Falsy");
// if (undefined) console.log("Truthy");
// else console.log("Falsy");
// if (NaN) console.log("Truthy");
// else console.log("Falsy");

// if ("Pavan") console.log("Truthy");
// else console.log("Falsy");

// if (" ") console.log("Truthy");
// else console.log("Falsy");
// if ([]) console.log("Truthy");
// else console.log("Falsy");
// if (1234) console.log("Truthy");
// else console.log("Falsy");
// if ("ABC") console.log("Truthy");
// else console.log("Falsy");
// if ({}) console.log("Truthy");
// if ("@") console.log("Truthy");
// else console.log("Falsy");

// let message = "Pavan";
// let send = true;
// // if (message != "") send = true;
// // if (send) {
// //   console.log("You Can send the message");
// // }

// let canSendMessage = message && send && true && true && false;
// let canSendMessage = message || send;

// if (canSendMessage) {
//   console.log("You Can send the message");
// }

// // console.log(result);
let itemsincart = 1;
let paymentmethod = "Card";

let canweproceed = itemsincart && paymentmethod;

if (canweproceed) console.log("Thanks for ordering");
else {
  console.log("choose valid payment option");
}
