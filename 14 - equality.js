
// == non-strict equality
// === strict equality


var num, name;

num = 40;
name = '40';

// strict equality check

num === name ? console.log('Hmmm !!') : console.log('Number 40 & string 40 name not same per === check');
num == name ? console.log('Number 40 & string 40 name same per == check') : console.log('Hmmm !!');
