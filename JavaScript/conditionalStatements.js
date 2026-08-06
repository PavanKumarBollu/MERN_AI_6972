// let userType = "student";
// let userType = "trainer";

// Syntax
// if(Condition)
// {
//     lines of code to be executed when the condition was true
// }

// if(Condition)
//     line of code to be executed when the condition was true

// if (userType == "student") {
//   console.log("You Have only student access");
// }
// if (userType == "trainer") {
//   console.log("you have only the trainer access");
// }
// if (userType == "student") console.log("You Have only student access");

// if (userType == "trainer") console.log("you have only the trainer access");

// let userType = "admin";
// let userType = "normal";

// if (userType == "normal") {
//   console.log("you can just check the people profile");
//   console.log("you can't add a new member into the group");
// }
// if (userType == "admin") {
//   console.log("you can  check the people profile");
//   console.log("you can add a new member into the group");
//   console.log("you can add a remove anyone in the group");
// }

let userType = "admin";
if (userType == "admin") {
  console.log("you can  check the people profile");
  console.log("you can add a new member into the group");
  console.log("you can add a remove anyone in the group");
} else {
  console.log("you can just check the people profile");
  console.log("you can't add a new member into the group");
}
