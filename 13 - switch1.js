
// Switch ...
// more easier than if then else ...
// put switch(true) to force code to enter .. however, enter the condition

var job, money;
job = prompt('Enter Rajus job');

switch(true){
    case job === 'coder':
    money = 50;
    console.log('Raju is a ' + job + ' and makes $' + money + ' per hour');
    break;

    case job === 'hacker':
    money = 5000;
    console.log('Raju is a ' + job + ' and makes $' + money + ' per hour');
    break;

    case job === 'cook':
    money = 200;
    console.log('Raju is a ' + job + ' and makes $' + money + ' per hour');
    break;

    default:
    money = 0;
    console.log('Raju is a DUD and makes $' + money + ' per hour');

}
