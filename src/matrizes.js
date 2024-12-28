let matriz = []
let tamanho = 12

for (let index = 0; index < tamanho; index++) {
  matriz[index] = []

  for (let jndex = 0; jndex < tamanho; jndex++) {
    matriz[index][jndex] = index + jndex
  }
}

console.log({ matriz })
