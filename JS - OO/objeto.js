const user = {
    nome: "Lucas",
    email: "lucas@lucas.com",
    nascimento: "30/08/1756",
    role: "admin",
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email)
    }
}

// user.exibirInfos()
const exibir = function() {
    console.log(this.nome)
}

const exibirNome = exibir.bind(user)

// exibirNome()
// exibir()


const admin = {
    nome: "Mariana",
    email: "Mari@ana.com",
    nascimento: "30/11/1896",
    role: "admin",
    criarCurso() {
        console.log("Curso Criado")
    }
}

Object.setPrototypeOf(admin, user)

admin.criarCurso()
admin.exibirInfos()