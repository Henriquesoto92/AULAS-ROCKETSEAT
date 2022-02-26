// Control Flow

// se estiver sujo
//console.log('lavar o copo')
//console.log('servir café')

// ------------------------------------------------

// if (se) ... else (se não)

let temperature = 30
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >=37
let hipotermia = temperature <=30



if(highTemperature) {
    console.log('febre alta')
} else if(mediumTemperature) { 
    console.log('febre moderada')
} else if(hipotermia) { 
    console.log('vai morre')
} else {
    console.log('saudavel')
}

// ------------------------------------------------
// SWITCH
let expression = ''

switch (expression) { // puxa a expressão para o switch
  case 'a': // confere se o valor da expressão é o correto
    console.log('a')
    break // para a execução do switch apenas se verdadeiro
  case 'b':
    console.log('b')
    break
  default: // caso nenhum valor seja o correto, realizará a 
					 //instrução dentro de si.
    console.log('default')
    break
}

//calculadora

function calculate(number1, operator, number2) {
    let result = 0;

    switch (operator) {
        case '+':
            result = number1 + number2
            break
        case '-':
            result = number1 - number2 
            break
        case '*':
            result = number1 * number2
            break
        case '/':
            result = number1 / number2 
            break
        default:
            console.log('não implementado')
            break
    }

    return result
}

console.log(calculate(4, '+', 8))
// ------------------------------------------------

// throw

function sayMyName(name = '') {
    if (name === '') {
        throw 'Nome é obrigatório'
    }

    console.log(name)
}

// try... catch

try {
    sayMyName()
} catch(e) {
    console.log(e)
}

console.log('após ao try/catch')