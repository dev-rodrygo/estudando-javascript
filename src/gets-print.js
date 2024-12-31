const numeros = [10, 6, 2, 22, 87, 55, 23, 30, 70, 92]
let i = 0

export function gets() {
  const valor = numeros[i]
  i++
  return valor
}

export function print(texto) {
  console.log(texto)
}
