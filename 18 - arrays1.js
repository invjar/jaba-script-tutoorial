
// trying out function
// remember it is "console.log"

// function as a statement or expression ...
// here it is in the expression form

var age, names;


age = [10, 20, 30];
names = ['Aditu', 'Nishu', 'Aku'];
names[names.length] = 'Raju';
age[age.length] = 40;

console.log(age);
console.log(names);

console.log('Print th elength of each awway using length feature');
console.log('Number of elements in names is = ' + names.length);
console.log('Number of elements in age is = ' + age.length);

console.log('Age of ' + names[0] + ' is ' + age[0]);
console.log('Age of ' + names[1] + ' is ' + age[1]);
console.log('Age of ' + names[2] + ' is ' + age[2]);
console.log('Age of ' + names[3] + ' is ' + age[3]);


// Same as above .. but can use "new array()" syntax

var ages = new Array(10, 20, 30);
namess = new Array('Aditu', 'Nishu', 'Aku');

console.log(ages);
console.log(namess);
console.log('Print th elength of each awway using length feature');
console.log('Number of elements in names is = ' + namess.length);
console.log('Number of elements in age is = ' + ages.length);

console.log('Age of ' + namess[0] + ' is ' + ages[0]);
console.log('Age of ' + namess[1] + ' is ' + ages[1]);
console.log('Age of ' + namess[2] + ' is ' + ages[2]);
