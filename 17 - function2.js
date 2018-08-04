
// trying out function
// remember it is "console.log"

// function as a statement or expression ...
// here it is in the expression form

var age, name;



var drivingCheck = function(name, age) {
    var startDriving;
  
    if(age >= 16) {
        // return (name + ' has started driving.');
        return 'Be careful';
    }
    else {
        startDriving = 16 - age;
        // return (name + ' will start driving in ' + startDriving + ' years.');
        return 'No worries';
    }
}

console.log(drivingCheck('Aditi', 9));
console.log(drivingCheck('Aku', 13));

console.log(drivingCheck('Nisha', 25));


