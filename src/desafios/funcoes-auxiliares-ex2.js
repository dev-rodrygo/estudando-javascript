const entradas = [10, 3, 4, 1, -10, 10, 20, 8, 13, 31, -7]
let i = 0

export function gets() {
  const valor = entradas[i]
  i++
  return valor
}

export function print(texto) {
  console.log(texto)
}
