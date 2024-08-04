const dom = /[?www.]\w+\.com.br|.com/;


console.log(dom.test("www.accurate.com.br"))
console.log(dom.test("accurater.cr"))
console.log(dom.test("accurater.com.br"))


// Validar email

const email =/\w+@\w+\.\w+/

console.log(email.test("cedric@gmail.com"))


