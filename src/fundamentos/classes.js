class Pessoa {
  constructor(nome, peso, altura) {
    this.nome = nome
    this.peso = peso
    this.altura = altura
  }

  calcularIMC() {
    return this.peso / this.altura ** 2
  }

  classificarIMC() {
    const imcResultado = this.calcularIMC()

    if (imcResultado < 18.6) {
      return 'Abaixo do normal'
    } else if (imcResultado > 18 && imcResultado < 25) {
      return 'Normal'
    } else if (imcResultado > 24.9 && imcResultado < 30) {
      return 'Sobrepeso'
    } else if (imcResultado > 29.9 && imcResultado < 35) {
      return 'Obesidade grau I'
    } else if (imcResultado > 34.9 && imcResultado < 40) {
      return 'Obesidade grau II'
    } else {
      return 'Obesidade grau III'
    }
  }
}

const rodry = new Pessoa('Rodry', 64, 1.82)
const jose = new Pessoa('josé', 140, 1.85)

console.log(
  `${rodry.nome} - Seu IMC: ${rodry.calcularIMC().toFixed(2)} - Classificação: ${rodry.classificarIMC()} `,
)
console.log(
  `${jose.nome} - Seu IMC: ${jose.calcularIMC().toFixed(2)} - Classificação: ${jose.classificarIMC()} `,
)
