const x = 10 // não pode ser reatribuída após a inicialização.
let y = x ** 2 //permite que você reatribua a variável, mas não pode redeclarar no mesmo escopo
var xy = x * y // é mais antigo e permite tanto reatribuição quanto redeclaração no mesmo escopo.

console.log({ y })
console.log({ xy })
