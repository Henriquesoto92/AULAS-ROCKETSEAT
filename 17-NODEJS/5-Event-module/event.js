const { inherits } = require('util')
const { EventEmitter } = require('events')

function Character(name) {
    this.name = name
}

inherits(Character, EventEmitter)

const chapolin = new Character('chapolin');
chapolin.on('help', () => console.log(`eu! o ${chapolin.name} colorado!`))

console.log('oh! E agora, Quem poderá me defender?')
chapolin.emit('help') 