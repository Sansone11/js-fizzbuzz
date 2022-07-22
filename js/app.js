console.log('JS ok')
// per ogni i che va da 1 a cento
// se i è multiplo di 3
// stampare fizz al posto del numero
// se i è multiplo di 5
// stampare buzz al posto del numero
// e se i è multiplo di 3 e multiplo di 5
// dai istruzione di stampare fizzbuzz al posto del numero
// crea un collegamento con il dom querySelector richiama una classe
const grigliaElement = document.querySelector('.griglia');
console.log(grigliaElement);
const divElement = document.createElement('div');
divElement.classList.add('cell');

for (let i = 1; i <= 100; i++) {
    console.log(i)
    if (i % 3 === 0){
        console.log('fizz')
        divElement.append('fizz')
        divElement.classList.add('fizz')  
    }
    if (i % 5 === 0){
        console.log('buzz')
        divElement.classList.add('buzz')
        divElement.append('buz')
        
    }
    if (i % 3 === 0 && i % 5 === 0){
        console.log('fizzbuzz')
        divElement.append('fizzbuzz')
        divElement.classList.add('fizzbuz')
        
    } 
    grigliaElement.append(divElement);   

}

