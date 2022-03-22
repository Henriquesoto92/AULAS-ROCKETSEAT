# Header Menu Navigation

- Crie o `<header>` de um site que contenha uma logo e um menu.
- Um elemento deverá ficar ao lado do outro.
- A logo que ficará na extrema esquerda e o menu ficará na extrema direita.
- Os itens do menu ficarão um ao lado do outro com um espaço de .8rem entre eles.
- O ultimo elemento do menu será um botão de contaot e você poderá utilizar o seletor :las-child para estilizar

HTML
```html
<header>
    <nav>
        <A href="#">LOGO</A>
        <ul>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>SERVICES</li>
            <li>TESTIMONIALS</li>
            <li>HOME</li>
            <li>CONTATC</li>
        </ul>
    </nav>
</header>
```
CSS
```CSS
* {
    margin: 0;
}
header {
    padding: 4rem;
    background: lightcyan;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

ul {
    display: flex;
    list-style: none;
    align-items: center;
    gap: .8rem
}

ul li:last-child {
    background: black;
    color: white;
    padding: .8rem;
}
```
# Layout com 2 colunas

- Crie um layout com 2 colunas, uma ao lado da outra.
- Acoluna da esquerda deverá ter 25% de tamanho e a coluna da direta deverá ocupar todo o espaço que sobra
- Faça uma separação de 1rem entre o elementos

HTML
```html
<div class="container">
    <aside>Coluna esquerda</aside>
    <main>Coluna direita</main>
</div>
```

CSS
```CSS
* {
    margin: 0;
}

.container {
    display: flex;
    gap: 1rem;

}

aside, main{
    border: 1px solid;
    height: 95vh;
}

aside {
    flex-basis: 25%;
}

main {
    flex: 1;
}
```

# 9 fotos em 3 colunas

- Crie uma galeria de fotos onde teremos 3 coluinas e 9 fotos.
- Deixe um espaço de .8rem entre os elementos da galeria.


HTML
```html
<div class="gallery">
    <img src="https://source.unsplash.com/random?id=121" alt="">
    <img src="https://source.unsplash.com/random?id=122" alt="">
    <img src="https://source.unsplash.com/random?id=123" alt="">
    <img src="https://source.unsplash.com/random?id=124" alt="">
    <img src="https://source.unsplash.com/random?id=125" alt="">
    <img src="https://source.unsplash.com/random?id=126" alt="">
    <img src="https://source.unsplash.com/random?id=127" alt="">
    <img src="https://source.unsplash.com/random?id=128" alt="">
    <img src="https://source.unsplash.com/random?id=129" alt="">
</div>
```

CSS
```CSS
img{
    width: 30%;
    height: auto;
}

.gallery{
    display: flex;
    flex-wrap: wrap;
    gap: .8rem;
    justify-content: center;
}
```

# Imagem dentro de um botão

- Crie um botão que contenha um ícone img e um texto
- Coloque um espaço de .rem entre os elementos


HTML
```html
<button>
    <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iMzJweCIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMyIDMyOyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzIgMzIiIHdpZHRoPSIzMnB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48cGF0aCBkPSJNMjguNTE2LDE0TDYsMi43NUM1LjM0NCwyLjQ1Myw0LjY3MiwyLDQsMkMyLjkyMiwyLDIsMi45MDYsMiw0djI0YzAsMS4wOTQsMC45MjIsMiwyLDJjMC42NzIsMCwxLjM0NC0wLjQ1MywyLTAuNzUgIEwyOC41MTYsMThDMjkuMDYzLDE3LjczNCwzMCwxNy4xODgsMzAsMTZTMjkuMDYzLDE0LjI2NiwyOC41MTYsMTR6IE02LDI0Ljc3OFY3LjIyMkwyMy41NjgsMTZMNiwyNC43Nzh6Ii8+PC9zdmc+" alt="">

    Play
</button>
```

CSS
```CSS
button{
    display: flex;
    align-items: center;
    line-height: 0;
    gap: .4rem;
}

button img{
    width: 2rem;
    height: 2rem;
}
```

# Footer

- Crie o `<footer> de um site que contenha a data de criação do site.
- Usando flex, alinhe o elemento do footer bem ao meio
- Deixe um altura de 8rem para o footer.
- o footer deverá ficar no final da página

HTML
```html
<footer>
    2022
</footer>
```
CSS
```CSS
* {margin: 0%;}
body {
    min-height: 100vh;
    display: flex;
}

footer{
    margin-top: auto;
    background-color: gray;
    color: white;
    height: 8rem;
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: center;
}
```