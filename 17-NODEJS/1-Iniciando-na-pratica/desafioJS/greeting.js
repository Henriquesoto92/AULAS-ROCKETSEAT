const getFlagValue = require('./flags')

console.log(`oi ${getFlagValue('--name')}, ${getFlagValue('--greeting')}`)