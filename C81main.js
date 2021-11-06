canvas = document.getElementById("mycanvas")
ctx = canvas.getContext("2d")
color = "blue"
ctx.beginPath()
ctx.strokeStyle = color
ctx.lineWidth = 3
ctx.arc(300, 200, 50, 0, 2*Math.PI)
ctx.stroke()
color = "yellow"
ctx.beginPath()
ctx.strokeStyle = color
ctx.lineWidth = 3
ctx.arc(350, 250, 50, 0, 2*Math.PI)
ctx.stroke()
color = "black"
ctx.beginPath()
ctx.strokeStyle = color
ctx.lineWidth = 3
ctx.arc(410, 200, 50, 0, 2*Math.PI)
ctx.stroke()
color = "green"
ctx.beginPath()
ctx.strokeStyle = color
ctx.lineWidth = 3
ctx.arc(470, 250, 50, 0, 2*Math.PI)
ctx.stroke()
color = "red"
ctx.beginPath()
ctx.strokeStyle = color
ctx.lineWidth = 3
ctx.arc(520, 200, 50, 0, 2*Math.PI)
ctx.stroke()
ctx.beginPath()
ctx.strokeStyle = "orange"
ctx.lineWidth = 3
ctx.rect(200, 100, 425, 250)
ctx.stroke()