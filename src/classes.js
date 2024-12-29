class Pessoa {
  constructor(nome, peso, altura) {
    this.nome = nome
    this.peso = peso
    this.altura = altura
  }

  calcularIMC() {
    let resultadoImc = this.peso / this.altura ** 2
    console.log(`O IMC de ${this.nome} é ${resultadoImc.toFixed(2)}.`)
  }

  classificarImc() {
    let imcResultado = this.peso / this.altura ** 2
    let nivelImc

    const tabelaDeImc = [
      'Abaixo do normal',
      'Normal',
      'Sobrepeso',
      'Obesidade grau I',
      'Obesidadegrau II',
      'Obesidade grau III',
    ]

    if (imcResultado < 18.6) {
      nivelImc = tabelaDeImc[0]
    }
    if (imcResultado > 18 && imcResultado < 25) {
      nivelImc = tabelaDeImc[1]
    }
    if (imcResultado > 24.9 && imcResultado < 30) {
      nivelImc = tabelaDeImc[2]
    }
    if (imcResultado > 29.9 && imcResultado < 35) {
      nivelImc = tabelaDeImc[3]
    }
    if (imcResultado > 34.9 && imcResultado < 40) {
      nivelImc = tabelaDeImc[4]
    }
    if (imcResultado > 39.9) {
      nivelImc = tabelaDeImc[5]
    }

    console.log(`${this.nome} seu nível de IMC está: ${nivelImc}!`)
  }
}

const rodry = new Pessoa('Rodry', 64, 1.82)
const jose = new Pessoa('josé', 70, 1.75)

console.log(rodry)
rodry.calcularIMC()
rodry.classificarImc()

console.log()

console.log(jose)
jose.calcularIMC()
jose.classificarImc()
