## box-sizing
Como será calculado o tamanho total da caixa?

- content-box | border-box
```css
div{
    box-sizing: border-box;
}
```

```html
<div>
  CSS é Incrivel
</div>
```
```css 
div {
  width: 100px;
  height: 100px;  
  border: 1px solid red;
  margin: 10%;
  padding: 0 20px;
  
  box-sizing: border-box
}
```

ou seja, quando eu quiser que a caixa tenha realmente o tamanho no qual eu digitei, devo usar o `box-sizing: border-box`