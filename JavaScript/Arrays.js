let name = "Pavan";
let name2 = "Kumar";

let names = ["Pavan", "Kumar", "Ravi", "Suresh", "Ramesh"];
//            0         1       2        3         4
console.log(names);
console.log(names[2]); //Ravi

names[2] = "Ravi Kumar";
console.log(names);
console.log(names[2]); //Ravi Kumar

names.pop(); // removes last element
console.log(names);

names.push("Dinesh"); // adds new element at the end
console.log(names);

names.shift(); // removes first element
console.log(names);

names.slice(1, 3); // returns a new array with elements from index 1 to 2 (3 is not included)
console.log(names.slice(1, 3));

names.splice(1, 2); // removes 2 elements starting from index 1
console.log(names);
