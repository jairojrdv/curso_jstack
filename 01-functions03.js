//formas de usar functions
//Forma 1:  Short syntax
const soma = () => 'Hello World!';

// console.log(soma())

//forma 2: com parênteses, bom para usar ternário
const algumNumero = 10;

const somando = () => (
    algumNumero >= 10
    ? 'Maior igual a 10'
    : 'Menor que 10'
)
console.log(somando())

//forma 3: sem usar return
const getUser = () => ({
    id: '123',
    name: 'Mateus'
});

console.log(getUser());