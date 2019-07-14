function add(a, b, cb) {
    console.log(`add is called`);
    console.log(`the sum of ${a} and ${b}  = ${a + b}`);
    console.log(`NOW cb called`);
    cb();
}

const after = () => {
    console.log('cb MUST log AFTER add function\n');
}

//add(2,4,after);

const add2 = (a,b, cb) => {
    console.log(`add2 is called`);
    console.log(`the sum of ${a} and ${b}  = ${a + b}`);
    console.log(`NOW cb called\n`)
    cb();
}

// add2(2, 4, after);

function add3(a, b, cb){
    console.log('add3 is called');
    console.log(`the sum of ${a} + ${b} is ${a + b}`);
    console.log(`now cb is called`);
    console.group();   // should indent outputs
    cb();
    console.log(`Must be LAST, next is a stack trace`);
    console.trace(); // 
};
/*
add3(4, 5, function(){
    console.log(`CALLBACK is now CALLED\n`);
} );

add3(10, 20, () => {
    console.log(`\tArrow callback CALLED!!\n`);
})
*/
const add4 = (a,b,cb) => {
    console.log(`add4 is called`);
    console.log(`the sum of ${a} + ${b} is ${a + b}`);
    console.log(`now cb is called`);
    console.group(); // should indent outputs
    cb();
    console.log(`Must be last, next is stack trace`);
 //   console.trace();
};
/*
add4(4, 5, function(){
    console.log(`CALLBACK is now CALLED\n`);
} );

add4(10, 20, () => {
    console.log(`\tArrow callback CALLED!!\n`);
})
*/


const multBy10 = (val) => {
    return val * 10;
}

const multBy100 = (val) => {
    return val * 100;
}

function add5(a, b, cb, cb2){
    let total = a + b;
    console.log('before mutlby10 cb called, total= ', total);
    total = cb(a + b);
    console.log(`after multby10 cb called total=  ${total} \n`);
    if(cb2) {
            total = cb2(total);
    console.log(`after multby100 cb2 called total=  ${total} \n`);
    }
};
/*
add5(2,3,multBy10);
*/

add5(2,3, multBy10, multBy100);

