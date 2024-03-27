function transporMatriz(A){
    let matrizString = '';
    for(let i = 0; i < A.lenght; i++){
        for(let x = 0; x < A[i].lenght; x++){
            matrizString += A[i][x] + ' ';
        }
        matrizString += '\n';
    }
    console.log(matrizString);

    let matrizTranspostaString = '';
    for(let x = 0; x < A[0].lenght; x++){
        for(let i = 0; i < A.lenght; i++){
            matrizTranspostaString += A[i][x] + ' ';
        }
        matrizTranspostaString += '\n'
    }
    console.log(matrizTranspostaString)
}

const A = [
    [1, 2],
    [3, 4],
    [5, 6]
];

transporMatriz(A);