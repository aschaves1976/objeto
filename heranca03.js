const pai ={
    nome: 'Alessandro',
    corCabelo: 'Castanho Escuro'
}

const filho1 = Object.create(pai)
console.log(filho1, filho1.nome, filho1.corCabelo)
filho1.nome = 'Lucas'
//filho1.corCabelo = 'Castanho Claro'
console.log(filho1, filho1.nome, filho1.corCabelo)
//O objeto filho2 não pode ter o seu nome alterado e o atributo pode ser listado
const filho2 = Object.create(pai,{
  nome : {value: 'Herbywyby', writable: false, enumerable: true}
})
console.log(filho2.nome)
// Tentativa de trocar o nome do filho2
filho2.nome = 'João'
console.log(`${filho2.nome} tem cabelo ${filho2.corCabelo}`)

console.log(Object.keys(filho1))
console.log(Object.keys(filho2))
// usando foreach com condicional ternário
for (let key in filho2){
    filho2.hasOwnProperty(key)?
      console.log(key) :
      console.log(`Por herança: ${key}`)
}
