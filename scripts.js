var jogo1 = document.getElementById('jogo1')
function chamarJogo1(){
    window.open('/Jogo1/index.html', '_self')
}
jogo1.addEventListener('click', chamarJogo1 )
var menu = document.getElementById('menu')
function ableMenu(){
    var aside = document.getElementById('aside')
    var estiloAside = window.getComputedStyle(aside)
    var largura = parseFloat(estiloAside.width)
    if (estiloAside.width === '50px' || estiloAside.width === '200px') {
        aside.style.width = '0px'
    }else{
        aside.style.width = '50px'
    }
}
menu.addEventListener('click', ableMenu)
