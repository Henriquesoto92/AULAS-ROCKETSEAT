# atividade
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>

        <link href="https://unpkg.com/tailwindcss/dist/tailwind.min.css" rel="stylesheet">
    </head>
    <body class="h-screen bg-purple-100 flex flex-col items-center justify-center">

        <button id="openModal" class="bg-purple-700 text-white py-2 px-4 rounded">
            Abrir Janela
        </button>

        <div class="modal-wrapper invisible fixed bg-gray-500 w-screen h-screen flex items-center justify-center">
            <div class="p-8 bg-white text-center rounded">
                Tecle ESC para fechar
            </div>
        </div>
        
        <script src="./script.js"></script> 
    </body>
</html>
```

```js
const buttonOpenModal = document.getElementById('openModal')

const modalWrapper = document.querySelector('modal-wrapper')

buttonOpenModal.onclick = function() {
    modalWrapper
        .classList
        .remove('invisible')
}

document.addEventListener('keydown', function(event) {
    const isEscKey = event.key === "Escape"

    if(isEscKey) {
        modalWrapper.classList.add('invisible')
    }
}) 
```