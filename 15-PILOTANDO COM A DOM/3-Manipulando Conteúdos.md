# Manipulando Conteúdos

## textContent
HTML
```Html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    </head>
    <body>
        <h1 class="one">Meu Blog</h1>
    </body>

    <script src="./script.js"></script>
</html>
```
JS
```js
const element = document.querySelector('h1')
element.textContent = "Olá Devs!"

console.log(element.textContent)
```

## innerText
HTML
```Html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    </head>
    <body>
        <h1 class="one">Meu Blog</h1>
    </body>

    <script src="./script.js"></script>
</html>
```
JS
```js
const element = document.querySelector('h1')
element.innerText = "Olá Devs!"
```

## innerHTML
HTML
```Html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    </head>
    <body>
        <h1 class="one">Meu Blog</h1>
    </body>

    <script src="./script.js"></script>
</html>
```
JS
```js
const element = document.querySelector('h1')
element.innerHTML = "Olá Devs! <small>!!!</small>"
```

## value
HTML
```Html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    </head>
    <body>
        <h1 class="one">Meu Blog</h1>
        <input type="text" value="estou no elemento">
    </body>

    <script src="./script.js"></script>
</html>
```
JS
```js
// value

const element = document.querySelector('input')

console.log(element.value)
element.value = "Valor que eu quiser"
```

## attribute
HTML
```Html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    </head>
    <body>
        <header class="bg">
            <h1>Meu Blog</h1>
        </header>        
    </body>

    <script src="./script.js"></script>
</html>
```
JS
```js
// atributos

//setAttribute
//getAttribute
//removeAttribute

const header = document.querySelector('header')
header.setAttribute('id', 'header')

const headerID = document.querySelector('#header')

console.log(headerID.getAttribute('class'))

header.removeAttribute('id')
header.removeAttribute('class')

header.setAttribute('class', 'bg header')
```