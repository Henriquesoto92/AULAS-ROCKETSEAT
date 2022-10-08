// -----imperativa e declarativa-----

//função que eleva o número ao quadrado

//Imperativo: faça da seguinte formato
let number = 2

function square() {
    return number * number
}

number = square ()

//Declarativa: O que fazer e não como fazer

const square = n => n * n


//-----imutabilidade-----

//Exemplo em js
const cart = {
    quantity: 2,
    total: 20, 
}

// Bad 
cart.quantity = 3

// Good 
// const new cart = {... cart, quantity: 3}

// exemplo em ReactJS
const [amount, setamount] = useState(0)

// Bad 
amount = 2

// Good 
// setAmount(2)

//-----Stateless-----

let number1 = 2;

// stateful function
function square (){
    return number1*number1
}

number1 = square();

//stateless function 
const square = n => n * n

//-----Funções independentes-----

const random = (number, Math) => 
    Math.floor(Math.random() * number)

// recursive
// Find the factorial of a number and
const factorial = x => {

    //if nubmer is 0
    if (x===0) {
        return 1;
    }
    return x * factorial (x-1);
}

//-----Funções puras-----

//Função impuras
// Exemplo 1: está dependendo de dados externo
// que não foi passadi como parâmetro
function calculateCircumference(radius) {
    return Math.PI* (radius + radius)
}

//Exemplo 2: está alterando um dado externo
let person = { 
    name: 'Rafael Camarda',
    age: 'Jovem'
}

function changeName(name) {
    person.name = name
}

//Função pura

//Exemplo 1
const calculateCircumference = function (pi, radius){
    return pi * (radius + radius)
}

// com arrow function
const calculateCircumference = (pi, radius) => {
    pi * (radius + radius)
}
//Exemplo 2:
const changePersonName = (person, name) => ({...person, name })

//-----first-class-----

const sayMyName = () => console.log('Mayk')
const runFunction = fn => fn()

runFunction(sayMyName)
runFunction(() => console.log('Discovery'))

console.log(runFunction(Math.random))

//-----higher-order-----

//Exemplo com .map() JS
const numbers = [2,4,8,16]
const square = n => n * n
const squareNumber = numbers.map(square)

//exemplo de um retorno de função com
//(currying ou aplicação parcial de função

const pause = wait => fn => setTimeout(fn, wait)
pause (600)(()=> console.log('waiting 600ms'))

const wait200 = pause(200)
const wait1000 = pause(1000)

wait200 (()=> console.log('waiting 200ms'))
wait1000 (()=> console.log('waiting 1s'))


//-----composicao-de-funcoes-----
const people = ['Rafa', 'Diego', 'Dani', 'Rod']
const upperCasePeopleThatStartsWithD = people
.filter(person => person.startsWith('D'))
.map(dperson => dperson.toUpperCase())


//-----Final-----
