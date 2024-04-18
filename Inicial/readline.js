const prompt = require("readline-sync")

const idade = prompt.question("Quao eh a sua idade?")

const idadeNumber = Number(idade)

console.log("a idade do usuario é " + idade, typeof idade)

console.log("a idade do usuario é " + idadeNumber, typeof idadeNumber)

console.log(Number("X"))//Not a Number

console.log(String(18), typeof String(18))

console.log(2+"1")
console.log(2-"1")
console.log(2*"1")
console.log(2/"1")