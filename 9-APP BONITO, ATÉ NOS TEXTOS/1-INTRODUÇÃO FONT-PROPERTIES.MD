# Trabalhando com fontes

Tipografia transmite mensagem

    - Negrito
    - Tamanho
    - estilo

## Basic Font Properties

* font-family
* font-weight
* font-style
* font-size

## Font Family

* Tipo de fonte de um elemento
* Lista de fontes e ordem de prioridade
* Inclui *fallback* font

```css
p {
    font-family: "times new roman", times, serif;
}
```
```html
<P>
    o rato roeu a roupa do rei de roma
</P>

    - serif
    - sans
```
## font-weight

* peso da fonte
```css
p{
    font-weight: bold;
}
```

## Font-style

* o estilo da fonte
```css
p{
    font-style: italic;
}
```
## Font-size

* Tamanho da fonte
*/unidades de medidas padrão/*
```css
p{
    font-size: 30px;
    /*unidades de medidas padrão*/
}
```

## Web fonts

- Fontes do sitema x Fontes da web
- como usar fontes para web?

    * @font-face
    * @import
    * Link

### Referencias

https://fonts.google.com/

https://css-tricks.com/snippets/css/using-font-face/