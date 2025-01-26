const frutas = ['maçã', 'banana', 'laranja']

// Usando for
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i])
}
console.log()

// Usando for...of
for (const fruta of frutas) {
  console.log(fruta)
}
console.log()

// Usando forEach
frutas.forEach((fruta, index) => {
  console.log(`${index}: ${fruta}`)
})
