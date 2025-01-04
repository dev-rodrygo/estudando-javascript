class Carros {
  constructor(marcas, cores, gastoMedioPorKm) {
    this.marcas = marcas
    this.cores = cores
    this.gastoMedioPorKm = gastoMedioPorKm
  }

  CalcularGastoMedio(distanciaPorKm, precoCombustivel) {
    return distanciaPorKm * this.gastoMedioPorKm * precoCombustivel
  }
}

const gol = new Carros('Gol', 'azul', 1 / 20)

console.log(gol.CalcularGastoMedio(70, 6.2))
