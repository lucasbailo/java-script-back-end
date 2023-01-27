
let quantidade = 2

let aleatório1 = (Math.random()*10).toFixed(2)
let aleatório2 = (Math.random()*10).toFixed(2)
let aleatório3 = (Math.random()*10).toFixed(2)
let aleatório4 = (Math.random()*10).toFixed(2)
let aleatório5 = (Math.random()*10).toFixed(2)


let notas = [aleatório1,aleatório2,aleatório3,aleatório4,aleatório5]

console.log(notas)

notas.pop(notas.length)

console.log(notas)