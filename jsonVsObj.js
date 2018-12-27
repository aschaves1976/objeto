const obj = {a:1, b:2, c:3, soma(){return a + b + c}}
//transforma um objeto para JSON (formato textual)
console.log(JSON.stringify(obj))
// transforma formato texto(JSON) para um objeto
console.log(JSON.parse('{"a":1, "b":2, "c":3}'))
console.log(JSON.parse('{"a":1, "b": "textos e atributos devem se delimitados por aspas duplas no JSON", "c":{"ac":123.446}, "d": ["casa",1, false], "e": true}'))

// link para validar se o texto é um JSON - https://jsonlint.com/