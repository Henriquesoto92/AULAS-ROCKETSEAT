# Navegando pelos elementos

## parentNode ou parenteElement
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
        <header>
            <h1>Meu Blog</h1>
        </header>    
           
        <script src="./script.js"></script> 
    </body>
</html>
```
JS
```js
// Navegando pelos elementos

//parentNode OU parentElement

const body = document.querySelector('body')

console.log(body.parentNode)

const element = document.querySelector('h1')

console.log(element.parentElement)
```

## childNodes OU children // firstChild OU firstElementChild // lastChild OU lastElementChild
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
        <header>
            <h1>Meu Blog</h1>
        </header>    
           
        <script src="./script.js"></script> 
    </body>
</html>
```
JS
```js
// Navegando pelos elementos

//childNodes (NÃO LEVA EM CONSIDERAÇÃO ESPAÇO EM VAZIO) OU children (LEVA EM CONSIDERAÇÃO ESPAÇO EM VAZIO)

const elchildnodes = document.querySelector('body')

console.log(elchildnodes.childNodes)


// firstChild (LEVA EM CONSIDERAÇÃO ESPAÇO EM VAZIO) OU firstElementChild (NÃO LEVA EM CONSIDERAÇÃO ESPAÇO EM VAZIO)
const elfirst = document.querySelector('body')

console.log(elfirst.firstChild)

const elfirstel = document.querySelector('body')

console.log(elfirstel.firstElementChild)

// lastChild (LEVA EM CONSIDERAÇÃO ESPAÇO EM VAZIO) OU lastElementChild (NÃO LEVA EM CONSIDERAÇÃO ESPAÇO EM VAZIO)
const ellast = document.querySelector('body')

console.log(ellast.lastChild)

const ellastel = document.querySelector('body')

console.log(ellastel.lastElementChild)
```

## childNodes OU children // firstChild OU firstElementChild // lastChild OU lastElementChild
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
        <header>
            <h1>Meu Blog</h1>
        </header>    
           
        <script src="./script.js"></script> 
    </body>
</html>
```
JS
```js
// Navegando pelos elementos

//nextSibling (LEVA EM CONSIDERAÇÃO ESPAÇO EM VAZIO) OU nextElementSibling ((NÃO LEVA EM CONSIDERAÇÃO ESPAÇO EM VAZIO)

const elnext = document.querySelector('header')

console.log(elnext.nextElementSibling)


//previousSibling (LEVA EM CONSIDERAÇÃO ESPAÇO EM VAZIO) OU previousElementSibling ((NÃO LEVA EM CONSIDERAÇÃO ESPAÇO EM VAZIO)
const elprevious = document.querySelector('script')

console.log(elprevious.previousElementSibling)
```