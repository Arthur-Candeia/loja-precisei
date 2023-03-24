let select = document.getElementById('corCarrinho')

select.addEventListener('change', (event) => {
  fundo = document.querySelector('#imagemCarrinho');
  if(event.target.value == 'V') {
    fundo.style.backgroundImage = 'url(../images/violeta/violeta1.jpg)';
  }
  else if(event.target.value == 'M') {
    fundo.style.backgroundImage = 'url(../images/marrom/marrom1.jpg)';
  }
  else if(event.target.value == 'B') {
    fundo.style.backgroundImage = 'url(../images/branca/branca1.jpg)';
  }
  else if(event.target.value == 'P') {
    fundo.style.backgroundImage = 'url(../images/preta/preta1.jpg)';
  }
});