let data = ["Pavan", 24, 1234512345, 5.8, "bollu.kumar@anudip.org"];
console.log(data);
// console.log(typeof data);

let details = {
  name: "Pavan",
  age: 24,
  phone: 1234512345,
  height: 5.8,
  email: "bollu.kumar@anudip.org",
};

console.log(details.address); // undefined
console.log(details);
console.log(details.name);
console.log(details["name"]);

// console.log(details.pavan);
// console.log(details["Pavan"]);

details.name = "Kumar";
console.log(details);

details["name"] = "Bollu";

let key = "name";
console.log(details[key]);
console.log(details.key); // undefined

details.friends = ["Ravi", "Kumar", "Raju"];
console.log(details);

details["address"] = {
  street: "123 Main St",
  city: "HYD",
};
console.log(details);
console.log(details.address); // { street: '123 Main St', city: 'HYD' }
console.log(details["address"].street); // 123 Main St
console.log(details.address.street); // 123 Main St

console.log(typeof details); // object

// details.pop(); // TypeError: details.pop is not a function

// details.address = "";
// console.log(details); // ""

// details.address = null;
// console.log(details); // null

// details.remove("address"); // TypeError: details.remove is not a function

delete details.address;
console.log(details);

let keyTobeDeleted = "name";
delete details[keyTobeDeleted]; // delete details["name"];
console.log(details);

let msgStack = {
  sender: "Pavan",
  receiver: "Kumar",
  message() {
    return "Hello Kumar, How are you?";
  },
};
console.log(msgStack.message());

let msgStack1 = {
  sender: "Pavan",
  receiver: "Yadav",
  message() {
    return `Hello ${this.receiver}, How are you?`;
  },
};
console.log(msgStack1.message());
let msgStack2 = {
  sender: "Pavan",
  receiver: "Yadav",
  message(name) {
    return `Hello ${name}, How are you?`;
  },
};
console.log(msgStack2.message("Padma"));
let msgStack3 = {
  sender: "Pavan",
  receiver: "Yadav",
  message: (name) => {
    return `Hello ${name}, How are you?`;
  },
};
console.log(msgStack3.message("Krishna"));
