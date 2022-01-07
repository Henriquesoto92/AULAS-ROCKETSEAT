# distancias absolutas <lenght>

são fixas e não alteram o seu valor.
unidade     Nome                    Equivalência
cm          Centímetros             1cm = 96px/2.54cm
in          Inches (polegadas)      1in = 2.54cm = 96px
px          Pixels                  1px = 1/96th of 1in

* o mais comum e mais utilizado é o **px**
* não recomendado usar cm

# distâncias relativas

são relativas a algum outro valor, pode ser o elemento pai, ou root, ou o tamanho da tela

* Benefício: maior adaptação aos diferentes tipos de tela

unidade     Relativo a 
em          Tamanho da font do pai.
rem         Tamanho da font do elemento raiz (root/html)
vw          1% da viewport width. (Largura)
vh          1% da viewport height.(altura)