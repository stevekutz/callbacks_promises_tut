function increment(count) {
    count++;

    // runs a cb after given amount of time (in msec)
    setTimeout( () => {
        count += 10;
        console.log(`after 1 sec, Count: ${count}`);
    }, 1000);

    console.log(`runs before setTimeout cb,  Count: ${count}`);
}
// increment(0);
// runs before setTimeout cb Count: 1
// after 1 sec, Count: 11

function increment2(count, cb){
    console.log(`increment called`);
    count++;
    console.log(`Count incremented, Count: ${count}`);

    // runs a cb after given amount of time (in msec)
    // instead of putting in something like cb() here, we use setTimeout
    // to delay calling cb to emphasize async javascript behavior
    setTimeout( () => {
        console.group();
        console.log(`inside setTimeout, before increment, Count: ${count}`);
        count += 10;
        console.log(`inside setTimeout, cb called, Count: ${count}`);
        cb(count);
        console.log(`inside setTimeout, AFTER cb called, Count: ${count}`);
    }, 2000);
    console.log(`RUNS before 2sec setTimeout runs cb!!`);
}
/*
increment2(0, (count) => {
    console.log(`cb says Count: ${count}`);
});
*/
/*
increment2(0, (count) => {
    console.log(' >>>>>>>   Callback HELL started  here <<<<<<<<< ');
    console.log(`cb says Count: ${count}`);
    increment2(0, (count) => {
        console.log(`cb says Count: ${count}`);
        increment2(0, (count) => {
            console.log(`cb says Count: ${count}`);
        });
    });
});
*/
    
