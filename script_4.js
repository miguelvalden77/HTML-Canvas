
const canvas = document.getElementById("canvas")
const button = document.getElementById("sistema-solar")

const contexto = canvas.getContext("2d")

button.addEventListener("click", ()=>{

    const imagenSol = new Image()
    imagenSol.src = "sol.png"
    
    const imagenLuna = new Image()
    imagenLuna.src = "luna.png"

    const imagenTierra = new Image()
    imagenTierra.src = "tierra.png"

    const dibujarSistemaSolar = ()=>{
        contexto.globalCompositeOperation = "destination-over"
        contexto.clearRect(0,  0, 300, 300)
        contexto.fillStyle = "rgba(0, 0, 0, 0.4)"
        contexto.strokeStyle = "rgba(0, 153, 255, 0.4)"
        contexto.save()
        contexto.translate(150, 150)

        // Tierra
        const time = new Date()
        contexto.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds())
        contexto.translate(105, 0)
        contexto.fillRect(0, -12, 50, 24) // sombra
        contexto.drawImage(imagenTierra, -12, -12)

        // Luna
        contexto.save()
        contexto.rotate(((2 * Math.PI) / 6) * time.getSeconds() + ((2 * Math.PI) / 6000) * time.getMilliseconds())
        contexto.translate(0, 28.5)
        contexto.drawImage(imagenLuna, -3.5, -3.5)
        contexto.restore() // Limpiar los anteriores save(). Hay 2 save y por ello debe haber dos restore()
        contexto.restore() // Limpiar los anteriores save()

        // Sol
        contexto.beginPath()
        contexto.arc(150, 150, 105, 0,  Math.PI * 2, false)
        contexto.stroke()
        contexto.drawImage(imagenSol, 0, 0, 300, 300)

        requestAnimationFrame(dibujarSistemaSolar)

    }

    requestAnimationFrame(dibujarSistemaSolar)
    
})

