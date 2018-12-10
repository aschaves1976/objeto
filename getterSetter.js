const sequencia ={
    /**
     * Quando é utilizado "_" antes do nome do atributo / variável
     * está implicitamente informado que esta variável só deve ser
     * acessada internamente, dentro do objeto onde ela foi definida
     */
    _valor: 1, // convenção
    get valor(){
        return this._valor++
    },
    set valor(valor){
        if(valor > this._valor){
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 999 // o resultado não 
console.log(sequencia.valor, sequencia.valor)
