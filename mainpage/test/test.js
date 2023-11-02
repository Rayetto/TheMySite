const riquadro1 = document.getElementById('pulsante-1');
const riquadro2 = document.getElementById('pulsante-2');
const riquadro3 = document.getElementById('pulsante-3');



riquadro1.addEventListener('click', function(){
    riquadro1.className = "active-1"
    riquadro2.className = "quadro-2"
    riquadro3.className = "quadro-3"
    }
)

riquadro2.addEventListener('click', function(){
    riquadro1.className = "quadro-1"
    riquadro2.className = "active-2"
    riquadro3.className = "quadro-3"
    }
)

riquadro3.addEventListener('click', function(){
    riquadro1.className = "quadro-1"
    riquadro2.className = "quadro-2"
    riquadro3.className = "active-3"
    }
)
