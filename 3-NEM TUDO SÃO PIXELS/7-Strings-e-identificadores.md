# strings e identificadores

* Strings: Texto Envolto em Aspas
* identificadores: red, black, gold

```Css
body {
  height: 100vh;
  margin: 0;
}

.box {
  heigth: calc(100% - 40px);
  width: 200px;
  background-image: url(http://source.unsplash.com/random);
  background-repeat: no-repeat;
  background-position: right 50px;
}

.box::after {
  content:"aqui vem alguma mensagem";
  color: black;
}
```
no caso, a string é o que esta dentro das aspas do content
e o indentificador é o color.