"use strict";

function wish(msg) {
  console.log(msg);
}
// console.log(msg);
// wish("monday");
// wish("Tue");
// wish("Fri");
// wish("Sun");

function wish1(msg = 5) {
  console.log(msg);
}

// wish1();
// wish1("Hello");

let msg = () => console.log("Teams");
// let msg = (uMsg) => console.log("Teams" + uMsg);

// msg();
// msg("Application");
document.querySelector(".btn").addEventListener("click", () => {
  console.log("clicked");
});

deleteMessage();
function deleteMessage() {
  console.log("Deleting the messages");
}
