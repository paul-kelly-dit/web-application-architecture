var p = Promise.resolve( 5 );

p.then( ( value ) => console.log( 'Value:', value ) )
    .then( () => { throw new Error('Error in second handler' ) } )
    .catch( ( error ) => console.log(error.toString() ) );