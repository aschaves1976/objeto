// pessoa -> 123 -> {...}, onde:
// 123 = endereço de memória e {...} = um objeto qualquer dentro do endereço de memória
const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro'

console.log(pessoa.nome)

// pessoa -> 456 -> {...}, onde:
// 456 = endereço de memória e {...} = um objeto qualquer dentro do endereço de memória
// neste caso dará erro, pois esta tentando atribuir a pessoa um novo endereço de memória
//const pessoa = {nome: 'Ana'}

Object.freeze(pessoa) //neste momento o objeto pessoa se tornou constante, ou seja, não sofrerá mais nenhuma modificação
pessoa.nome = 'Maria'

console.log(`Como o objeto foi congelado, a atribuição de um novo nome não surte
efeito.
O valor de pessoa.nome continua sendo ${pessoa.nome}`)

const pessoaConstante = Object.freeze({nome : 'João'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)