
// trying out arrays
// remember it is "console.log"

var family;

family = ['Aditu', 'Moorching', '2005', 'Kid', 'Student'];
console.log(family);

// Add to end
family.push('Sweet');
console.log(family);

// Add to beg
family.unshift('Missy');
console.log(family);

// Remove last
family.pop();
console.log(family);

// Remove first
family.shift();
console.log(family);

// Find location of ... returns -1 if it does not exist
console.log(family.indexOf('2005'));

// Check if shr is a hacker .. which she is not per above data
family.indexOf('hacker') === -1 ? console.log('Aditu is a not a hacker') : console.log('Hacker of course');


