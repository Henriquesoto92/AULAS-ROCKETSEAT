# scope

* Escopo determina a visibilidade de alguma variável no JS

# block statament
```js
// vamos iniciar um bloco
{
    //aqui dentro é um bloco e posso colocar qualquer código.
} //aqui fechamos o bloco
```

o bloco, também criará um novo escopo. chamamos de `block-scoped`
```html
<script>

{
    let x = 0
    console.log(x)
}

</script>
```

## Var
```js
// var é global e poderá funcionar fora de um escopo de bloco
console.log('> existe x antes do bloco? ', x)

{
    var x = 0
}
console.log('> existe x depois do bloco? ', x)

```
```html
<script>
// const e let são locais e só funcionam no ecopo onde foi criada
let y = 1;
{
    let y = 0
    console.log('> existe y antes do bloco? ', y)
}
console.log('> existe y depois do bloco? ', y)
</script>

<script>
// const e let são locais e só funcionam no ecopo onde foi criada
const y = 1;
{
    const y = 0
    console.log('> existe y antes do bloco? ', y)
}
console.log('> existe y depois do bloco? ', y)
</script>