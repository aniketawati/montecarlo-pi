let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')
let R = canvas.width/2
ctx.beginPath()
ctx.moveTo(0,0)
ctx.lineTo(0,2*R)
ctx.moveTo(0,2*R)
ctx.lineTo(2*R,2*R)
ctx.moveTo(2*R,2*R)
ctx.lineTo(2*R,0)
ctx.moveTo(2*R,0)
ctx.lineTo(0,0)
ctx.stroke()
ctx.beginPath()
ctx.arc(R,R,R, 0, 2 * Math.PI)
ctx.stroke()

let ccount = 0
let tcount = 0
let piE = document.getElementById('pi')
let updateTicker = setInterval(updatePi, 1)
function updatePi() {
    let X = Math.random()
    let Y = Math.random()
    let x = 2*R* X - R
    let y = R - 2*R* Y
    ctx.beginPath()
    ctx.fillStyle = '#FF0000'
    if((x*x + y*y) < R*R) {
        ctx.fillStyle = '#00FF00'
        ccount +=1
    } 
    ctx.fillRect(2*R*X,2*R*Y,1,1)
    tcount +=1
    if(tcount > Number.MAX_VALUE) {
        clearInterval(updateTicker)
    }
    piE.innerHTML = 4*ccount/tcount    
}
