function Recurcsion(n) {

    if (n - 1 < 2) {
        console.log("Recursão parou")
    } else if (n % 2 !=0){
        console.log("Numero impar " + n)
        Recurcsion (n - 1)
    }else{
        console.log("Número par " + n);
        Recurcsion (n - 2)
    }

}

Recurcsion(10)