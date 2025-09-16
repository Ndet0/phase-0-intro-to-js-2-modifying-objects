// Modifying Objects Lesson Code

// Add an Object Property Using Dot or Bracket Notation
const circle = {}; // Create `circle` and set it to an empty Object

console.log(circle);
//=> {}

circle.radius = 5; // Create the key inside `circle` and set its value to 5

console.log(circle);
//=> { radius: 5 }

circle.radius = 5;

circle["diameter"] = 10;

circle.circumference = circle.diameter * Math.PI;
//=> 31.41592653589793

circle["area"] = Math.PI * circle.radius ** 2;
//=> 78.53981633974483

console.log(circle);
//=> { radius: 5, diameter: 10, circumference: 31.41592653589793, area: 78.53981633974483 }

// Modify a Property Using Dot or Bracket Notation
const mondayMenu = {
  cheesePlate: {
    soft: "Chèvre",
    semiSoft: "Gruyère",
    hard: "Manchego",
  },
  fries: "Curly",
  salad: "Cobb",
};

mondayMenu.fries = "Sweet potato";

console.log(mondayMenu);
//=> { cheesePlate: { soft: "Chèvre", semiSoft: "Gruyère", hard: "Manchego" }, fries: "Sweet potato", salad: "Cobb" }

function destructivelyUpdateObject(obj, key, value) {
  obj[key] = value; //Why are we using bracket notation here?

  return obj;
}

const tuesdayMenu = destructivelyUpdateObject(mondayMenu, "salad", "Caesar");

console.log(tuesdayMenu);
//=> { cheesePlate: { soft: "Chèvre", semiSoft: "Gruyère", hard: "Manchego" }, fries: "Sweet potato", salad: "Caesar" }

console.log(tuesdayMenu.salad);
//=> "Caesar"

console.log(mondayMenu.salad);
//=> "Caesar"

// Update an Object Nondestructively Using the Spread Operator
function nondestructivelyUpdateObject(obj, key, value) {
  return {
    ...obj,
    [key]: value,
  };
}

const sundayMenu = nondestructivelyUpdateObject(
  tuesdayMenu,
  "fries",
  "Shoestring"
);

console.log(tuesdayMenu.fries);
//=> "Sweet potato"

console.log(sundayMenu.fries);
//=> "Shoestring"

// Remove a Property from an Object
const wednesdayMenu = {
  cheesePlate: {
    soft: "Brie",
    semiSoft: "Fontina",
    hard: "Provolone",
  },
  fries: "Sweet potato",
  salad: "Southwestern",
};

delete wednesdayMenu.salad;
//=> true

console.log(wednesdayMenu);
//=> { cheesePlate: { soft: "Brie", semiSoft: "Fontina", hard: "Provolone" }, fries: "Sweet potato" }

// Identify the Relationship Between Arrays and Objects
console.log(typeof []);
//=> "object"

const myArray = [];

myArray.summary = "Empty array!";

console.log(myArray);
//=> [summary: "Empty array!"]

myArray["summary"] = "This array is totally empty.";

console.log(myArray);
//=> [summary: "This array is totally empty."]

console.log(myArray.summary);
//=> "This array is totally empty."

myArray.push(2, 3, 5, 7);
//=> 4

console.log(myArray);
//=> [2, 3, 5, 7, summary: "This array is totally empty."]

console.log(myArray.length);
//=> 4

console.log(myArray[0]);
//=> 2

console.log(myArray[myArray.length - 1]);
//=> 7

const myArray2 = [];

myArray2[0] = "Will this be an `Object` property or an `Array` element?";
//=> "Will this be an `Object` property or an `Array` element?"

// Moment of truth...
console.log(myArray2.length);
//=> 1

console.log(myArray2);
//=> ["Will this be an `Object` property or an `Array` element?"]

myArray2["0"] = "What about this one?";
//=> "What about this one?"

console.log(myArray2.length);
//=> 1

console.log(myArray2);
//=> ["What about this one?"]

const myArray3 = [2, 3, 5, 7];

myArray3["1"] = "Hi";
//=> "Hi"

console.log(myArray3);
//=> [2, "Hi", 5, 7]

myArray3["01"] = "Ho";
//=> "Ho"

console.log(myArray3);
//=> [2, "Hi", 5, 7, 01: "Ho"]

console.log(myArray3[01]);
//=> "Hi"

console.log(myArray3["01"]);
//=> "Ho"

console.log(myArray3.length);
//=> 4

console.log(Object.keys(myArray3));
//=> ["0", "1", "2", "3", "01"]
