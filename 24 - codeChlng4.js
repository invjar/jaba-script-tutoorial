
// Intro to objects & methods .. 

// THIS PROGRAM IS NOT FULLY WORKING ... 

var raju = {
    firstName: 'Raju',
    lastName: 'Moorching',
    born: 1971,
    weight: 100,
    height: 1.86,
    bmi: 0,
    calcBMI: function() {
        var bbmi = this.weight/(this.height^2);
        this.bmi = bbmi;
        return bbmi;
    }
};

raju.calcBMI();
console.log(raju);

var nishu = new Object();
nishu.firstName = 'Nishu';
nishu.lastName = 'Raghavan';
nishu.born = 1977;
nishu.weight = 55;
nishu.height = 150;
nishu.bmi = 100000000;
nishu.calcBMI();
// nishu.calcAge();

console.log(nishu);

