// 1) Faça um programa que receba a média de um aluno.
// Caso a média seja < 5 imprima "Reprovado"
// Caso a média seja >= 5 e < 7 imprima "Recuperação"
// Caso a média seja >= 7 imprima "Aprovado"

//     Exemplo:
//         Entrada:
//             5.5
//         Saída:
//             Recuperação

import { gets, print } from '../gets-print.js'

class Alunos {
  constructor(aluno, media) {
    this.aluno = aluno
    this.media = media
  }

  exibirSituacaoAluno() {
    if (this.media < 5) {
      return 'Reprovado'
    } else if (this.media >= 5 && this.media < 7) {
      return 'Recuperação'
    } else {
      return 'Aprovado'
    }
  }
}

const rodry = new Alunos('rodry', gets())
const rodrygo = new Alunos('rodrygo', gets())

print(rodry.exibirSituacaoAluno())
print(rodrygo.exibirSituacaoAluno())
