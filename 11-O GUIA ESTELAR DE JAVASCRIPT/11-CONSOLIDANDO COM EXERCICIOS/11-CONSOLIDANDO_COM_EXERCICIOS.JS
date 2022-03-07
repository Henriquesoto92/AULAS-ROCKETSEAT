/*

Vamos fortalecer e aplicar os conhecimentos, além de aprender truques e dicas para resolver os desafios e avançar para o próximo nível
*/


//-----------------------------------------------------------------

/* ### Transformar notas escolares

Crie um algoritmo que transforme as notas do sitema numerico para sistema de notas em caracteres tipo A B C

* de 90 para cima   -   A
* entre 80 - 89     -   B
* entre 70 - 79     -   C
* entre 60 - 69     -   D
* menor que 60      -   F
*/


function getScore(score) {
    let scoreA = score >= 90 && score <= 100
    let scoreB = score >= 80 && score < 89
    let scoreC = score >= 70 && score < 79
    let scoreD = score >= 60 && score < 69
    let scoreF = score < 60 && score >= 0
    
    if(scoreF) {
        scoreFinal = 'F'
    } else if(scoreD) {
        scoreFinal = 'D'
    } else if(scoreC) {
        scoreFinal = 'C'
    } else if(scoreB) {
        scoreFinal = 'B'
    } else if(scoreA) {
        scoreFinal = 'A'
    } else {
        scoreFinal = 'Nota Inválida'
    }

    return scoreFinal
}

console.log(getScore(101))
console.log(getScore(-1))
console.log(getScore(0))
console.log(getScore(45))
console.log(getScore(61))
console.log(getScore(75))
console.log(getScore(85))
console.log(getScore(95))

//-----------------------------------------------------------------

/* ### Sistema de gastos familiar

Crie um objetos que possuirá 2 propriedades, ambas do tipo array:
    * receitas: []
    * despesas: []

Agora, crie um função que irá calcular o total de receitas e despesas e irá mostra uma mensagem se a família está com salto positivo ou negativo, seguido do valor do saldo

*/

let family = {
    incomes: [1200, 1200, 250.43, 360.45,5000],
    expenses: [320.24, 128.45, 176.87, 1450.00, 2000]
}

function sum(array) {
    let total = 0

    for (let value of array) {
        total += value
    }

    return total
}

function calculateBalance() {
    const calculateIncomes = sum(family.incomes)
    const calculateExpanses = sum(family.expenses)

    const total = calculateIncomes - calculateExpanses

    const itsOk = total >= 0

    let balanceText = "negativo"

    if (itsOk) {
        balanceText = "positivo"
    }

    console.log(`seu saldo é ${balanceText}:R$ ${total.toFixed(2)}`)
}

calculateBalance()

//-----------------------------------------------------------------
/* ### Celsius em fahrenheit

    Crie uma função que receba uma string em celsius ou fahrenheit e faça a transformação de uma unidade para outra

    C = (F - 32) * 5/9

    F = C * 9/5 + 32

*/

// transformDegree ('50F')
function transformDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')

    if(!celsiusExists && !fahrenheitExists) {
        throw new Error('grau não identificado')
    }

    // fluxo ideal F -> C
    let updatedDegree = Number(degree.toUpperCase().replace("F",""));
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
    let degreeSign = 'C'

    // fluxo inverso
    if(celsiusExists) {
        updatedDegree = Number(degree.toUpperCase().replace("C",""));
        formula = celsius => celsius * 9/5 + 32
        degreeSign = 'F'

    }

    return formula(updatedDegree) + degreeSign
}

try {
    console.log(transformDegree('50F'))
    console.log(transformDegree('10c'))
    transformDegree('50z')
} catch (error) {
    console.log(error.message)
}