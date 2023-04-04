//Como fazer essa função receber esses valores de forma dinâmica

function soma() {
    //arguments é uma palavra reservada JS
    console.log(Object.values(arguments))
}

soma(1, 2, 3, 4, 5, 6, 7, 'Jairo');


function somar(primeiroParametro, ...argumentos){
    console.log(primeiroParametro)
    console.log(argumentos)
}

somar(1, 2, 3, 4, 5, 6, 7, 'Jairo');