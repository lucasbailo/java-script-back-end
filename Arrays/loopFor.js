const numeros = [10, 6.5, 8, 7.5, 9.25]

let soma = 0;
let media = 0;

for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i]
    media = (soma / (numeros.length))
}

console.log(`A média das noas é ${media}.`)




/*node loopFor.js*/