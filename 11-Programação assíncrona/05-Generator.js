function* criadorId(params) {
    let id = 0;
    while (true) {
        yield id++;
    }
}

let crairId = criadorId();

console.log(crairId.next().value);
console.log(crairId.next().value);
