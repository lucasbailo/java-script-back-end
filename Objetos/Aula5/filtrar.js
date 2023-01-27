const clientes = require("./clientes.json");

function filtrarApInc (clientes) {
    return clientes.filter((cliente) => {
        return (
            cliente.endereco.apartamento && 
            !cliente.endereco.hasOwnProperty("complemento")
        );
    });
}

const listaFiltrada = filtrarApInc(clientes)

console.log(listaFiltrada)