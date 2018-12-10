const pessoa ={
    nome: 'Lucas',
    idade: 3,
    peso: 14.5
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))
Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})
Object.entries(pessoa).forEach(([chave, valor]) =>{
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, //determina se o atributo pode ser listado
    writable: false, //determina se o atributo pode ser modificado
    value: '01/01/2019' 
})
pessoa.dataNascimento = '02/03/2017'
console.log(pessoa.dataNascimento)

//Object.assign(ECMAScript 2015)
const dest ={a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj =Object.assign(dest, o1, o2) // obj ira receber todos os elementos dos demais objetos, concatenados
Object.freeze(obj)
obj.c = 12345
console.log(obj)