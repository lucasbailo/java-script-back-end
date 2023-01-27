const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1158356109", "1158456909"]
};

    cliente.endereco = {
        rua: "R. Joseph Climber",
        numero: 1337,
        apartamento: true,
        complemento: "ap 934",
    };



const chavesObjt = Object.keys(cliente)

console.log(chavesObjt)

if (!chavesObjt.includes("endereco")) {
    console.error("Erro. É necessário ter um endereço cadastrado!")
}

// node Aula3/chaves.js