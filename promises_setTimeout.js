function increment(count) {
    return new Promise( (resolve, reject) => {
        if(count < 0 || typeof(count) !== 'number') {
            return reject('reject passes this msg to .catch')
        }     
        count += 1;

        // commenting out console.log
        setTimeout(() => {
            console.group();
            console.log(`inside setTimeout, before increment, Count: ${count}`);
            count += 10;
            console.log(`inside setTimeout, after +10 Increment, Count: ${count}`);
            resolve(count); // not cb();
            console.log(`inside setTimeout, AFTER resolve called, Count: ${count}`);
        }, 2000);    
         console.log(`RUNS before 2 sec setTimeout runs RESOLVE`);
    })
}

//increment(0);
/*
const result = increment(0);
console.log(result);
*/
/*
increment('cheese')
    // resolve promise gives return value to .then
    .then((count) => {
        console.group();
        console.log(`then receives count as ${count}`);
        return count;    // MUST return count to pass something into next .then
    })
    .then((count) => {
        return increment(count);
    })
    .then((count) => {
        console.group();
        count *= 100;
        console.log(`next then receives count & mult it by 100 to give ${count}`);
    })
    .catch((err) => { // reject promise 
        console.log(`Error:`, err);
    })
    */

const increment2 = (count) => {
    return new Promise( (resolve, reject) => {
        if(count < 0 || typeof(count) !== 'number') {
            return reject('reject passes this msg to .catch')
        }     
        count += 1;

        // commenting out console.log
        setTimeout(() => {
            console.group();
            console.log(`inside setTimeout, before increment, Count: ${count}`);
            count += 10;
            console.log(`inside setTimeout, after +10 Increment, Count: ${count}`);
            resolve(count); // not cb();
            console.log(`inside setTimeout, AFTER resolve called, Count: ${count}`);
        }, 2000);    
         console.log(`RUNS before 2 sec setTimeout runs RESOLVE`);
    })
}
    const multBy100 = (val) => {
        console.log(`inside multBy100 `);
        return val * 100;
    }

    const resetTo10 = (val) => {
        console.log(`reset to 10 `);
        return 10;
    }
    
    /*
        increment2(1)  // another way to chain !!!!
            .then(increment2)
            .then(increment2)
            .then(increment2)
            .then(increment2)
    */        

    increment2(1)  // another way to chain !!!!
        .then(increment2)
        .then(multBy100)
        .then(increment2)
        .then(resetTo10)
        .then(increment2)