const frm = document.querySelector('form')
const resp1 = document.querySelector('#outResp1')

frm.addEventListener('submit', (e) => {
  e.preventDefault()

  const preco = Number(frm.inPreco.value)
  const tempoDeUso = Number(frm.inTempoUsado.value)

  const valorTotal = Math.ceil(tempoDeUso / 15) * preco

  resp1.innerText = `Valor a Pagar R$: ${valorTotal.toFixed(2)}`
})
