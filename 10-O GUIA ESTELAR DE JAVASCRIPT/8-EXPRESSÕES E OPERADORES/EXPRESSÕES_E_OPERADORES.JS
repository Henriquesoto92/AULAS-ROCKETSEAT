/* Expressões e operadores

- Expressions
- Operators
    Binary
    Unary
    Ternary

*/

let number = 1;

(function() {
    console.log('alo')
})()

// Expressão um dos poucos casos que ponto e virgula resove

let number = 1

console.log(number + 1)
//binary

let number = 1

console.log(++number)
//unary


let number = 1

console.log(true ? 'alo' : 'nada')
// Ternary

/*  -------------------------------------------------
Expressões e operadores

    new

    * left-hand-side expression
    * criar um novo objeto
*/
let name = new String('henrique')
name.surName = "Soto"
let age = new Number(23)
console.log(name.surName, age)

let date = new Date('2022-02-24')
console.log(date)

/* -------------------------------------------------
Expressões e operadores

    operadores unários
    typeof
    delete
    
*/

const person = {
    name: 'soto',
    age: 25,
}
delete person.age

console.log(person)

// -------------------------------------------------
//Operadores aritiméticos

// multiplicação
console.log(3 * 5)
console.log(3.2 * 5.5)

// divisão
console.log(12 / 2)

// soma
console.log(34 + 67)

// subtração
console.log(34 - 23)

// resto da divisão %
let remaider
remaider = 11 % 4
console.log(remaider)

// incremento ++
let increment = 0
increment++
increment++
console.log(increment)

// decremento --
let decrement = 0
decrement--
decrement--
console.log(decrement)

// exponencial ** (elevado a )
console.log (3 ** 3)

// -------------------------------------------------
// Gouping operator ( )

let total = (2 + 3) * 5
console.log(total)

// -------------------------------------------------
// operadores de comparação

// Irá comparar valores e retornar um boolean com resposta à comparação

let one = 1
let two = 2

// == igual a 
console.log( two == 1)
console.log( one == "1")

// != diferente de
console.log( one != two)
console.log( one != 1)
console.log( one != "1")

// === estritamente igual a
console.log ( one === "1")
console.log ( one === 1)

// !== diferente de
console.log( two !== "2")
console.log( one !== 2)
console.log( one !== "1")

// > Maior que
console.log( one > two)

// > Maior igual a
console.log( one >= 1)
console.log( two >= 1)

// < menor que
console.log( one < two)

// < menor igual a
console.log( one <= two)
console.log( one <= 1)
console.log( one <= 0)


// -------------------------------------------------
// operadores de atribuição (Assignment)
let x

// assignment
x = 1
console.log(x)

// addition assignment
x += 2
console.log(x)

// substraction assignment
x -= 2
console.log(x)

// multiplication assignment
x *= 2
console.log(x)

// division assignment
x /= 2
console.log(x)

// remainder
x %= 2
console.log(x)

//exponetiation
x **= 2
console.log(x)

// -------------------------------------------------
// operadores logicos  (logical operators)

// - 2 valores booleanos, quando verificados,
// resultará em verdadeiro ou falso
let pao = true
let queijo = true

// AND &&
console.log(pao && queijo)

// OR ||
console.log(pao || queijo)

// NOT !
console.log(!queijo)

// -------------------------------------------------
// operadores Condicional (Ternário)

// dependendo da condição nós receberemos valores diferentes

// Condição então valor 1 se não valor 2
// condition ? value1 : value2

// exemplos
// café da manhão top

let pao = true
let queijo = true

const niceBreakfast = pao && queijo ? 'café top' : 'café ruim'

console.log(niceBreakfast)

//maior de 18
let age = 16
const canDrive = age >= 18 ? 'can drive' : "can't drive"
console.log(canDrive)

// -------------------------------------------------
// operadores de String (String operator)

// comparison (comparação)
console.log('a' == 'a')

// concatenatio (concatenação)
// retorna a união de duas strings
let alpha = "alpha"
alpha += 'bet'
console.log(alpha + 345)

// -------------------------------------------------
/*
    type conversion (typecasting) vs Type coersion
*/
console.log(Number('9') + 5)

/*
    FALSY
    Quando um valor é considerado false em contextos onde um booleano é obrigatorio ( condicionais e loops )
    
    false
    0
    -0
    ""
    null
    undefined
    NaN
*/
console.log( true ? 'verdadeiro' : 'falso')
console.log( null ? 'verdadeiro' : 'falso')

/*
    TRUTHY
    Quando um valor é considerado true em contextos onde um booleano é obrigatório ( condicionais e loops )

    true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity
*/
console.log( false ? 'verdadeiro' : 'false')
console.log( "false" ? 'verdadeiro' : 'false')