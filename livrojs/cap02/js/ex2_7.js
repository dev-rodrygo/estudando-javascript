const frm = document.querySelector('form')
const resp1 = document.querySelector('#outResp1')
const resp2 = document.querySelector('#outResp2')

frm.addEventListener('submit', (e) => {
  e.preventDefault()

  const nomeProduto = frm.inProduto.value
  const preco = Number(frm.inPreco.value)

  const promocao = preco * 0.5
  const valorTotal = preco * 3 - promocao

  resp1.innerHTML = `${nomeProduto} - Promoção leve 3 por R$: ${valorTotal.toFixed(2)}`
  resp2.innerHTML = `O 3° Produto custa apenas R$: ${promocao.toFixed(2)}`
})
