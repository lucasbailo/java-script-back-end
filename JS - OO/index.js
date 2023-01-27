import User from "./User.js";
import Docente from "./Docente.js";
import Admin from "./Admin.js";

// const novoUser = new User('Mariana', 'm@m.com', "01/06/1325")
// console.log(novoUser.exibirInfos())

// const novoAdmin = new Admin('Rodrigo','r@r.com', '02/04/1901')
// console.log(novoAdmin.nome)
// novoAdmin.nome = 'André'
// console.log(novoAdmin.nome)

const novoDocente = new Docente('Guilherme','g@g.com', '22/01/1305')
console.log(novoDocente.exibirInfos())

// console.log(novoAdmin.exibirInfos())
// console.log(novoAdmin.nomeAdmin())

// novoUser.#email = 'x@x' // << campo privado
