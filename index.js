function callback () {
    return 'Hello'
}
function receivesAFunction (callback) {
   callback();
}

function returnsANamedFunction () {
   return receivesAFunction;
}

function returnsAnAnonymousFunction() {
   return function () {console.log("Test")} 
}