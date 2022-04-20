# Event Module

É um mecanismo para
* [ ] Disparar eventos
* [ ] Ouvir eventos
* [ ] Fazer alguma ação quando oubir o evento.
* [ ] É a base para muitos outros módulos como: http, stream, file system, etc...

## O que vamos aprender?

* [ ] Utilizar os eventos
* [ ] Disparar eventos `ev.emit`
* [ ] Ouvir eventos `ev.on`
* [ ] Executar ações para determinados eventos `ev.once`
* [ ] Entender como ele é a base para os outros módulos

```js
const { EventEmitter } = require('events')
const ev = new EventEmitter()

ev.on('saySomething', (message) => {
    console.log('eu ouvi você: ', message)
})

ev.emit('saySomething', "soto")
```