# Cores

Usamos CSS para alterar cores do nosso documento.

## Tipos

* background-color (para caixas)
* color (para textos)
* border-color(para-caixas)
* Outros...

## Valores

Podemos definir os valores por

* Palavra-chave (blue, trasparent)
* Hexadecimal (#089)
* Funções: RGB, RGBA, HSL, HSLA.

```CSS

element{
    /* keyword values */
    color: currentcolor;

    /* <named-color> values */
    color: red;
    color: orange;
    color: tan;
    color: rebeccapurple;
    
    /*<hex-color> values 0-f */
    color: #090; /* red green blue */
    color: #009900;
    color: #090a;
    color: #009900aa;

    /*<rgb()> values */
    color: rgb(34, 12, 64, 0.6); /* 0-255 */
    color: rgba(34, 12, 64, 0.6);
    color: rgb(34 12 64 / 0.6);
    color: rgba(34 12 64 / 0.3);
    color: rgb(34.0 12 64 / 60%);
    color: rgba(34.6 12 64 / 30%);

    /*<hsl()> values */
    color: hsl(30, 100%, 50%, 0.6); /* Hue - Saturation - Lumniance */
    color: hsla(30, 100%, 50%, 0.6);
    color: hsl(30 100% 50% / 0.6);
    color: hsla(30 100% 50% / 0.6);
    color: hsl(30.0 100% 50% / 60%);
    color: hsla(30.2 100% 50% / 60%);

    /* global values */
    color: inherit;
    color: initial;
    color: unset;
}

```

# referências

Https://developer.mozilla.org/en-us/docs/web/css/color_value