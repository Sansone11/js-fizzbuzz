console.log('JS ok')
// per ogni i che va da 1 a cento
// se i è multiplo di 3
// stampare fizz al posto del numero
// se i è multiplo di 5
// stampare buzz al posto del numero
// e se i è multiplo di 3 e multiplo di 5
// dai istruzione di stampare fizzbuzz al posto del numero
// crea un collegamento con il dom querySelector
const grigliaElement = document.querySelector('.griglia');
console.log(grigliaElement)
grigliaElement.innerHTML = ''

for (let i = 1; i <= 100; i++) {
    console.log(i)
    if (i % 3 === 0){
        const divElement = document.createElement('div')
        divElement.append(i)
        divElement.classList.add('cella')
    
    }
    if (i % 5 === 0){
        console.log('buzz')
    }
    if (i % 3 === 0 && i % 5 === 0){
        console.log('fizzbuzz ')
    }     

}

