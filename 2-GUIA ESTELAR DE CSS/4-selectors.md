# Selectors

conecta um elemento HTML com o CSS]

## Tipos

* Global Selector '*'
* Element/type selector 'h1, h2, p, div'
* id Selectors '#box, #container'
* Class selector '.Red, .m-4'
* Atribute selector, Pseudo-class, Pseudo-element, e outros

<div id="container" class="m-40">
  <h1>Título<h1>
  <h2>Subtitulo</h2>
</div>

```css
* {margin; 0;}

#container {width:200px}

.m-40 {margin: 40px;}

h1, h2 {
    color: Blue;
    font-size: 60px;
    background: gray;
}
```