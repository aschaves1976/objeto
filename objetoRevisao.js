// objeto é uma coleção dinamica de pares chaves/valores
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Genérica'
produto.preco = 220

console.log(produto)

delete produto.preco
delete produto['marca do produto']

console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        Endereco: {
            logradouro: 'Rua ABC',
            numero: 1000
        }
    },
    condutores: [{
        Nome: 'Ana',
        idade: 42
    }, {Nome: 'Junior',
        idade: 19
    }],
    calcularValorSeguro: function(){
        //...
    }
}
console.log(carro.proprietario)
console.log(carro)
carro.proprietario.Endereco.numero = 1200
console.log(carro.proprietario)

console.log(carro.condutores.length)
delete carro.proprietario.Endereco
delete carro.condutores
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores)
//console.log(carro.condutores.length) apresenta erro pois o array foi deletado na linha 42