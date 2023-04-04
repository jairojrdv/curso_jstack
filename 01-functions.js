//Diferença entre function e arrow function

function minhaFuncao() {
    //this significa ESTE
    this.name = 'Jairo';
}

// //new é um método construtor que transforma minha função em um objeto, e conseguimos atribuir propriedades a esse objeto usando o this
console.log(new minhaFuncao())


//Obs: não dá pra usar new em arrow function
//this e window são as mesma coisas quando se fala de browser
//A arrow function usa o this do contexto que foi criada, já a function cria seu próprio contexto usando o new
const minhaArrowFunction = () => {
    this.name = 'Jairo'

};

minhaArrowFunction();
console.log(this);