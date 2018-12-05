const a = 1
const b = 2
const c = 3

const obj1 = {a: a, b: b, c: c} // antes
const obj2 = {a, b, c}          // atualmente
console.log(obj1)
console.log(obj2)

const nomAttr   = 'nota'
const valorAttr = 7.99

const obj3 = {}
obj3[nomAttr] = valorAttr            // antes
const obj4 = {[nomAttr] : valorAttr} // atualmente
console.log(obj3)
console.log(obj4)

const obj5 ={
    funcao1: function(){
        //... 
    },                    // antes
    funcao2(){
        //...
    }                     // atualmente
}

console.log(obj5)