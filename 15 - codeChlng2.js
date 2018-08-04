
// Switch ...
// more easier than if then else ...
// put switch(true) to force code to enter .. however, enter the condition

var team1Avg;
var team2Avg;
var team3Avg;

team1Avg = (89+120+103)/3;
team2Avg = (116+94+123)/3;
team3Avg = (97+134+105)/3;

// team1Avg = prompt('Enter Team 1 score');
// team2Avg = prompt('Enter Team 2 score');
// team3Avg = prompt('Enter Team 3 score');

switch(true){
    case (team1Avg > team2Avg && team1Avg > team3Avg):
    console.log('Team 1 is the best = ' + team1Avg + ' ' + team2Avg + ' '+ team3Avg );
    break;

    case (team2Avg > team1Avg && team2Avg > team3Avg):
    console.log('Team 2 is the best = ' + team2Avg + ' ' + team1Avg + ' '+ team3Avg );
    break;

    case (team3Avg > team1Avg && team3Avg > team2Avg):
    console.log('Team 3 is the best = ' + team3Avg + ' ' + team1Avg + ' '+ team2Avg );
    break;

    case (team1Avg === team2Avg && team1Avg > team3Avg):
    console.log('Team 1 & 2 are the best = ' + team1Avg + ' ' + team2Avg + ' '+ team3Avg );
    break;
    
    case (team1Avg === team3Avg && team1Avg > team2Avg):
    console.log('Team 1 & 3 are the best = ' + team1Avg + ' ' + team2Avg + ' '+ team3Avg );
    break;

    case (team2Avg === team3Avg && team2Avg > team1Avg):
    console.log('Team 2 & 3 are the best = ' + team2Avg + ' ' + team3Avg + ' '+ team1Avg );
    break;

    default:
    console.log('Team 1, 2 & 3 are the same = ' + team2Avg + ' ' + team3Avg + ' '+ team1Avg );
    break;

}
