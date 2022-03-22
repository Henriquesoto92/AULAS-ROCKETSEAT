# Alterando estilos

## style
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
// Alterando estilos
//style
const element = document.querySelector('body')

element.style.backgroundColor = "#f9f3D2"

console.log(element.style.backgroundColor)
```

## classList
HTML
```Html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .active {
            color: red;
            }
        .green {
            background-color: green;
        }
    </style>
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
// Alterando estilos

//classList.add(serve para ativar)
//classList.remove(serve para remover)
//classList.toggle(funciona como um interruptor, sempre ao contrario do ativo ou inativo)

const element = document.querySelector('body')

element.classList.add('active', 'green')

console.log(element.classList)
//element.classList.remove('active')
element.classList.toggle('active')
```