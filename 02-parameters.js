//Forma antiga

function printGreetings(message) {
    console.log(message ? message : 'Mensagem padrão')
}

printGreetings()
//Dessa forma, caso não seja passada uma mensagem no parametro da função ele retorna a mensagem padrão


//Forma moderna

function youWelcome(message = 'Mensagem Padrão') {
    console.log(message)
}

youWelcome('Aqui!')
//Desta forma, assim como na maneira antiga, caso uma mensagem não seja setada na chamada da função, ela retorna a mensagem padrão que é declarada no parametro da função