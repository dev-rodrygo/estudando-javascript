class Pessoa {
  constructor(nome, peso, altura) {
    this.nome = nome
    this.peso = peso
    this.altura = altura
  }

  calcularIMC() {
    return this.peso / this.altura ** 2
  }

  classificarImc() {
    const imcResultado = this.calcularIMC()

    const tabelaDeImc = [
      'Abaixo do normal',
      'Normal',
      'Sobrepeso',
      'Obesidade grau I',
      'Obesidade grau II',
      'Obesidade grau III',
    ]

    if (imcResultado < 18.6) {
      return tabelaDeImc[0]
    } else if (imcResultado > 18 && imcResultado < 25) {
      return tabelaDeImc[1]
    } else if (imcResultado > 24.9 && imcResultado < 30) {
      return tabelaDeImc[2]
    } else if (imcResultado > 29.9 && imcResultado < 35) {
      return tabelaDeImc[3]
    } else if (imcResultado > 34.9 && imcResultado < 40) {
      return tabelaDeImc[4]
    } else {
      return tabelaDeImc[5]
    }
  }
}

const rodry = new Pessoa('Rodry', 64, 1.82)
const jose = new Pessoa('josé', 140, 1.85)

console.log(rodry)
console.log(`Seu IMC:`, rodry.calcularIMC().toFixed(2))
console.log(`Nivel de IMC:`, rodry.classificarImc())

console.log()

console.log(jose)
console.log(`Seu IMC:`, jose.calcularIMC().toFixed(2))
console.log(`Nivel de IMC:`, jose.classificarImc())
