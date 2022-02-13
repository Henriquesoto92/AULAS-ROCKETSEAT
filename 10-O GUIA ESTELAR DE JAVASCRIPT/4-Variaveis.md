# Variáveis

* nomes simbólicos para receber algum valor
* Atalhos de código
* Identificadores
* 3 palavras reservadas para criar uma variável
    * var
    * let
    * const

```html
<script>

    //var
    var clima = "quente"
    clima = "frio"
    console.log(clima)
</script> -->

<script>

    //let
    let clima = "quente"
    clima = "frio"

    console.log(clima)
</script> -->

<script>

    //const
    const clima = "quente"
    clima = "frio"

    console.log(clima)
</script>
```

O JS é uma linguagem fracamente tipada e dinâmica
- Variaveis não precisam ter um tipo previamente definido
- Podemos Mudar o conteúdo da variavel

```html
<script>

    let clima = true // boolean
    clima = "" // string
    clima = 0 // number

    console.log(typeof clima)
</script>
```