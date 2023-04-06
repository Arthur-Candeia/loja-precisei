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
  document.getElementById('visa').style.visibility = 'hidden'
  document.getElementById('mastercard').style.visibility = 'hidden'
  document.getElementById('bandeiraDesconhecida').style.display = 'none'
}

function namecard() {
  let nomeDigitado = nome.value
  nomeCartao.innerHTML = nomeDigitado
}

function datecard() {
  dataCartao.innerHTML = data.value[5] + data.value[6] + '/' + data.value[0] + data.value[1] + data.value[2] + data.value[3]
}

function colorcard() {
  let corEscolhida = cor.value
  cartao.style.backgroundColor = corEscolhida
}

function comprar() { /*Verificação*/
  if (numero.value[18] !== undefined && nome.value[9] !== undefined && data.value !== '') {
    window.location.href = "../pags/pagamento-confirmado.html"
  }
}

/*OUTRA FORMA DE FAZER A VERIFICAÇÃO, SÓ QUE O FORM TERIA QUE SER PREENCHIDO OBRIGATORIAMENTE NA ORDEM
let number = document.getElementById('numero')

let TESTEdata = document.getElementById('data')

TESTEdata.addEventListener('change', (event) => {
  pagina = document.querySelector('#mandar');
  if(event.target) {
    if (numero.value[18] !== undefined && nome.value[9] !== undefined) {
      window.location.href = "http://www.devmedia.com.br"
    }
  }
})*/
