const notas = [5, 5.5, 7, 8.5, 9, 10]

const notas2 = notas.map((nota) => {
    return nota + 1 > 10 ? nota : nota + 1    
})

console.log(notas2)