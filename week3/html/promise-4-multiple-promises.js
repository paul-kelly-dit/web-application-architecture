var loan1 = new Promise( (resolve, reject) => {
    setTimeout( () => resolve( 110 ) , 1000 );
});
var loan2 = new Promise((resolve, reject) => {
    setTimeout( () => resolve( 120 ) , 2000 );
});
var loan3 = new Promise( (resolve, reject) => {
    reject( 'Bankrupt' );
});

Promise.all([ loan1, loan2, loan3 ]).then( value => {
    console.log(value);
}, reason => {
    console.log(reason);
} );~