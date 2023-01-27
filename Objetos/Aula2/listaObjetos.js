const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1158356109", "1158456909"]
};

cliente.enderecos = [
    {
    rua: "R. Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",
    },
]

cliente.enderecos.push(
    {
    rua: "R. Joseph Ladder",
    numero: 404,
    apartamento: false,
    }
)


const listaAp = cliente.enderecos.filter((endereco) => endereco.apartamento === true);

console.log(listaAp)


// node Aula2/listaObjetos.js