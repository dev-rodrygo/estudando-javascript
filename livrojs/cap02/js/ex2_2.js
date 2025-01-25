const frm = document.querySelector('form')
const resp1 = document.querySelector('#outResp1')
const resp2 = document.querySelector('#outResp2')
const botaoLimpar = document.querySelector('#inBotao')

frm.addEventListener('submit', (e) => {
  e.preventDefault() // Previne o envio do formulário

  const titulo = frm.inTitulo.value.trim() // Remove espaços extras
  const duracao = Number(frm.inDuracao.value)

  if (!titulo || duracao <= 0) {
    alert('Por favor, preencha os campos corretamente!')
    return
  }

  const horas = Math.floor(duracao / 60)
  const minutos = duracao % 60

  resp1.innerText = `Filme: ${titulo}`
  resp2.innerText = `Duração: ${horas} hora(s) e ${minutos} minuto(s)`
})

// Botão para limpar as respostas
botaoLimpar.addEventListener('click', (e) => {
  e.preventDefault() // Previne comportamento padrão do botão
  resp1.innerText = ''
  resp2.innerText = ''
  frm.reset() // Limpa os campos do formulário
})
