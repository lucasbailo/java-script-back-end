import User from "./User.js";

export default class Admin extends User {
    constructor(nome, email, nascimento, role = 'admin', ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }

    nomeAdmin() {
        return `${this.nome}`
    }

    criarCurso(nomeDoCurso, vagas) {
        return `Cruso de ${nomeDoCurso} criado com ${vagas} vagas`
    }

}

// const novoAdmin = new Admin('Jorgim', 'gim@jor.com', '30/08/1489')

// console.log(novoAdmin.criarCurso('JS',20))


// console.log(novoAdmin)
// console.log(novoAdmin.exibirInfos())