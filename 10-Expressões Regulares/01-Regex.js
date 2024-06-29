const reg1 = new RegExp('bola');

console.log(reg1.test("Tem bola°"));


const reg2 = /bola/;

console.log(reg2.test("tem BASQUETE"))


const reg3 = /[12365]/


console.log(reg3.test("tem 50"))


const reg4 = /[0-9]/


console.log(reg4.test("tem "))
