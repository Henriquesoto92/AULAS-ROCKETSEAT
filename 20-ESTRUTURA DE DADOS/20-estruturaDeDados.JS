// array no codigo

const pilotos = ['Senna', 'Prost', 'Schumacher', 'Hamilton']

// a indexação (index) começa pelo número 0
console.log(pilotos[0]) // Senna
console.log(pilotos[3]) // Schumacher

//acessar o tamanho do array 
console.log(pilotos.length)

//iterável
for (let pilotos of pilotos) {
    console.log(pilotos)
}

//adicionar elemento 
pilotos.push('alonso')
console.log(pilotos)

//encontra um elemento
const senna = pilotos.find(piloto => piloto === 'Senna')
console.log(senna)

pilotos.splice(1, 1)

console.log(pilotos)

// array matrix

const students = [['Joseph', 23, 'MG'], ['Briana', 22, 'SP'], ['Priscila', 23, 'PR']]
console.log(students[0][1])

// array stack
//stack é uma pilha
//estilo last in first out

//passo 1: Modelando
class stack {
    constructor() {
        this.data = []
        this.top = -1
    }
    //adiciona elemento à pilha
    push(value) {
        this.top++
        this.data[this.top] = value
        return this.data


    }
    // remove elemento do topo da pilha
    pop() {
        if (this.top < 0) return undefined
        const poppedTop = this.data[this.top]
        delete this.data[this.top]
        this.top--
        return poppedTop
    }
    // obter o elemento do topo da pilha
    peek() {
        return this.top >= 0 ? this.data[this.top] : undefined
    }
}

//passo 2: utilizando
const stack = new Stack()
//adicionar dados
stack.push('learning')
stack.push('data')
console.log(stack.push('structures'))

console.log(stack.peek())

//remover
stack.pop()
console.log(stack.pop())

console.log(stack.peek())

//queue = fila
//enqueue = entrada da fila
//dequeue = saida da fila

// passo 1: Modelando
class queue {
    contrutor() {
        this.data = []
    }
    enqueue(item) {
        this.data.push(item)
        console.log('${item} chegou na fila')
    }
    dequeue() {
        const item = this.data.shift();
        console.log('${item} saiu na fila')
    }
}

// passo 2: Utilizando

const fila = new Queue()

fila.enqueue('mariana')
fila.enqueue('joao')
fila.enqueue('ariel')
fila.dequeue()
fila.dequeue()
fila.dequeue()
