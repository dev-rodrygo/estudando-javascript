import { gets, print } from './gets-print.js'

const quantidadeDeAlunos = gets()
let maiorNumeroSorteado = 0

for (let i = 0; i < quantidadeDeAlunos; i++) {
  const numeroSorteado = gets()

  if (numeroSorteado > maiorNumeroSorteado) {
    maiorNumeroSorteado = numeroSorteado
  }
}

print(maiorNumeroSorteado)
print(quantidadeDeAlunos)
