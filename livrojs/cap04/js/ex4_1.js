const frm = document.querySelector('form')
const resp1 = document.querySelector('h2')
const resp2 = document.querySelector('h3')
const botao = document.querySelector('#inBotao')

frm.addEventListener('submit', (e) => {
  e.preventDefault()

  const nomeAluno = frm.inNomeAluno.value
  const nota1 = Number(frm.inNota1.value)
  const nota2 = Number(frm.inNota2.value)
  const media = (nota1 + nota2) / 2

  resp1.innerText = `Média das Notas: ${media.toFixed(2)}`

  if (media > 6.99 && media < 10) {
    resp2.innerText = `${nomeAluno} Parabéns Você Foi Aprovado(a)!`
    resp2.style.color = 'navy'
  } else if (media == 10) {
    resp2.innerText = `Parabéns ${nomeAluno} Você Foi Aprovado(a) com Nota Máxima!`
    resp2.style.color = 'turquoise'
  } else {
    resp2.innerText = `Ops..${nomeAluno} Você Foi Reprovado(a)!`
    resp2.style.color = 'red'
  }
})

botao.addEventListener('click', (e) => {
  e.preventDefault()

  // Limpa os textos de resposta
  resp1.innerText = ''
  resp2.innerText = ''

  // Reseta a cor do h3
  resp2.style.color = ''

  // Limpa os campos de entrada
  frm.inNomeAluno.value = ''
  frm.inNota1.value = ''
  frm.inNota2.value = ''
})
