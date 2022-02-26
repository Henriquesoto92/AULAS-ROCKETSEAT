/*
    manipulando strings e numeros

    transformar string em Number e Number em string

*/

let string = "123"
console.log(Number(string))

let number = 321
console.log(String(number))

//Contar quandos caracteres tem uma palavra e quantos dígitos tem um número.

let word = "paralelepipedo"
console.log(word.length)
let number = 1234
console.log (String(number).length)

// transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula (deu erro porque tava querendo converter a string em numero)

let number = 123.3231654
console.log(Number(number.toFixed(2).replace(".", ",")))

// transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula

let number = 123.3231654
console.log(number.toFixed(2).replace(".", ","))

//Transforme letras minúsculas em maiúsculas. faça o contrario tambem

let word = "Programar é muito bacana"
console.log(word.toUpperCase())
console.log(word.toLowerCase())

//separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array. depois disso, Transforme o array em um texto e onde eram espaços, coloque_

let phrase = "Programar é muito bacana"
let myArray = phrase.split(" ")
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore.toLowerCase())

//verificar se o texto contém a palavra muito

let phrase = "Programar é muito bacana"
let myArray = phrase.includes("muito")

//criar Array com contrutor

let myArray = new Array('a','b','c')
console.log(myArray)

//contar elementos de um array

console.log(['a','b','c'].length)

//transformar uma cadeia de caracteres em elementros de um array

let word = "manipulação"
console.log(Array.from(word))

//transformar uma cadeia de caracteres em elementros de um array

let techs = ["html", "css", "js"]

// adicionar um item no fim
techs.push("nodejs")

// adicionar no começo
techs.unshift("sql")

// remover do fim
//techs.pop()

// remover do começo
//techs.shift()

// pegar somente alguns elementos do array
//console.log(techs.slice(1,1))

// remover 1 ou mais items em qualquer posição do array
//techs.splice(1,1)

// encontrar a posição de um elemento no array
let index = techs.indexOf('css')
techs.splice(index, 2)

console.log(techs)