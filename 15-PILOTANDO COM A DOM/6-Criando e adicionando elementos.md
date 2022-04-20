# Criando e adicionando elementos
HTML
```html
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

## createElement
```JS
const div = document.createElement('div')
div.innerText = "olá devs"
```
## append(adicionado em ultimo) prepend (adicionado como primeiro)
```JS
const body = document.querySelector('body')

body.append(div)
```

## instertBefore
```JS
const body = document.querySelector('body')
const script = body.querySelector('script')

body.insertBefore(div, script)
```

## instertBefore (como se fosse um after)
```JS
//const body = document.querySelector('body')
const header = body.querySelector('header')

body.insertBefore(div, script.nextElementSibling)
```