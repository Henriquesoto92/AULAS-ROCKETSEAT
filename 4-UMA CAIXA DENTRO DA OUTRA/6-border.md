## border (e outline)

as bordas da caixa

- value: `<border-style>` | `<border-width>`| `<border-color>`
    - style: solid | dotted | dashed | double | groove | ridge | inset | outset
    - width: `<length>`
    - color: `<color>`

```css
div {
    /* shorthand */
    border-top: solid 2px; /*top | rigth | bottom | left */

    /* style */
    border: solid;

    /* width <length> | style */
    border: 2px dotted;

    /* style | color */
    border: outset #f33;

    /* width | style | color */
    border: medium dashed Green;
}
```
```css
* { margin: 0; }

div, section {
  width: 100px;
  height: 100px;
  margin: 20% auto;
  
  border: 20px solid red;
  border-top: dotted green 10px;
  box-sizing: border-box /*server para colocar a borda para dentro*/
}
```
```css
* { margin: 0; }

div, section {
  width: 100px;
  height: 100px;
  margin: 20% auto;
  
  border: 20px solid red;
  border-top: dotted green 10px;
  border-bottom: none;
}
```



### e outline?

- difere em 4 sentidos:
    - Não modifica o tamanho da caixa, pois não é parde do box model
    - Poderá ser diferente de retangular
    - Não permite ajuste individuais
    - Mais usado pelo user agente para acessibilidade