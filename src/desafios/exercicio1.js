// 1) Faça um programa que receba a média de um aluno.
// Caso a média seja < 5 imprima "Reprovado"
// Caso a média seja >= 5 e < 7 imprima "Recuperação"
// Caso a média seja >= 7 imprima "Aprovado"

//     Exemplo:
//         Entrada:
//             5.5
//         Saída:
//             Recuperação

import { gets, print } from './funcoes-auxiliares-ex1.js'

class Alunos {
  constructor(aluno, media) {
    this.aluno = aluno
    this.media = media
  }
  // Verifica se a média é um número válido e não negativo
  exibirSituacaoAluno() {
    if (isNaN(this.media) || this.media < 0) {
      return 'Nota invalida!'
      // Verifica a situação do aluno com base na média
    }
    if (this.media >= 0 && this.media < 5) {
      return `${this.aluno} está Reprovado`
    } else if (this.media >= 5 && this.media < 7) {
      return `${this.aluno} está em Recuperação`
    } else {
      return `${this.aluno} está Aprovado`
    }
  }
}

// Recebe as notas para cada aluno
const rodry = new Alunos('rodry', gets())
const rodrygo = new Alunos('rodrygo', gets())

// Imprime as situações dos alunos
print(rodry.exibirSituacaoAluno())
print(rodrygo.exibirSituacaoAluno())
