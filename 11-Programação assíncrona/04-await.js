function SomarDelay(a,b) {
   return new Promise(resolve => {
    setTimeout(function() {
        resolve(a+b);
    },4000)
   }) 
}

async function resoma(a,b,c){

    let x = SomarDelay(a,b)
    let y = c

    return await x + y;
}

resoma(1,2,3).then(value => console.log(value))