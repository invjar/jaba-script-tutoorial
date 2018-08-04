
// Switch ...
// more easier than if then else ...
// dont forget to put break;
// use default as catch all

var job, money;
job = prompt('Enter Rajus job');

switch(job){
    case 'coder':
        money = 50;
        console.log('Raju is a ' + job + ' and makes $' + money + ' per hour');
        break;

        case 'hacker':
        money = 5000;
        console.log('Raju is a ' + job + ' and makes $' + money + ' per hour');
        break;

        case 'cook':
        money = 200;
        console.log('Raju is a ' + job + ' and makes $' + money + ' per hour');
        break;

        default:
        money = 0;
        console.log('Raju is a DUD and makes $' + money + ' per hour');

}
