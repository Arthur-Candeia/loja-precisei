function numcard() {
  let numeroDigitado = numero.value
  numeroCartao.innerHTML = numeroDigitado
  if (numeroDigitado[0] == '4') { //Bandeira Visa
    document.getElementById('visa').style.visibility = 'visible'
    document.getElementById('mastercard').style.visibility = 'hidden'
    document.getElementById('bandeiraDesconhecida').style.display = 'none'
  }
  else if (numeroDigitado[0] == '5') { //Bandeira Mastercard
    document.getElementById('visa').style.visibility = 'hidden'
    document.getElementById('mastercard').style.visibility = 'visible'
    document.getElementById('bandeiraDesconhecida').style.display = 'none'
  }
  else if (numeroDigitado[0] == undefined ) { //Sumir bandeiras
    document.getElementById('visa').style.visibility = 'hidden'
    document.getElementById('mastercard').style.visibility = 'hidden'
    document.getElementById('bandeiraDesconhecida').style.display = 'none'
  }
  else if (numeroDigitado[0] !== '4' && numeroDigitado[0] !== '5' && numeroDigitado[0] != undefined) { //Texto bandeira desconhecida
    document.getElementById('visa').style.visibility = 'hidden'
    document.getElementById('mastercard').style.visibility = 'hidden'
    document.getElementById('bandeiraDesconhecida').style.display = 'block'
    document.getElementById('bandeiraDesconhecida').innerHTML = 'Band. desc.'
  }
  if (numeroDigitado.length == 4 || numeroDigitado.length == 9 || numeroDigitado.length == 14) {
    numero.value += ' '
  }
}

function limparNumero() {
  numero.value = ''
  numeroCartao.innerHTML = ''
}

function namecard() {
  let nomeDigitado = nome.value
  nomeCartao.innerHTML = nomeDigitado
}

function datecard() {
  let dataDigitada = data.value
  dataCartao.innerHTML = dataDigitada
}