const lista = ["lucas Bailo","mariA clara","Zezim batAta", "tiao dA LuA"]

const  nomesPad = lista.map((nome) => nome.toUpperCase())

console.log(nomesPad)


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
console.log(capitalizeFirstLetter('foo')); // Foo