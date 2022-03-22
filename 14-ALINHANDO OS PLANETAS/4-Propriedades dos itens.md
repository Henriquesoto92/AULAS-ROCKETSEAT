# Propriedades para os itens

## flex-basis
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
}

.box div{
    border: 1px solid;
    flex-basis: 25vh;
}
```



## flex-grow

- O crescimento do item dentro do containes em relação aos espaços vazios

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
}

.box div{
    border: 1px solid;
}

.box div:nth-child(2),
.box div:nth-child(3) {
    flex-grow: 1;
}
.box div:nth-child(1) {
    flex-grow: 2;
}
.box div:nth-child(4) {
    flex-grow: 5;
}
```

## flex-shrink
- Encolher do item dentro do container
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
}

.box div{
    flex-basis: 40px;
    border: 1px solid;
}

.box div:nth-child(2),
.box div:nth-child(3){
    flex-shrink: 2;
}
```

## flex
- shorthand
- flex-grow flex-shrink flex-basis
- podem ter 1,2 ou 3 valores
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
}

.box div{
    flex: 0 1 40px ;
    border: 1px solid;
}
```

# Alterando o tamanho de multiplos itens
HTML
```html
<div class="page">
    <aside>Aside</aside>
    <main>
        Main
        <section>Contet 1</section>
        <section>Contet 2</section>
        <section>Contet 2</section>
    </main>
</div>
```
CSS
```css
*{
  
}
.page {
    border: 2px solid;
    min-height: 100vh;
    display: flex;
}
aside {
    background: lightgreen;
    flex: 1;
}
main {
    background: lightblue;
    flex: 2;
    display: flex;
    flex-direction: column;
}
main section:nth-child(1) {
    background: lightgoldenrodyellow;
    flex: 2 ;
}
main section:nth-child(2) {
    background: lightsalmon;
    flex: 0 50vh;
}
main section:nth-child(3) {
    background: lightpink;
    flex: 1;
}
```

## order
- somente visual, não interfere na acessibilidade

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
}

.box div{
    flex: 0 1 40px ;
    border: 1px solid;
}

.box div:nth-child(1){
    order: 1;
}
.box div:nth-child(2){
    order: 20;
}
.box div:nth-child(3){
    order: 0;
}
.box div:nth-child(4){
    order: -1;
}
```