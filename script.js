// Linea
const buttonLinea = document.getElementById("button-linea")
const canvasLinea = document.getElementById("canvas-linea")

const context = canvasLinea.getContext("2d") // Con esto se indica que es en 2D 

buttonLinea.addEventListener("click", ()=>{

    context.clearRect(0, 0, 200, 200) // Limpia el lienzo
    
    context.beginPath() // Se indica que se comienza algo en el context
    context.moveTo(10, 10) // Coordenadas desde las que se empieza
    context.lineTo(180, 20) // Punto hacia donde se dibuja

    context.lineWidth = 5; // espesor de la línea
    context.strokeStyle = "green"; // color de la línea

    context.stroke() // orden de pintar
    context.closePath() // cierre de la acción

})

// Arco
const buttonArco = document.getElementById("button-arco") 

buttonArco.addEventListener("click", ()=>{
    
    context.clearRect(0, 0, 200, 200)

    context.beginPath()
    context.arc(100, 100, 50, 0, Math.PI * 2, true) // x, y, radio, ángulo desde el que empieza, Cuanto va a dibujar (Math.PI * 2 = 1 vuelta), dirección (true = sentido reloj)
    context.moveTo(110, 75)
    context.arc(75, 75, 35, 0, Math.PI, false)
    context.stroke()

    context.closePath() // cierre de la acción

})

// Curva
const buttonCurva = document.getElementById("button-curva")

buttonCurva.addEventListener("click", ()=>{

    context.clearRect(0, 0, 200, 200)
    context.beginPath()
    context.moveTo(20, 30) // Comienzo de la curva
    context.quadraticCurveTo(180, 20, 200, 200) // x imaginario, y imaginario, x final, y final
    context.stroke()
    context.closePath()
})

// Curva Bezier
const buttonBezier = document.getElementById("button-bezier")

buttonBezier.addEventListener("click", ()=>{

    context.clearRect(0, 0, 200, 200)
    context.beginPath()
    context.moveTo(100, 100)
    context.bezierCurveTo(150, 200, 250, 0, 300, 120)
    context.stroke()
    context.closePath()

})





