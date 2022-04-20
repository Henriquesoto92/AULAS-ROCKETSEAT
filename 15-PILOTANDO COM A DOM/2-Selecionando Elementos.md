# Qual usar

- getElementById(element)
- getElementByClassName(HTMLCollection)
- getElementByTagName(HTMLCollection)
- querySelector(element)
- querySelectorAll(Nodelist)

## getElementById()
- utiliza a `id` para procurar na DOM 
    - Exemplo = `id="blog-title"`

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
        <h1 id="blog-title">Meu Blog</h1>
    </body>

    <script src="./script.js"></script>
</html>
```
JS
```js
//getElementById()

const element = document.getElementById('blog-title')
console.log(element)
```


## getElementsByClassName()
- utiliza a `class` para procurar na DOM 
    - Exemplo = `class="one"`

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
        <h1 class="one">Meu Blog</h1>

        <p class="one"></p>
    </body>

    <script src="./script.js"></script>
</html>
```
JS
```js
// getElementsByClassName()

const element = document.getElementsByClassName('one')
console.log(element)
```

## getElementsByTagName()
- utiliza as TAG para procurar na DOM 
    - Exemplo = <h1> <head> <meta>
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
        <h1 class="one">Meu Blog</h1>

        <p class="one"></p>
    </body>

    <script src="./script.js"></script>
</html>
```
JS
```js
// getElementsByTagName()

const element = document.getElementsByTagName('h1')
console.log(element)
```

## querySelector()
- Ele procura igual o seletor CSS dentro da DOM
    - Exemplo = `.one` `meta` `[src]`
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
        <h1 class="one">Meu Blog</h1>

        <p class="one"></p>
    </body>

    <script src="./script.js"></script>
</html>
```
JS
```js
// querySelector()

const element = document.querySelector('h1')
console.log(element)
```

## querySelectorAll()
- Ele procura igual o seletor CSS dentro da DOM porem ele puxa uma coleção
    - Exemplo = `.one` `meta` `[src]`
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
        <h1 class="one">Meu Blog</h1>

        <p class="one"></p>
    </body>

    <script src="./script.js"></script>
</html>
```
JS
```js
// querySelectorAll()

const element = document.querySelectorAll('h1')
console.log(element)
```