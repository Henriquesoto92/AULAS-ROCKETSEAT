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