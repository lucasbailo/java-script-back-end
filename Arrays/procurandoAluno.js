let sala = [
    "Lucas",
    "Josué",
    "Marta",
    "Carlos",
    "Ana",
]

let notas = [
    (Math.random()*10).toFixed(2),
    (Math.random()*10).toFixed(2),
    (Math.random()*10).toFixed(2),
    (Math.random()*10).toFixed(2),
    (Math.random()*10).toFixed(2)
]

const listaDeAlunosNotas = [sala, notas]

function exibeNomeNota(aluno) {
    if (listaDeAlunosNotas[0].includes(aluno)) {

        const[alunos, notas] = listaDeAlunosNotas;

        console.log(`${aluno} está cadastrado`)

        const indice = alunos.indexOf(aluno)
        const nota = notas[indice]
        console.log(`E sua nota é ${nota}`)

    } else {
        console.log("Aluno não encontrado!")
    }
}

exibeNomeNota("Lucas")