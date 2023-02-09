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

function picture1() {
  exibir.style.backgroundImage = 'url(../images/foto1.jpg)';
  img01.style.transform = 'scale(1.1)';
  img02.style.transform = 'scale(1)';
  img03.style.transform = 'scale(1)';
  img04.style.transform = 'scale(1)';
}

function picture2() {
  exibir.style.backgroundImage = 'url(../images/foto2.jpg)';
  img01.style.transform = 'scale(1)';
  img02.style.transform = 'scale(1.1)';
  img03.style.transform = 'scale(1)';
  img04.style.transform = 'scale(1)';
}

function picture3() {
  exibir.style.backgroundImage = 'url(../images/foto3.jpg)'
  img01.style.transform = 'scale(1)';
  img02.style.transform = 'scale(1)';
  img03.style.transform = 'scale(1.1)';
  img04.style.transform = 'scale(1)';
}

function picture4() {
  exibir.style.backgroundImage = 'url(../images/foto4.jpg)'
  img01.style.transform = 'scale(1)';
  img02.style.transform = 'scale(1)';
  img03.style.transform = 'scale(1)';
  img04.style.transform = 'scale(1.1)';
}