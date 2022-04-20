## background

- Define um fundo para o nosso elemento
- Sua área de atuação é a caixa toda
- por padrão, é transparente

### Exemplos

- Usar cores sólidas
- Usar Imagens
- Controlar
    - A posição das imagens,
    - Se elas se repetem ou não
    - O tamanho delas na caixa
- Usar cor e imagem juntas
- Usar cor gradiente
```html
<header>

</header>

<main>
    <h1> evolua rápido com a tecnologia. </h1>
    <p> Junte-se a milhares de devs e acelere na direção dos seus objetivos.</p>
    <h1> evolua rápido com a tecnologia. </h1>
    <p> Junte-se a milhares de devs e acelere na direção dos seus objetivos.</p>
    <h1> evolua rápido com a tecnologia. </h1>
    <p> Junte-se a milhares de devs e acelere na direção dos seus objetivos.</p>
</main>
```
```css
* { margin: 0; }

main{
  color: white;
  padding: 8px;
  
  background-color: rgb(55 100 50 / 10);
  background-image: url(https://www.rocketseat.com.br/_next/image?url=%2Fassets%2Ficons%2Fbusiness.svg&w=96&q=100);
  background-repeat:  no-repeat; 
  /* poderia usar `repeat-y` (repetir somente no eixo Y) ou `repeat-x` (repetir somente no eixo x)*/
  background-position:  center;
  /* utilizado para definir o local da imagem dentro da caixa*/
  background-size: contain; 
  /* `cover` para toda imagem ficar na caixa |`contain` para toda imagem ficar no tamanho da caixa |`100%` para definir porcentagem do tamanho da caixa | posso ainda usar `100% 50%` mas a imagem vai ficar "esticada"*/
  background-origin: content-box;
  /* `border` para imagem invadir a borda |`content` para imagem ficar antes da borda |`padding` para imagem ficar um pouco antes da borda */
  background-clip: content-box;
  /* `border` para cor invadir a borda |`content` para cor ficar antes da borda |`padding` para cor ficar um pouco antes da borda */
  background-attachment: fixed;
  /* `fixed` fixa sem mecher com o scroll |`scroll` move junto */
}
```

* posso fazer shorthand tambem, mas, eu particularmente não gostei. acho que perde um pouco da organização, por padrão, vou tentar não usar

```css
main{
    color: white;
    padding: 8px;
    background: linear-gradient(green, purple);
}
```
da pra usar o gradient tambem..
fica bem legal