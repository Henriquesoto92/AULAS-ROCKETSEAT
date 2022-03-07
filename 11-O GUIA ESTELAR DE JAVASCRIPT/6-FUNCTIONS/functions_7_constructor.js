/*

    Function () Constructor

    * experessão new
    * criar um novo objeto
    * this keyword
*/


function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + " está andando"
    }
}

const soto = new Person("Soto")
const joao = new Person("João")
console.log(soto.walk())
console.log(joao.walk())

