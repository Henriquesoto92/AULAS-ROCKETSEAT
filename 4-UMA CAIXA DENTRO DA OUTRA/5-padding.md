## padding

Preenchimento interno da caixa

- Padding-top | padding-rigth | padding-bottom | padding-left
- values: `<length>` Z `<percentage>` | auto

```css
div {
    /* shorthand */
    padding: 12px 16px 10px 6px;    /* T R B L */
    padding: 12px 16px 0;           /* T RL B */
    padding: 8px 12px;              /* TB RL */
    padding: 8px;                   /* TBRL */
}
```
padding poderá causar diferença na larguda de um elemento

```css
* { margin: 0; }

div, section {
  border: 1px solid red;
  padding: 10px 2em 8px 50%;
}
```