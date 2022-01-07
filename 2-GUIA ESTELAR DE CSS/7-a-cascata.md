# A Cascata (cascanding)

A Escolha do browser de qual regra aplocar, caso haja muitas regras para o mesmo elemento.

* Seu estilo é lido de cima para baixo.

é levado em consideração 3 fatores

1. origem
2. especificidade
3. importância

### Origem do estilo 

Inline > Tag Style > Tag Link

<style> 
 h1 { color:gray 
 }
</style> <!--esse é o segundo-->

<h1 style="color: green"><!--esse é o primeiro -->Título</h1>
<p>paragrafo</p>

```css
h1 { color: red
}
<!--esse é o terceiro--> 
```



### Especificidade
é um cálculo matemático, onde, cada tipo de seletor e oregem do estilo, possuem valores a serem considerados.
0. Universal selector, combinators e negation pseudo-class (:note())
1. Element type select e pseudo-elements(::before, ::after)
10. classes e attribute selectors ([type="radio"])
100. id selector
1000. inline
= ficar atento, aonde colocar e como fazer a soma.

### a regra !important
* Cuidado, Evite o uso
* não é considerado uma boa prática
* quebra o fluxo natural da cascata
= aonde você colocar o !important, ele vai ser como rei dentro do CSS, desrespeitando todos os limites impostos, tanto pela cascata quando pelo calculo