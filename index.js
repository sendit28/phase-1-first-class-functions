function receivesAFunction(callback) {
    callback()
}

function returnsANamedFunction() {
    return function ANamedFunc() {
        console.log("It is late")
    }
}

function returnsAnAnonymousFunction() {
    return () => console.log("I am tired")
}