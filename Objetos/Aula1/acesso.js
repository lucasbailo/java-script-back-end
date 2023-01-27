const cliente = {
    nome: "Andre",
    idade: 32,
    cpf: "1122233345",
    email: "andre@dominio.com",
  };
  
console.log(`O nome do cliente é ${cliente["nome"]} e essa pessoa tem ${cliente["idade"]} anos`)
console.log(`Os três primeiros dígitos do seu CPF são ${cliente["cpf"].substring(0,3)}`)


const chaves = ["nome", "idade", "cpf", "email","altura"]

chaves.forEach((chave) => {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`)
})



//     node acesso.js