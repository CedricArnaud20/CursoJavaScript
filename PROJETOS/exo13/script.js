Number = 17
let divisor= 0;

for(let i=0; i<= Number; i++) {
   if(Number % i == 0) {
      divisor++;
   }
};

if (divisor == 2) {
   console.log(`O numero ${Number} é primo`)
}else{
   console.log(`O numero ${Number} não é primo`)
}