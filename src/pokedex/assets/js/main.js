const tutilo = document.getElementById('titulo')
const botao = document.getElementById('inBotao')

botao.addEventListener('click', function () {
  tutilo.innerText = 'Minha Pokedex'
  console.log('clicou no botão')
})
