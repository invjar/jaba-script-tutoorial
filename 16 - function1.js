
// trying out function
// remember it is "console.log"

var age, name;

drivingCheck('Aditi', 9);
drivingCheck('Nisha', 25);
drivingCheck('Aku', 13);

function drivingCheck(name, age) {
    var startDriving;
  
    if(age >= 16) {
        console.log(name + ' has started driving.');
    }
    else {
        startDriving = 16 - age;
        console.log(name + ' will start driving in ' + startDriving + ' years.');
    }
}



