import { gets, print } from './funcoes-auxiliares-ex2.js'

const numerosSorteados = gets()
let maiorNumeroPar = -Infinity
let menorNumeroImpar = Infinity

for (let i = 0; i < numerosSorteados; i++) {
  const numeroRegistrado = gets()

  if (numeroRegistrado % 2 === 0 && numeroRegistrado > maiorNumeroPar) {
    maiorNumeroPar = numeroRegistrado
  } else if (numeroRegistrado % 2 != 0 && numeroRegistrado < menorNumeroImpar) {
    menorNumeroImpar = numeroRegistrado
  }
}

print(
  maiorNumeroPar === -Infinity
    ? 'Nenhum número par!'
    : `Maior número par: ${maiorNumeroPar}`,
)

print(
  menorNumeroImpar === Infinity
    ? 'Nenhum numero impar!'
    : `Menor numero impar: ${menorNumeroImpar}`,
)
