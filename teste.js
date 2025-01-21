// Classe genérica para representar o herói
class Heroi {
  // Construtor para inicializar as propriedades
  constructor(nome, idade, tipo) {
    this.nome = nome
    this.idade = idade
    this.tipo = tipo
  }

  // Método para realizar o ataque
  atacar() {
    let ataque // Variável para definir o tipo de ataque

    // Define o ataque com base no tipo do herói
    switch (this.tipo.toLowerCase()) {
      case 'mago':
        ataque = 'magia'
        break
      case 'guerreiro':
        ataque = 'espada'
        break
      case 'monge':
        ataque = 'artes marciais'
        break
      case 'ninja':
        ataque = 'shuriken'
        break
      default:
        ataque = 'um ataque desconhecido'
    }

    // Exibe a mensagem do ataque
    console.log(`O ${this.tipo} atacou usando ${ataque}!`)
  }
}

// Exemplo de uso:

// Criando heróis
const mago = new Heroi('Gandalf', 3000, 'mago')
const guerreiro = new Heroi('Aragorn', 87, 'guerreiro')
const monge = new Heroi('Aang', 112, 'monge')
const ninja = new Heroi('Naruto', 16, 'ninja')

// Executando ataques

setTimeout(() => {
  guerreiro.atacar() // Saída: O guerreiro atacou usando espada!
}, 2000)

setTimeout(() => {
  mago.atacar() // Saída: O mago atacou usando magia!
}, 3000)

setTimeout(() => {
  monge.atacar() // Saída: O monge atacou usando artes marciais!
}, 4000)

setTimeout(() => {
  ninja.atacar() // Saída: O ninja atacou usando shuriken!
}, 5000)
