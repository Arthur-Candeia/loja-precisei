foto1 = 'url(images/violeta/violeta1.jpg)'
foto2 = 'url(images/violeta/violeta2.jpg)'
foto3 = 'url(images/violeta/violeta3.jpg)'
foto4 = 'url(images/violeta/violeta4.jpg)'
let quantidade = 1

function mudarTamanho() {
  if (window.innerWidth >= 1000) {
      nav.style.display = 'flex'
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

function picture1() { //muda a escala da foto escolhida
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

function tamanhoPP() { //Muda a cor da borda do tamanho selecionado
  pp.style.borderColor = '#54426C'
  p.style.borderColor = '#C4B3D7'
  m.style.borderColor = '#C4B3D7'
  g.style.borderColor = '#C4B3D7'
  gg.style.borderColor = '#C4B3D7'
}

function tamanhoP() {
  pp.style.borderColor = '#C4B3D7'
  p.style.borderColor = '#54426C'
  m.style.borderColor = '#C4B3D7'
  g.style.borderColor = '#C4B3D7'
  gg.style.borderColor = '#C4B3D7'
}

function tamanhoM() {
  pp.style.borderColor = '#C4B3D7'
  p.style.borderColor = '#C4B3D7'
  m.style.borderColor = '#54426C'
  g.style.borderColor = '#C4B3D7'
  gg.style.borderColor = '#C4B3D7'
}

function tamanhoG() {
  pp.style.borderColor = '#C4B3D7'
  p.style.borderColor = '#C4B3D7'
  m.style.borderColor = '#C4B3D7'
  g.style.borderColor = '#54426C'
  gg.style.borderColor = '#C4B3D7'
}

function tamanhoGG() {
  pp.style.borderColor = '#C4B3D7'
  p.style.borderColor = '#C4B3D7'
  m.style.borderColor = '#C4B3D7'
  g.style.borderColor = '#C4B3D7'
  gg.style.borderColor = '#54426C'
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

window.sr = ScrollReveal({reset: true});

sr.reveal('section#part2', {duration: 1000});
sr.reveal('section#part3', {duration: 1000});
sr.reveal('section#ajuda', {duration: 1000});