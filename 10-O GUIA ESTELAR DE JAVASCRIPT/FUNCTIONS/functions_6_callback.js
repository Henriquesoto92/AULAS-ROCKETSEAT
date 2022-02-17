// callback fuction

function sayMyName(name) {
    console.log('antes de executar a funcao callback')

    name()

    console.log('depois de executar a funcao callback')
}

sayMyName(
    () => {
        console.log('estou em uma callback')
    }
)