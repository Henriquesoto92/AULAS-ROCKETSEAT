# porcentagens %

* Em muitos casos é tratado da mesma maneira que as distâncias <length>
* sempre será relativo a algum valor

```html
<p>
    oi
</p>
```
```css
html {
    font size: 50%
}
```
* ele faz a porcentagem de todo o tamanho HTML ,no caso, o padrão é 16 e fica 8

```html
<ul>
    <li>one</li>
    <li>two</li>
    <li>three
        <ul>
            <li>three a</li>
            <li>three b
                <ul>
                    <li>three a</li>
                </ul>
            </li>
        <ul>
    <li>
</ul>
```
```css
li {
    font size: 80%
}
```
* no caso acima, ele fica a lista 1 fica com 80% do tamanho
* a lista 2 fica com 80% dos 80% da lista 1
* a lista 3 fica com 80% dos 80% da lista 2
* sempre fica diminuido cada vez mais..

```html
<div></div>
```
```css
body {
    width: 50%;
}
div {
    background color: blue;
    width: 50%;
    height: 100px;
}
```
* no caso acima, o tamanho da faixa, obdeceu primeiramente o `div` depois obdeceu o  `body`, mesmo esquema do exemplo acima, só que no formato cascata do CSS