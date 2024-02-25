const consoles = {
    controles: 2
}

console.log(Object.getPrototypeOf(consoles));
console.log(Object.getPrototypeOf(consoles) === Object.prototype);

console.log(consoles.hasOwnProperty('controles'))