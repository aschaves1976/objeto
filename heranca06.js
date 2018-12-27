// Aula é uma funcao construtora
function Aula(nome, videoId){
    this.nome = nome
    this.videoId = videoId
}
const aula1 = new Aula('Bem vindo', 123)
const aula2 = new Aula('Até breve', 456)

console.log(aula1, aula2)

//simulando o new

function novo(f, ...params){
    /**
     *  ... => operador spread and rest recebe um conjunto de parametros e
     * concatena tudo em um array
     * Passos dentro da função:
     * 1 - cria um objeto novo
     * 2 - associa o protótipo do objeto ao atributo prototype da função
     * 3 - execução da função que foi passada
     * */
    const obj = {}  
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, 'Bem vindo', 123)
const aula4 = novo(Aula, 'Até Breve', 456)

console.log(aula3, aula4)
