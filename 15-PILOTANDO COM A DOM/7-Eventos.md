# eventos

## para mouse
HTML
```HTML
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <header>
            <h1 onmouseover="print()">Meu Blog</h1>
            <input type="text">
        </header>    

        <script src="./script.js"></script> 
    </body>
</html>
```
```js
function print() {
    console.log ('print')
}
```

## para teclado
HTML
```html
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <header>
            <h1>Meu Blog</h1>
            <input type="text">
        </header>    

        <script src="./script.js"></script> 
    </body>
</html>
```
```js
const input = document.querySelector('input')

input.onkeydown = function() {
    console.log('rodei')
}
```

## Adicionar eventos no proprio JS
```js
const h1 = document.querySelector('h1');

h1.addEventListener('click', print)

function print() {
    console.log ('print')
}
```

## forma correta de adicionar eventos
- dessa forma pode adicionar varios com o mesmo tipo de Evento.. no caso o click
```js
const h1 = document.querySelector('h1');

h1.addEventListener('click', print)

function print() {
    console.log ('print')
}

h1.addEventListener('click', function() {
    console.log('outro momento')
})
```