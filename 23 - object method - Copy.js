
// Intro to objects

var raju = {
    firstName: 'Raju',
    lastName: 'Moorching',
    born: 1971,
    education: 'SSLC Pass',
    family: ['Aku', 'Nishu', 'Aditu'],
    calcAge: function() {
        this.age = 2018 - this.born;
    }
};

raju.calcAge();
console.log(raju);

var nishu = new Object();
nishu.firstName = 'Nishu';
nishu.lastName = 'Raghavan';
nishu.born = 1977;
nishu.education ='PhD in Psychiatry';
nishu.family = ['Raju', 'Aku', 'Aditu'];
// nishu.calcAge();

console.log(nishu);

