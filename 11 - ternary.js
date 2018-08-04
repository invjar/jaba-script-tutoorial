

// ternary operator
//  (if condition) ? (then) : (else)

var name = 'Raju';
var age;

age = prompt('Enter Rajus age');

age >= 18 ? console.log('Raju drinks MILK w/ WINE') : console.log('Raju drinks MILK w/ Vinegar');


// Alternatively ...

age = prompt('Enter Rajus age');

var typeOfDrink = age > 18 ? 'Lots of Milk' : 'Lost of Beer'

console.log('My boy drinks ' + typeOfDrink + ' coz he is ' + age + 'years old..');
