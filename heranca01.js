const ferrari ={
    modelo: 'F40',
    velMax: 340
}
const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__) //este comando permite acessar o objeto pai de ferrari, o protótipo
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__) // retorna null pois Objetc é o maior na hierarquia, não existindo nenhum outro objeto pai dele

function MeuObjeto(){}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)
