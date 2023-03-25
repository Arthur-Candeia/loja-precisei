function input() {
  let numeroDigitado = numero.value
  numeroCartao.innerHTML = numeroDigitado
  if (numeroDigitado.length == 4 || numeroDigitado.length == 9 || numeroDigitado.length == 14) {
    numero.value += '-'
  }
}