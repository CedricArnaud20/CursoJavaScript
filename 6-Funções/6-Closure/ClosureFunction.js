function LembrarSoma(x) {
    return function  (y) {
        return x + y;
    }
}

let soma1 = LembrarSoma((1));

let soma2 =  LembrarSoma(5);

console.log(soma1(5));

console.log(soma2(7))