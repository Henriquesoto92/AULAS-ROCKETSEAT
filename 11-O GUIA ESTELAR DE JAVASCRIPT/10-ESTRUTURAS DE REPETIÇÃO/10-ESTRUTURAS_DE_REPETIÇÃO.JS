// Estrutura de repetição
// for

for(let s = 0; s <= 10; s ++){
    
    
    console.log(s)
}


for(let i = 100; i > 0 ; i--) {
    if(i === 50 ) {
        break;
    }
    
    console.log(i)
}

for(let o = 10; o > 0 ; o--) {
    if(o === 5 ) {
        continue;
    }
    
    console.log(o)
}

//------------------------------------------------

// Estrutura de repetição
// while

let i = 49586396545;
while(i > 10) {
    console.log(i)

    i /=35;
}

let s = 0;
while(s < 10) {
    console.log(s)

    s++;
}

//------------------------------------------------
// for .... of

let name = 'soto'
let names = ['joão', 'paulo', 'pedro']

for(let char of name) {
    console.log(char)
}

for(let name of names) {
    console.log(name)
}
//------------------------------------------------
// for .... in

let person = {
    name: 'john',
    age: 30,
    weight: 88.6
}

for(let property in person) {
    console.log(property)
    console.log(person[property])
}