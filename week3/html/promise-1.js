let promise1 = new Promise( function( resolve, reject ) {
    // call resolve( value ) to resolve a promise
    // call reject( reason ) to reject a promise
} );

// Create a resolved promise
let promise2 = Promise.resolve( 5 );
console.log(promise1)
console.log(promise2)