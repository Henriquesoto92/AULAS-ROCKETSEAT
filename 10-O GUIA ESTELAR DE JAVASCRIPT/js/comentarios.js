// Aqui eu tenho um comentario em linha

/*
    aqui eu tenho um comentário multi linha

    o codigo abaixo escreve alguma mensagem do devtools
*/


console.log("sejá bem vindo")// alguma coisa console.log('iria ignonar")

/*
    String

        * Cadeia de caracteres - para escrever palavras

        "" // aspas duplas
        '' // aspas simples
        `` // template literals ou template string

*/

console.log(`So2to ${2*2}`)

/*
    Number
        * números

        33 // Inteiros
        12.5 // Reais - float
        NaN // Not A Number
        Infinity // infinito

*/

console.log(33)
console.log(-33)
console.log(12.5 + 33)
console.log(12.5 / 22)
console.log(12.5 * "letras")
console.log(12.5 === Infinity)
console.log(Infinity)
console.log(infinity)//I minusculo não acha dá erro de referencia

/*
    boolean
        * somente 2 valores

        true // verdadeiro
        false // falso
       
*/

console.log(false)
console.log(true)

/*
* undefined
    * indefinido

* null
    * nulo
    * objeto que não possui nada dentro
    * diferente de indefinido
       
*/

console.log(undefined)
console.log(null)
console.log(null === undefined)

/*
* Object
    * Objeto
    * Propriedades / Atributos
    * Funcionalidades / Métodos

    { Propriedade: "valor"}
       
*/

console.log({
    name: "soto",
    Idade: 30,
    Andar: function(){
        console.log('andar')  
    }
})

/*
* Array (Vetores)
    * Uma lista
    * Agrupamento de dados
    * Funcionalidades / Métodos

    [soto "30"]
       
*/

console.log([
    "leite",
    "ovos",
    2,
    3
])