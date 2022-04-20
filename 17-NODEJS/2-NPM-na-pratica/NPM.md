# NPM

Node Package Manager

__Glossary: Dependencies, Packages, Modules__

- [X] Verificar se temos o NPM instalado `npm -v` (possui)
- [X] Criar nosso próprio pacote (`npm init` ou `npm init -y`{para selecionar o que criar ou para criar direto})
- [X] O que é o arquivo package.json (DA PRA ALTERAR E ESCOLHER O QUE QUISER FAZER)
- [X] Utilizar módulos de terceiros (`npm i cfonts` / `npm update` / `npm i cfonts -D`{muda a dependencia para não precisar baixar})
- [X] O que é o diretório node_modules ( todas informações das dependecias ficam dentro do node_modules {não precisa enviar, é so criar uma pasta .gitignore})
- [X] O que é o Arquivo Packege-lock.json(não tocar, ele faz a manutenção dos modules)
- [X] Criar scripts para rodar com o npm (`npm run start` ou `npm start` / de preferencia sempre usar o RUN para rodar o codigo. isso vai dentro do package.json/ scripts e roda o que tiver escrito lá)
- [X] Instalar pacote de maneira global (`npm i opn -g` para instalar / `npm root -g` - para verificar aonde foi instalado.)
- [X] Desinstalar pacotes (`npm unisntall opn -g` para desinstalar)
- [X] Mudar versão de pacotes (major{= versão do projeto}.minor{não vai quebrar nada dentro do projeto}.patch{arrumando bugs} {^sginifica que vai fazer  upgrade no X: 0.x.x} {~sginifica que vai fazer  upgrade no X: 0.0.x} {^todas as versões X: *}{`npm outdated` - para verificar qual versão baixar} {`npm upgrade` - instala todas as novas versões} {})