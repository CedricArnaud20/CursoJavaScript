const pontoRegex = /./;

console.log(pontoRegex.test("asd"))
console.log(pontoRegex.test(" "))
console.log(pontoRegex.test("123"))
console.log(pontoRegex.test("123sad"))

const dRegex2 = /\d/;

console.log(dRegex2.test("asd"))
console.log(dRegex2.test(" "))
console.log(dRegex2.test("123"))
console.log(dRegex2.test("123sad"))

const pontoRegex12 = /\D/;

console.log(pontoRegex12.test("asd"))
console.log(pontoRegex12.test(" "))
console.log(pontoRegex12.test("123"))
console.log(pontoRegex12.test("123sad"))

const SpontoRegex12 = /\s/;

console.log(SpontoRegex12.test("asd"))
console.log(SpontoRegex12.test(" "))
console.log(SpontoRegex12.test("123"))
console.log(SpontoRegex12.test("123sad"))


const wpontoRegex12 = /\W/;

console.log(wpontoRegex12.test("asd"))
console.log(wpontoRegex12.test("****"))
console.log(wpontoRegex12.test("123"))
console.log(wpontoRegex12.test("123sad"))


const WpontoRegex12 = /\w/;

console.log(WpontoRegex12.test("asd"))
console.log(WpontoRegex12.test("ASD"))
console.log(WpontoRegex12.test("123"))
console.log(WpontoRegex12.test("123sad"))





