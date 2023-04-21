// 1.
//
let pessoa = {
    nome: "Helcius",
    idade: 27,
    profissao: "Engenheiro Civil",
    endereco: {
        logradouro: "Av minhaRua",
        bairro: "Jardim",
        cidade: "Parahyba",
        cep: "58037-037"
    }
}

// 2.
//
function imprimePessoa(param) {
    console.log(
        "nome: " + param.nome + "\nidade: " + param.idade + "\nprofissão: " + param.profissao + "\nendereço: " + param.endereco.logradouro + ", " + param.endereco.bairro + ", " + param.endereco.cidade + ", " + param.endereco.cep
    )
}
imprimePessoa(pessoa)

// 3.
//
pessoa.telefone = "91234-1234";

// 4.
//
pessoa.obterDados = function () {
    console.log(
        `nome: ${this.nome} \nidade: ${this.idade} \nprofissão: ${this.profissao} \ntelefone ${this.telefone} \nendereço: ${this.endereco.logradouro}, ${this.endereco.bairro}, ${this.endereco.cidade}, ${this.endereco.cep}`
    )
}
pessoa.obterDados()

// 5.
//
pessoa.comparar = function (outraPessoa) {
    if (this.nome == outraPessoa.nome && this.idade == outraPessoa.idade)
        return true
    else
        return false
}

// 6.
//
let pessoa2 = {
    nome: "Helcius",
    idade: 27,
    profissao: " etc",
    endereco: {
        logradouro: "asdasd",
        bairro: "2",
        cidade: "3",
        cep: "xxxxx-037"
    }
}

// 7.
//

console.log(pessoa.comparar(pessoa2))
