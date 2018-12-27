/**
 * Object.preventExtensions
 * não permite que o objeto seja extendido, ou seja, que se crie novos atributos dentro dele
 */
const produto = Object.preventExtensions({
    nome: 'lápis', preco: 1.99, tag:'Promoção'
})
// testando se o objeto criado é extensível
console.log('Extensivel?', Object.isExtensible(produto))

produto.nome = 'Borracha' //modificando o conteúdo do atributo nome
produto.descricao = 'Borracha escolar'  // criando um novo atributo no objeto produto - nao vai surtir efeito
delete produto.tag // deletando um atributo do objeto

console.log(produto)

/**
 * Object.seal
 * sela o objeto, nao permitindo criar ou excluir atributos no mesmo
 */
const pessoa = {
    nome: 'Lucas', idade: 3
}
Object.seal(pessoa)
console.log('Selado? ', Object.isSealed(pessoa))

pessoa.sobrenome = 'Chaves'
pessoa.idade = 10
delete pessoa.nome

console.log(`Não foi possível criar sobrenome nem excluir nome, porém idade foi alterado
`, pessoa)

/**
 * Object.freeze
 * não permite incluir ou excluir atributos nos objetos e nem modificar os valores dos atributos
 */