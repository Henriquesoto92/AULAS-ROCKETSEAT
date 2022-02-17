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

/*
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script src="./scripts.js"></script>
</body>
</html>
*/

/*
<script>
    // Variáveis e tipos de dados
    // declaração or declaration
    var name

    // Atribuição de valores or assignment
    name = 'mike'

    // que tipo de dado foi colocado na variavel
    //console.log(typeof name)

    //let age = 20 //tipo de dado (number)
    //let isHuman = true //tipo de dado (boolean)


    // agrupamento de declaração
    let age, isHuman

    age = 12
    isHuman = true

    //multiplos argumentos na função
    //console.log(name, age, isHuman)

    //escrita do texto + variaveis
    //concatenando valores
    //console.log('O ' + name + ' tem ' + age + ' anos.')

    //interpolando valores com template literals or template strings
    console.log(`o ${name} tem ${age} anos`)
</script>
*/

// object
const person =
{
    name: 'john',
    age: 30,
    weight: 88.6,
    isAdmin: true

}
console.log(`${person.name} tem ${person.age} anos`)


// Array
const animals = [
    'Lion',
    'Monkey',
    {
        name: 'cat',
        age: 3
    }
]

//acessar valores dentro do array
console.log(animals[2])



// Atividades
// 1. declare uma variável de nome weight
let weight;

//  2. que tipo de dado é a variável aceima?
//console.log(typeof weight)

/*

    3. Declare uma variável e atribua valores para cada um dos dados:
        * name: string
        * age: Numeber (integer)
        * stars: number (float)
        * isSubscrived: boolean

*/

// let name = 'soto'
// let age = 30
// let stars = 4.8
// let isSubscrived = true

/*
    4. A variável student abaixo é de que tipo de dado?

    4.1 Atribua a ela as mesmas propriedades e valores do exercicio 3

    4.2 Mostre no console a segunte mensagem:

        <name> de idade <age> pega  <Weighy> kg.

        Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto
        
*/

let student = {
    name: 'soto',
    age: 30,
    weight: 80.8,
    isSubscrived: true,
};

//console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg.`)

/*
    5. Declare uma variavel do tipo array, de nome students e atribua a ela nenhum valor, ou seja, somente o array vazio
*/

let students =[

]

/*
    6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (não copiar e colar o object, mas usar o objeto criado e inserir ele no array)
*/

students = [
    student
]

console.log(students)

/*
    7. Coloque no console o valor da posição zero do Array acima
*/

console.log(students[0])

/*
    8. Crie um novo student e coloque na posição 1 do array students
*/

let john = {
    name: 'john',
    age: 25,
    weight: 74.8,
    isSubscrived: true,
};

students [1]= john

console.log(students)

/*
    9. Sem rodar o código responda qual é a resposta do código abaixo e porque? Após sua resposta, rode o código e veja se você acertou

    console.log(a)
    var a = 1
*/

console.log(a)
    var a = 1