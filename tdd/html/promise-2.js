let promisePaymentAmount = Promise.resolve( 50 );

promisePaymentAmount
    .then( amount => {
        amount *= 1.25;
        console.log('amount: '+amount)
        console.log('amount * 1.25: ', amount );
        return amount;
    } ).then( amount => {
    console.log('amount: ', amount );
    return amount;
} );