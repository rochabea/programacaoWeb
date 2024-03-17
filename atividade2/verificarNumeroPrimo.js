function verificaPrimo(num){
    if( num <= 1){
        return "A condição do numero " + num + " ser primo é " + false;
    }
    
    for(let i =2; i <= Math.sqrt(num); i++){
        if(num % i === 0){
            return "A condição do numero " + num + " ser primo é " + false;
        }
    }
    return "A condição do numero " + num + " ser primo é " + true;
}

console.log(verificaPrimo(0)); // false
console.log(verificaPrimo(1)); // false
console.log(verificaPrimo(2)); // true
console.log(verificaPrimo(3)); // true
console.log(verificaPrimo(7)); // true
console.log(verificaPrimo(83)); // true
console.log(verificaPrimo(100)); // false
console.log(verificaPrimo(991)); // true
console.log(verificaPrimo(104729)); // true
console.log(verificaPrimo(14348907)); // false