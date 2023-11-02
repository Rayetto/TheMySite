const iframe1 = document.getElementById('resizeable-iframe-1');
const iframe2 = document.getElementById('resizeable-iframe-2');
const iframe3 = document.getElementById('resizeable-iframe-3');
const img = document.getElementById('layer');

iframe1.addEventListener('load', () => {
  resizeIframe();
});

iframe2.addEventListener('load', () => {
  resizeIframe();
});

iframe3.addEventListener('load', () => {
  resizeIframe();
});




  // ------Seleziona il riquadro------
  const riquadro = document.getElementById('riquadro');

  // ------Seleziona il titolo------
  const titolo1 = document.getElementById('titolo-1');
  const titolo2 = document.getElementById('titolo-2');
  const titolo3 = document.getElementById('titolo-3');

  // ------Seleziona il testo------
  const testo = document.getElementById('testo');
  const testo1 = document.getElementById('testo-1');
  const testo2 = document.getElementById('testo-2');
  const testo3 = document.getElementById('testo-3');

  // ------Seleziona i pulsanti------
  const bottone1 = document.getElementById('pulsante-1');
  const bottone2 = document.getElementById('pulsante-2');
  const bottone3 = document.getElementById('pulsante-3');

    //iframe 1 di base
      iframe1.className = 'resizeable-iframe'
      iframe2.className = 'no-dis'
      iframe3.className = 'no-dis'

    //colore riquadro
    bottone1.addEventListener('click', function() {
      riquadro.className = 'riquadro-1'
    //cambio iframe
      iframe1.className = 'resizeable-iframe'
      iframe2.className = 'no-dis'
      iframe3.className = 'no-dis'
    //colore titolo
      titolo1.className = 'titolo-1'
      titolo2.className = 'no-dis'
      titolo3.className = 'no-dis'
    //testo
      testo1.className = 'testo'
      testo2.className = 'no-dis'
      testo3.className = 'no-dis'
    });

    //colore riquadro
    bottone2.addEventListener('click', function() {
      riquadro.className = 'riquadro-2'
    //cambio iframe
      iframe1.className = 'no-dis'
      iframe2.className = 'resizeable-iframe'
      iframe3.className = 'no-dis'
    //colore titolo
      titolo1.className = 'no-dis'
      titolo2.className = 'titolo-2'
      titolo3.className = 'no-dis'
    //testo
      testo1.className = 'no-dis'
      testo2.className = 'testo'
      testo3.className = 'no-dis'
    });

    //colore riquadro
    bottone3.addEventListener('click', function() {
      riquadro.className = 'riquadro-3'
    //cambio iframe
      iframe1.className = 'no-dis'
      iframe2.className = 'no-dis'
      iframe3.className = 'resizeable-iframe'
    //colore titolo
      titolo1.className = 'no-dis'
      titolo2.className = 'no-dis'
      titolo3.className = 'titolo-3'
    //testo
      testo1.className = 'no-dis'
      testo2.className = 'no-dis'
      testo3.className = 'testo'
    });



 

function pulsante(numero){
  if(numero==1){
    //colore pulsanti
    bottone1.className = 'pulsante-1'
    bottone2.className = ''
    bottone3.className = ''
  }
  else if(numero==2){
    //colore pulsanti
    bottone1.className = ''
    bottone2.className = 'pulsante-2'
    bottone3.className = ''
  }
  else{
    //colore pulsanti
    bottone1.className = ''
    bottone2.className = ''
    bottone3.className = 'pulsante-3'
  }
}


img.addEventListener("mouseover", iframe, false);
iframe1.addEventListener("mouseout", func1, false);
iframe2.addEventListener("mouseout", func1, false);
iframe3.addEventListener("mouseout", func1, false);

let isOver = false


function iframe(){
  isOver = true
  setTimeout(() => {
    if (isOver) {
      img.className = 'no-dis'
      if(bottone1==1){
        iframe1.className = 'resizeable-iframe'
        iframe2.className = 'no-dis'
        iframe3.className = 'no-dis'
      }
      if(bottone2==2){
        iframe1.className = 'no-dis'
        iframe2.className = 'resizeable-iframe'
        iframe3.className = 'no-dis'
      }
      if(bottone3==3){
        iframe1.className = 'no-dis'
        iframe2.className = 'no-dis'
        iframe3.className = 'resizeable-iframe'
      }
    }
 }, 1500);
}

function func1()
{  
  isOver = false
    img.className = 'layer'
    if(bottone1==1){
      iframe1.className = 'resizeable-iframe'
      iframe2.className = 'no-dis'
      iframe3.className = 'no-dis'
    }
    if(bottone2==2){
      iframe1.className = 'no-dis'
      iframe2.className = 'resizeable-iframe'
      iframe3.className = 'no-dis'
    }
    if(bottone3==3){
      iframe1.className = 'no-dis'
      iframe2.className = 'no-dis'
      iframe3.className = 'resizeable-iframe'
    }
}



