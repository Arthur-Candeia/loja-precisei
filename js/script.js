foto1 = 'url(images/violeta/violeta1.jpg)'
foto2 = 'url(images/violeta/violeta2.jpg)'
foto3 = 'url(images/violeta/violeta3.jpg)'
foto4 = 'url(images/violeta/violeta4.jpg)'
let quantidade = 1

function mudarTamanho() {
  if (window.innerWidth >= 600) {
      nav.style.display = 'block'
  }
  else {
      nav.style.display = 'none'
  }
}

function clickMenu() {
  if (nav.style.display == 'block') {
      nav.style.display = 'none'
  }
  else {
      nav.style.display = 'block'
  }
}

function Violeta() {
  /*Troca os src's das imagens pequenas*/
  img01.setAttribute('src', 'images/violeta/violeta1.jpg');
  img02.setAttribute('src', 'images/violeta/violeta2.jpg');
  img03.setAttribute('src', 'images/violeta/violeta3.jpg');
  img04.setAttribute('src', 'images/violeta/violeta4.jpg');
  /*Troca o valor das variáveis*/
  foto1 = 'url(images/violeta/violeta1.jpg)'
  foto2 = 'url(images/violeta/violeta2.jpg)'
  foto3 = 'url(images/violeta/violeta3.jpg)'
  foto4 = 'url(images/violeta/violeta4.jpg)'
  /*Faz voltar a primeira imagem e deixar ela com estilo de selecionada*/
  exibir.style.backgroundImage = foto1
  img01.style.transform = 'scale(1.1)'
  img02.style.transform = 'scale(1)'
  img03.style.transform = 'scale(1)'
  img04.style.transform = 'scale(1)'
}

function Marrom() {
  /*Troca os src's das imagens pequenas*/
  img01.setAttribute('src', 'images/marrom/marrom1.jpg');
  img02.setAttribute('src', 'images/marrom/marrom2.jpg');
  img03.setAttribute('src', 'images/marrom/marrom3.jpg');
  img04.setAttribute('src', 'images/marrom/marrom4.jpg');
  /*Troca o valor das variáveis*/
  foto1 = 'url(images/marrom/marrom1.jpg)'
  foto2 = 'url(images/marrom/marrom2.jpg)'
  foto3 = 'url(images/marrom/marrom3.jpg)'
  foto4 = 'url(images/marrom/marrom4.jpg)'
  /*Faz voltar a primeira imagem e deixar ela com estilo de selecionada*/
  exibir.style.backgroundImage = foto1
  img01.style.transform = 'scale(1.1)'
  img02.style.transform = 'scale(1)'
  img03.style.transform = 'scale(1)'
  img04.style.transform = 'scale(1)'
  
}

function Branca() {
  /*Troca os src's das imagens pequenas*/
  img01.setAttribute('src', 'images/branca/branca1.jpg');
  img02.setAttribute('src', 'images/branca/branca2.jpg');
  img03.setAttribute('src', 'images/branca/branca3.jpg');
  img04.setAttribute('src', 'images/branca/branca4.jpg');
  /*Troca o valor das variáveis*/
  foto1 = 'url(images/branca/branca1.jpg)'
  foto2 = 'url(images/branca/branca2.jpg)'
  foto3 = 'url(images/branca/branca3.jpg)'
  foto4 = 'url(images/branca/branca4.jpg)'
  /*Faz voltar a primeira imagem e deixar ela com estilo de selecionada*/
  exibir.style.backgroundImage = foto1
  img01.style.transform = 'scale(1.1)'
  img02.style.transform = 'scale(1)'
  img03.style.transform = 'scale(1)'
  img04.style.transform = 'scale(1)'
}
function Preta() {
  /*Troca os src's das imagens pequenas*/
  img01.setAttribute('src', 'images/preta/preta1.jpg');
  img02.setAttribute('src', 'images/preta/preta2.jpg');
  img03.setAttribute('src', 'images/preta/preta3.jpg');
  img04.setAttribute('src', 'images/preta/preta4.jpg');
  /*Troca o valor das variáveis*/
  foto1 = 'url(images/preta/preta1.jpg)'
  foto2 = 'url(images/preta/preta2.jpg)'
  foto3 = 'url(images/preta/preta3.jpg)'
  foto4 = 'url(images/preta/preta4.jpg)'
  /*Faz voltar a primeira imagem e deixar ela com estilo de selecionada*/
  exibir.style.backgroundImage = foto1
  img01.style.transform = 'scale(1.1)'
  img02.style.transform = 'scale(1)'
  img03.style.transform = 'scale(1)'
  img04.style.transform = 'scale(1)'
}

function picture1() {
  exibir.style.backgroundImage = foto1
  img01.style.transform = 'scale(1.1)'
  img02.style.transform = 'scale(1)'
  img03.style.transform = 'scale(1)'
  img04.style.transform = 'scale(1)'
}

function picture2() {
  exibir.style.backgroundImage = foto2
  img01.style.transform = 'scale(1)'
  img02.style.transform = 'scale(1.1)'
  img03.style.transform = 'scale(1)'
  img04.style.transform = 'scale(1)'
}

function picture3() {
  exibir.style.backgroundImage = foto3
  img01.style.transform = 'scale(1)'
  img02.style.transform = 'scale(1)'
  img03.style.transform = 'scale(1.1)'
  img04.style.transform = 'scale(1)'
}

function picture4() {
  exibir.style.backgroundImage = foto4
  img01.style.transform = 'scale(1)'
  img02.style.transform = 'scale(1)'
  img03.style.transform = 'scale(1)'
  img04.style.transform = 'scale(1.1)'
}

function menos() {
  if (quantidade >= 2) {
    quantidade -= 1
    qtd.innerHTML = quantidade
  }
}

function mais() {
  if (quantidade <=8) {
    quantidade += 1
    qtd.innerHTML = quantidade
  }
}