
// for loop

var count = 0;
while(count <=10) {
    console.log('WHILE Value is ' + count);
    count++;
}


// continue & break functions

count = 0;
while(count <=100) {

    if (count == 5 || count == 10) {
        count++;
        continue;
    }

    if (count == 12) {
        break;
    }
    console.log('Value is ' + count);
    count++;
}
