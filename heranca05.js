console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

console.log(`String, Array e Object tem um atributo chamado prototype,
porque toda função tem um atributo chamado prototype`)

String.prototype.reverse = function(){
    /**
     * A função String por padrão não possui o metodo reverse. Estamos criando um metodo na função
     * String que executa um reverse.
     * this.split() retorna um array e Arrays possuem a função reverse
     */
    return this.split('').reverse().join('')

}
console.log('Alessandro da Silva Chaves'.reverse())
Array.prototype.first = function(){
    return this[0]
}

console.log([1, 2, 3, 4, 5].first())
console.log(['a','b','c','d','e'].first())

//Não se deve mexer em funções já presentes nos prototipos
String.prototype.toString = function(){
    return 'Não mexa onde não deve !!!'
}
console.log('Não vai ser essa frase...'.reverse())