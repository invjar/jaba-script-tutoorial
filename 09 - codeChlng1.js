

// Way to alert, prompt messages

var personName;
var personWeight;
var personHeight;

personName = prompt('Person #1 ... What is you name');
personWeight = prompt('Person #1 ... What is you weight in Kilos');
personHeight = prompt('Person #1 ... What is you height in Cms');

var bmi1, bmi1Name;
bmi1 = personWeight / (personHeight ^ 2);
bmi1Name = personName;

personName = prompt('Person #2 ... What is you name');
personWeight = prompt('Person #2 ... What is you weight in Kilos');
personHeight = prompt('Person #2 ... What is you height in Cms');

var bmi2, bmi2Name;
bmi2 = personWeight / (personHeight ^ 2);
bmi2Name = personName;


if (bmi1 > bmi2) {
    console.log(bmi1Name + ' has higher BMI !! ' + bmi1 + ' vs ' + bmi2);
}
else if (bmi2 > bmi1) {
    console.log(bmi2Name + ' is heavier !! ' + bmi2 + ' vs ' + bmi1);
}
else {
    console.log(bmi2Name + ' & ' + bmi1Name + ' are same!! ' + bmi2 + ' vs ' + bmi1);
}






