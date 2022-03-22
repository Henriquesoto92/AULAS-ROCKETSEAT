# Propriedades do Flex Container

* direção dos itens

    - Flex é um dimensão (horizontal ou vertical)
    - Podemos mudar a direção com `flex-direction`
    - valores: (row | row-reverse | column | column-reverse)

HTML
```html
<div class="container">
    <div class="item">A</div>
    <div class="item">B</div>
    <div class="item">C</div>
</div>
```
CSS
```css
.container {
  display: flex;
  flex-direction: column-reverse;
  height: 80vh;
}
```

* Multi linhas
# flex-wrap
- Podemos usar multi linhas
- Cada nova linha, um novo flex container
HTML
```html
<div class="box">
    <div>A</div>
    <div>B</div>
    <div>C</div>
    <div>D</div>
</div>
```
CSS
```css
.box {
    display: flex;
    border: 1px dashed red;
    flex-wrap: wrap;
    justify-content: center;
}

.box div{
    border: 1px solid;
    width: 80px;
}
```

# flex-flow
- Shorthand
- flex-direction || flex-wrap

HTML
```html
<div class="box">
    <div>A</div>
    <div>B</div>
    <div>C</div>
    <div>D</div>
</div>
```
CSS
```css
.box {
    display: flex;
    flex-flow: row wrap;
    border: 1px dashed red;
}

.box div{
    border: 1px solid;
    width: 80px;
}
```

# Alinhamento
## Principal
# justify-content
- Alinhamento dos elementros dentro do container
- Distribuição dos elementos
## valores
- flex-start
- flex-end
- center
- space-around
- space-between
- space-evenly

HTML
```html
<div class="box">
    <div>A</div>
    <div>B</div>
    <div>C</div>
    <div>D</div>
</div>
```
CSS
```css
.box {
    display: flex;
    justify-content: space-evenly;
    border: 1px dashed red;
}

.box div{
    border: 1px solid;
}
```

## Cruzado
# align-itens
- alinhamento dos elementos no eixo cruzado
## valores
- stretch
- flex-start
- flex-end
- center

HTML
```html
<div class="box">
    <div>A</div>
    <div>B</div>
    <div>C</div>
    <div>D</div>
</div>
```
CSS
```css
.box {
    display: flex;
    align-items: center;
    border: 1px dashed red;
    height: 150px
}

.box div{
    border: 1px solid;
}
```

## Espaços entre os itens
# gap
- Espaços entre os elementos

## valores

- unidades de medidas
- fixas: px, pt
- flexíveis: %, em, rem, vh

HTML
```html
<div class="box">
    <div>A</div>
    <div>B</div>
    <div>C</div>
    <div>D</div>
</div>
```
CSS
```css
.box {
    display: flex;
    border: 1px dashed red;
    align-items: center;
    gap: 20vh;
}

.box div{
    border: 1px solid;
}
```