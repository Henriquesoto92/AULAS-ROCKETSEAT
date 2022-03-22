# Layouts e evolução

Layout tem a ver com a maneira que os elementos estão distribuidos na tela

## Normal flow

Ou flow Layout é a mmaneira que os elementos `block` e `inline` ficam na página

```html
<p> texto block com <strong>inline</strong> dentros </p>
```

## Tables

É a maneira de tabelas onde a tag `table` recebe um display `table` fazendo com que o selementos internos como `td`e `tr` possam ser usados para montar uma tabela

```html
<table>
    <tr>
        <td> hora</td>
        <td>20:00</td>
    </tr>
    <tr>
        <td>hora</td>
        <td>20:37</td>
    </tr>
</table>
```

## Tabless

Uso das propriedades `float`, `clear` para que os elementos possam mudar de posição na tela.

```html
<div style="float: left">
    esquerda
</div>

<div style="float: right">
    direita
</div>

<div style="clear: both">
    direita
</div>
```

## Flexbox
A caixa se torna flex, fazendo com que os elementos internos possam receber melhor:

- Alinhamento
- Ordenação
- Tamanhos flexíveis