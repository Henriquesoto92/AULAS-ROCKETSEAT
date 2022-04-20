## Para criar nomes

* JS é Case-sensitive (sensível ao caso)
* JS aceita a cadeia de caracteres Unicode

- Posso:
    * Iniciar com esses caracters especiais: $ _
    * iniciar com letras
    * Colocar acentos
    * Letras maíusculas e minúsculas fazem diferença
```js
    let álisson = 'álisson'
    let alisson = 'alisson'
    let Alisson = 'Alisson'
    let Álisson = 'Álisson'
```
    ( todos são diferentes )

- Não posso:
    * Iniciar com números (```js let 123 = 123 ```)
    * Colocar espaços vazios no nome (```js let oi aqui é = 'oi aqui é ```)

- Ideal:
    * Criar nomes que fazem sentido
    * Que Explique o que a variável é ou faz
    * camelCase (SempreAPrimeiraLetraÉMaiuscula)
    * snake-case (Sempre_usa_o_underline_como_forma_de_espaço)
    * Escrever em inglês (prefer_use_inglish)