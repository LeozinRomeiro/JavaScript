const prompt = require("readline-sync")

const idade = Number(prompt.question("Qual sua idade?"))

if(idade >= 18){
    console.log("eh maior de idade!")
}else{
    console.log("eh menor de idade!")
}

console.log(idade >= 18 ? "eh maior de idade!" : "eh menor de idade!")

const mediaAluno = 10

if(mediaAluno >= 7){
    console.log("Aprovado")
    console.log("Isso ai 😎")
}else if(mediaAluno >= 5){
    console.log("Reprovado")
}else{
    console.log("Prova final")
}

const permissoes = "Aluno"

switch(permissoes){
    case "Aluno":
        console.log("Ver aulas")
        break
    case "Professor":
        console.log("Alterar aulas")
        break
    case "Adm":
        console.log("Acesso total liberado")
        break
    default:
        console.log("Quem é tu?")
}

// Falso 0, undefiend, null, ", NaN"