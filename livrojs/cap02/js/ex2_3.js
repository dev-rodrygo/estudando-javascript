const frm = document.querySelector('form')
const resp1 = document.querySelector('#outResp1')
const resp2 = document.querySelector('#outResp2')
const resp3 = document.querySelector('#outResp3')

frm.addEventListener('submit', (e) => {
  e.preventDefault()

  const nomeVeiculo = frm.inVeiculo.value
  const precoVeiculo = Number(frm.inPreco.value)

  const valorEntrada = precoVeiculo * 0.5
  const valorParcelas = valorEntrada / 12

  resp1.innerHTML = `Promoção: ${nomeVeiculo}`
  resp2.innerHTML = `Entrada: ${valorEntrada.toFixed(2)}`
  resp3.innerHTML = `+12x de R$: ${valorParcelas.toFixed(2)}`
})
