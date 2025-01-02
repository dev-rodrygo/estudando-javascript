const entradas = [2000, 250]
let i = 0

export function gets() {
  const valor = entradas[i]
  i++
  return valor
}

export function print(texto) {
  console.log(texto)
}
