const frm = document.querySelector('form')
const rep = document.querySelector('h3')

frm.addEventListener('submit', (e) => {
  e.preventDefault()

  const preco = frm.inPreco.value
  const consumo = frm.inConsumo.value

  const valorTotal = preco * (consumo / 1000)

  rep.innerHTML = `Valor a pagar R$: ${valorTotal.toFixed(2)}`
})
