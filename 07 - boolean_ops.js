// AND operator
var blr, cancun;


blr = prompt('What is the temp in BLR?');
cancun = prompt('What is the temp in CANCUN?');

if (blr != cancun) {
    console.log('Two cities have diffent temperatures');
}

if (blr > 40 && cancun > 40) {
    console.log('Both cities are over 40 deg C and uninhabitable!!');
}
else if (blr > 40 || cancun > 40) {
    console.log('One of the cities is uninhabitable');
}
else {
    console.log('Two lovely cities to live in !!');
}


// OR operator


// NOT operator
