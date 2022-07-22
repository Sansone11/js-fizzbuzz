console.log('JS ok')
// per ogni i che va da 1 a cento
// se i è multiplo di 3
// stampare fizz al posto del numero
// se i è multiplo di 5
// stampare buzz al posto del numero
// e se i è multiplo di 3 e multiplo di 5
// dai istruzione di stampare fizzbuzz al posto del numero
const grigliaElement = document.querySelector('griglia');

for (let i = 1; i <= 100; i++) {
    console.log(i)
    if (i % 3 === 0){
        console.log('fizz')
    }
    if (i % 5 === 0){
        console.log('buzz')
    }
    if (i % 3 === 0 && i % 5 === 0){
        console.log('fizzbuzz ')
    }     

}

