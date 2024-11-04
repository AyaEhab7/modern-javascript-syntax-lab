//Review 1: Array.prototype.map()
const array1 = ['vanilla', 'chocolate', 'strawberry'];

const array2 = array1.map((currentElement) => {
  return currentElement + ' ice cream';
});

console.log(array2);

console.log('------------------------------------------------------------');

//Review 2: Array destructuring 
const petsArray = ['Rover', 'Snuffles', 'Toto', 'Spot'];

const [firstPet, secondPet] = petsArray;

console.log(firstPet); // 'Rover'
console.log(secondPet); // 'Snuffles'

// Equivalent in traditional bracket notation:
console.log(petsArray[0]); // 'Rover'
console.log(petsArray[1]); // 'Snuffles'

console.log('------------------------------------------------------------');
//Review 3 : Object destructuring
const person = {
    name: 'Alex',
    role: 'Software Engineer',
  };
  
  // Object destructuring:
  const { name, role } = person;
  
  console.log(name); // 'Alex'
  console.log(role); // 'Software Engineer'
  
  // Equivalent in traditional dot notation:
  console.log(person.name); // 'Alex'
  console.log(person.role); // 'Software Engineer'

  console.log('------------------------------------------------------------');
//Review 4: Applying the spread operator on arrays
const originalArray = [1, 2, 3];
const duplicateArray = [...originalArray];

const referenceArray = originalArray; // referenceArray is now a reference to originalArray

console.log(duplicateArray); // [1, 2, 3]
referenceArray.push(4); // Modifying referenceArray also modifies originalArray
console.log(originalArray); // [1, 2, 3, 4]

//Review 4: 
const fruits = ['apple', 'orange', 'banana'];
const vegetables = ['broccoli', 'carrot', 'spinach'];

const fruitsAndVegetables = [...fruits, ...vegetables];

console.log(fruitsAndVegetables); // ['apple', 'orange', 'banana', 'broccoli', 'carrot', 'spinach']

console.log('------------------------------------------------------------');

//Review 5: Applying the spread operator on objects

const originalObject = {
    foo: 'Hello',
    bar: 100,
  };
  
  // Copy the properties of originalObject:
  const clonedObject = { ...originalObject };
  
  // Update the properties of clonedObject:
  clonedObject.foo = 'Goodbye';
  clonedObject.bar = 0;
  
  console.log('Original: ', originalObject); // { foo: 'Hello', bar: 100 }
  console.log('Clone: ', clonedObject); // { foo: 'Goodbye', bar: 0 }

  console.log('------------------------------------------------------------');

  //Review 6: Dynamic keys in objects
  const fruitInventory = {
    apples: 2,
    oranges: 4,
  };
  
  const selectedFruit = 'apples'; // Variable as a dynamic key
  const selectedFruitCount = fruitInventory[selectedFruit];
  
  console.log(selectedFruitCount); // 2


  const fruitType = 'bananas'; // Variable as a dynamic key

  const fruitInventoryy = {
     [fruitType]: 5,
  };

console.log(fruitInventoryy); // { bananas: 5 }

console.log('------------------------------------------------------------');

//Review 7: import and export
export const myNumber = 123;
export const myString = 'Hello';

console.log('------------------------------------------------------------');
//Review 8: Default parameters

function addThreeNumbers(numA, numB, numC) {
    return numA + numB + numC;
  }

function addThreeNumbers1(numA, numB = 2, numC = 1) {
    return numA + numB + numC;
} 

function addThreeNumbers2(numA = 1, numB = 2, numC = 1) {
    return numA + numB + numC;
}
  
console.log(addThreeNumbers(2)); // return NaN
console.log(addThreeNumbers1(2)); // return 5
console.log(addThreeNumbers2(2)); // return 5

console.log('------------------------------------------------------------');

//Review 9: The ternary operator

const age = 22;

/*
let access;

if (age > 21) {
  access = 'Yes';
} else {
  access = 'No';
}
*/
let access = age > 21 ? 'Yes' : 'No';
console.log(access); // 'Yes'

console.log('------------------------------------------------------------');

//Review 10: Boolean gates

//The && operator
const result = false && 'foo';
console.log(result); // Output: false

const resultt = 'hello' && '';
console.log(resultt); // Output: ''

const resulttt = 'foo' && 'bar';
console.log(resulttt); // Output: 'bar'

//The || operator
const result1 = '' || 'foo';
console.log(result1); // Output: 'foo'

const result2 = 2 || 0;
console.log(result2); // Output: 2

const result3 = '' || 0;
console.log(result3); // Output: 0

console.log('------------------------------------------------------------');

//Review 11: Optional chaining
const adventurer = {
    name: 'Alice',
  };

//console.log(adventurer.dog.name); // TypeError: Cannot read properties of undefined (reading 'name')

  let dog = adventurer.dog?.name;
  console.log(dog); // undefined
  
