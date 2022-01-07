## margin

espaços entre os elementos
- margin-top | margin-right | margin-bottom | margin-left
- values: `<length>` Z `<percentage>` | auto

```css
div {
    /* shorthand */
    margin: 12px 16px 10px 6px;     /* T R B L */
    margin: 12px 16px 0;            /* T RL B */
    margin: 8px 12px;               /* TB RL */
    margin: 8px;                    /* TBRL */
}
```
*cuidado com margin collapsing (top se ajunta ao bottom)

```html
<Div>
  margin
</Div>

<section>elemento a baixo</section>
```

```css
* { margin: 0; }

div, section {
  border: 1px solid red;
  height: 100px;
  width: 100px;
}

div {
  margin-bottom: 8px;
}

section {
  margin-top: 12px;
}
```
ele não soma os `margin-top` e `margin-bottom`

mas se fosse o `display: inline` ele somaria os margins nas laterais

```css
* { margin: 0; }

div, section {
  border: 1px solid red;
  height: 100px;
  width: 100px;

  margin: 10px auto;
}
```
no caso acima, daria para usar o auto para ajustar e centralizar no centro,