## display: block vs Display: inline

- como as caixas se comportam em relação às outras caixas
- comportamento externo das caixas

**block**
    - Ocupa toda a linha, colocando o proximo elemento abaixo desse.
    - Width e Height são respeitados.
    - Padding, margin, border irão funcionar normalmente.

**inline**
    - Elemento ao lado do outro.
    - Width e height não funcionam.
    - Somente valores horizontais de margin, padding e border.

Exemplos:

Block: `<p> <div> <section>`todos os headings `<h1><h2>...`
Inline: `<a> <strong> <span> <em>`

```html
<div>  um exemplo block  </div> outro conteudo
```
Exemplo Block

```html
<a>  um exemplo block  </a> outro conteudo
```
Exemplo inline

## como ficam 
```html
<Div>
  blocke
</Div>

<span>inline</span>
```

```css
div {
  heigth: 100px;
  border: 1px solid red;
  width: 10px;
}

span{
  width: 10px;
  height: 100px;
  border: 1px solid green;
}
```

mas se eu quiser eu posso colocar `display: inline` ou ao contrario para converter, tanto a `div` quando o `span`