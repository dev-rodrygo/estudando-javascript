const numeros = []

numeros.push(23)
numeros.push(12)
numeros.push(3)
numeros.push(9)
numeros.push(4)
numeros.push(8)
numeros.push(7)

//console.log(numeros)

for (let i = 0; i < numeros.length; i++) {
  const restoDivisao = numeros[i] % 2

  if (restoDivisao == 0) {
    console.log(`O numero ${numeros[i]} e par!`)
  } else {
    console.log(`O numero ${numeros[i]} e impar!`)
  }
}
