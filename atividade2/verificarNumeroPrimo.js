function verificarNumeroPrimo(n){
    if( n <= 1){
        return "A condição do numero " + n + " ser primo é " + false;
    }
    
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i === 0){
            return "A condição do numero " + n + " ser primo é " + false;
        }
    }
    return "A condição do numero " + n + " ser primo é " + true;
}

console.log(verificarNumeroPrimo(0)); // false
console.log(verificarNumeroPrimo(1)); // false
console.log(verificarNumeroPrimo(2)); // true
console.log(verificarNumeroPrimo(3)); // true
console.log(verificarNumeroPrimo(7)); // true
console.log(verificarNumeroPrimo(83)); // true
console.log(verificarNumeroPrimo(100)); // false
console.log(verificarNumeroPrimo(991)); // true
console.log(verificarNumeroPrimo(104729)); // true
console.log(verificarNumeroPrimo(14348907)); // false