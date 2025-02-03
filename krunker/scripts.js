const canvas = document.getElementById('gameCanvas')
const ctx = canvas.getContext('2D')

function gameloop(){
    ctx.clearRect(0,0, canvas.width, canvas.height)
    
    ctx.fillrect(0, 0, canvas.width, canvas.height)
}