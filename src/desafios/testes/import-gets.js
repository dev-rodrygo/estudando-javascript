import { gets, print } from './gets.js'

const media = gets()

function calcularResultado(media) {
  if (media < 5) {
    return 'REP'
  } else if (media >= 5 && media < 7) {
    return 'REC'
  } else {
    return 'APR'
  }
}

print(calcularResultado(media))
print(calcularResultado(8))
print(calcularResultado(2))
