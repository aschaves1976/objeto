// Cadeia de prototipos (Prototype Chain)
Object.prototype.attr0 = '0' // isso deve ser evitado; foi utilizado para apresentar o conceito de herança
const avo ={attr1: 'A'}
const pai ={__proto__: avo, attr2: 'B', attr3: '3'}
const filho = {__proto__: pai, attr3: 'C'}

console.log (filho.attr0, filho.attr1, filho.attr2, filho.attr3)

const carro ={
    velAtual: 0,
    velMax: 200,
    aceleraMais(delta){
        if (this.velAtual + delta <= this.velMax){
            this.velAtual += delta 
        }else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}Km/h: de ${this.velMax}Km/h:`
    }
}

const ferrari ={
    modelo: 'F40',
    velMax: 340 //Shadowing - sombreamento do atributo do objeto pai
}
const volvo ={
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

// agora esta sendo definido que os objetos ferrari e volvo são filhos do objeto carro
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)


ferrari.aceleraMais(200)
console.log(ferrari.status())

volvo.aceleraMais(400)
console.log(volvo.status())