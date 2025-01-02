// Programa em JavaScript para calcular e imprimir o salário a ser transferido

function calcularSalario(valorBruto, adicionalBeneficios) {
  let imposto

  if (valorBruto <= 1100) {
    imposto = 0.05
  } else if (valorBruto <= 2500) {
    imposto = 0.1
  } else {
    imposto = 0.15
  }

  const valorImposto = valorBruto * imposto
  const salarioTransferido = valorBruto - valorImposto + adicionalBeneficios

  return salarioTransferido.toFixed(2)
}

// Exemplo de entrada
const valorBruto = 2000
const adicionalBeneficios = 250

// Cálculo e exibição do resultado
const resultado = calcularSalario(valorBruto, adicionalBeneficios)
console.log(resultado)
