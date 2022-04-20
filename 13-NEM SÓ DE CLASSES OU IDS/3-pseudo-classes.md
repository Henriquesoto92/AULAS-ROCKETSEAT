# Pseudo-classes

É um tipo de seletor que irá selecionar um elemento que estiver em um estado específico.

Exemplo: É o primeiro elemento dentro de uma caixa, ou, o elemento está com o ponteiro do mouse sobre ele.

Pseudo-classes começam com 2 pontos seguido do nome da pseudo class 

`:pseudo-class-name`

## Selecionando elementos com pseudo-classes



# `:first-child`
* É quando queremos selecionar o primeiro filho de um grupo de elementos.

HTML
```HTML
<ul>
  <li>Gratidão</li>
  <li>Esperança</li>
  <li>Fé</li>
</ul>
```

CSS
```CSS
ul li:first-child {
  font-weight: bold;
}
```

# `:nth-of-type()`
* Pega o elemento por tipo e posição

HTML
```HTML
<ul>
  <h3>Palavras bonitas</h3>
  <li>Gratidão</li>
  <li>Esperança</li>
  <li>Fé</li>
</ul>
```
CSS
```CSS
ul li:nth-of-type(1) {
  font-weight: bold;
}
```

# `:nth-child()`
* Pega o elemento por tipo e posição

HTML
```HTML
<ul>
      <h3>Palavras bonitas</h3>
  <li>Gratidão</li>
  <li>Esperança</li>
  <li>Fé</li>
</ul>
```
CSS
```CSS
ul li:nth-child(2) {
  font-weight: bold;
}
```

# `:nth-child(odd)` & `:nth-child(even)`
* even - números pares
* odd - números ímpares

HTML
```HTML
<ul>
  <li>Gratidão</li>
  <li>Esperança</li>
  <li>Fé</li>
  <li>Liberdade</li>
</ul>
```

CSS
```CSS
ul li:nth-child(odd) {
  color: blue;
}

ul li:nth-child(even) {
  color: red;
}
```

## Ações do usuário
### Algumas estilos só são aplicados quando o usuário faz alguma ação na página.

* `:hover`
```CSS
a:hover {
  color: red;
}
```
Vai mudar a cor do link para vermelho quando o usuário passar o mouse sobre o link

* `:focus` 

-é aplicado quando o elemento recebe o foco da ação do usuário que pode ser feita utilizando o teclado ou clicando no elemento com o mouse. É comumente usado em campos de input como uma forma de mostrar qual o input "ativo".

```CSS

input:focus {
  border-color: red;
}
```

### Também podemos usar atributos para selecionar elementos no CSS

Atributos

`:disabled`

HTML
```html
<input type="text" disabled>
```

CSS
```CSS
input:disabled {
  background-color: green;
}
```

`:required`

HTML
```html
<input type="text" required>
```

CSS
```CSS
input:required {
  background-color: red;
}
```

### Referências
https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes