
//Exercise 1 : Applying Array.prototype.map()
const nums = [13, 87, 2, 89, 12, 4, 90, 63];

// Create a new array where each value is multiplied by 2 and log the new array.
const multipliedNums = nums.map((num) =>{
    return num * 2;
});
console.log(multipliedNums); 

console.log('------------------------------------------------------------');
//Exercise 2: Array destructuring

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.
const [firstTopping, secondTopping] = pizzaToppings;
console.log(firstTopping); 
console.log(secondTopping); 


console.log('------------------------------------------------------------');
 //Exercise 3:Destructuring objects
 const car = {
    make: 'Audi',
    model: 'q5',
  };

 // Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.  
  const { make, model } = car;
  console.log(make); 
  console.log(model); 

console.log('------------------------------------------------------------');
//Exercise 4: Applying the spread operator on arrays

//const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];
// Your code here
const controversialPizzaToppings = [...pizzaToppings];
console.log(controversialPizzaToppings); 

console.log('------------------------------------------------------------');
//Exercise 5:Applying the spread operator on objects
/*
const car = {
    make: 'Audi',
    model: 'q5',
  };
*/  
  const myCar = { ...car, model: 'q7' };
  console.log('Original car:', car); 
  console.log('My car:', myCar); 

  console.log('------------------------------------------------------------');

  //Exercise 6: Dynamic keys in objects

  const propertyName = 'username'; 

  const userProfile = {
    [propertyName]: 'AyaEhab',
  };
  console.log(userProfile); 

  console.log('------------------------------------------------------------');
  
  //Exercise 8: Default parameters

  function describe(noun = 'cat', adjective = 'white') {
    return`The ${noun} is ${adjective}.`;
  }
  
  console.log(describe()); 

  console.log('------------------------------------------------------------');

//Exercise 9: Ternary operator
// Convert the following `if...else` statement in to a ternary:

let pizza = 'tasty';
/*
if (pizza === 'tasty') {
  console.log('yum');
} else {
  console.log('yuck');
}
*/
let check = pizza === 'tasty' ? 'yum' : 'yuck';
console.log(check);

console.log('------------------------------------------------------------');

//Exercise 10: Boolean gates
// 1. SET LANGUAGE
const localLangConfig = null;  // Change to 'es', 'fr', etc., or keep it null
const LANG = localLangConfig || 'en';
console.log('Language setting:', LANG);

// 2. SET WEBSITE THEME
const userSavedTheme = null; // Change to 'dark', 'contrast', etc., or keep it null
const USER_THEME = userSavedTheme || 'light';
console.log('User theme setting:', USER_THEME);

console.log('------------------------------------------------------------');

//Exercise 11: Optional chaining
// Now check for `cat.age` on `adventurer`. See how it errors out? Use optional chaining in a console.log that it returns undefined instead.

const adventurer = {
  name: 'Alice',
};

let cat = adventurer.cat?.age; 
console.log(cat); 

