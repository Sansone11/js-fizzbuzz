console.log('JS ok')
// per ogni i che va da 1 a cento
// se i è multiplo di 3
// stampare fizz al posto del numero
// se i è multiplo di 5
// stampare buzz al posto del numero
// e se i è multiplo di 3 e multiplo di 5
// dai istruzione di stampare fizzbuzz al posto del numero
for (let i = 1 ; i <= 100; i++){
    console.log(i);
    if (((i + 1) % 3) === 0) {
        console.log('questo è un multiplo di 3');
    }
    if (((i + 1) % 5) === 0) {
        console.log('questo è un multiplo di 5');
    }
    if (((i + 1) % 3) === 0) and (((i + 1) % 5) === 0);
        
    else {
        console.log('fizzbuzz ');
    } 
    
}
