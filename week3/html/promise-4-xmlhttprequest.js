let parse = function( response ) {
    console.log( response );
}
let errorHandler = function() {
    console.log( 'error' );
}
new Promise( function( resolve, reject ) {
    let request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if ( this.status === 200 && this.readyState === 4 ) {
            resolve( this.response );
        }
    }
    request.open('GET',
        'http://jsonplaceholder.typicode.com/users'
    );
    request.send();
} ).then( parse ).catch( errorHandler );
