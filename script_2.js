const button = document.getElementById("canvas-button")
const canvas = document.getElementById("canvas")

const contexto = canvas.getContext("2d")

button.addEventListener("click", ()=>{

    let distanciaX = 20
    let distanciaY = 20
    let colorLinea = "red"
    let anchoLinea = 0.5

    for (let i = distanciaX + anchoLinea; i < contexto.canvas.width; i += distanciaX){
        contexto.beginPath()
        contexto.moveTo(i, 0)
        contexto.lineTo(i, contexto.canvas.height)
        contexto.strokeStyle = colorLinea
        contexto.lineWidth = anchoLinea
        contexto.stroke()
        contexto.closePath()
    }

    for (let i = distanciaY + anchoLinea; i < contexto.canvas.height; i += distanciaY){
        contexto.beginPath()
        contexto.moveTo(0, i)
        contexto.lineTo(contexto.canvas.width, i)
        contexto.strokeStyle = colorLinea
        contexto.lineWidth = anchoLinea
        contexto.stroke()
        contexto.closePath()
    }

})


// Eventos
const buttonEvent = document.getElementById("eventos")

buttonEvent.addEventListener("click", ()=>{

    canvas.addEventListener("mousemove", e =>{
   
    })

    canvas.addEventListener("mousedown", e =>{
    
    let posReal = canvas.getBoundingClientRect()
    let x = e.clientX - posReal.left
    let y = e.clientY - posReal.top

    console.log(x, y)

    })

    canvas.addEventListener("mouseup", e =>{
    
    let posReal = canvas.getBoundingClientRect()
    let x = e.clientX - posReal.left
    let y = e.clientY - posReal.top

    console.log(x, y)

    })

})


const buttonDibujar = document.getElementById("dibujar")

let posicionInicial = {}
let posicionFinal = {}

buttonDibujar.addEventListener("click", ()=>{

    canvas.addEventListener("mousedown", e =>{
    

    })

    canvas.addEventListener("mousemove", e =>{

    let posReal = canvas.getBoundingClientRect()
    let x = e.clientX - posReal.left
    let y = e.clientY - posReal.top

    posicionInicial = {
        x: 0,
        y: 0
    }

    posicionFinal = {
        x,
        y
    }

    contexto.beginPath()
    contexto.moveTo(posicionInicial.x, posicionInicial.y)
    contexto.lineTo(posicionFinal.x, posicionFinal.y)
    contexto.stroke()
    contexto.closePath()

    })

    canvas.addEventListener("mouseup", e =>{
    

    })    

})


// Dibujar una imagen
const buttonImage = document.getElementById("imagen")

buttonImage.addEventListener("click", ()=>{
    
    let imagen = new Image() // Instancia del objeto global Image()
    imagen.src = "Arbol.jpeg" // Se coloca el src en el nuevo objeto. Si se quiere una imagen local debe darse la ruta relativa a donde se encuentre

    imagen.onload = ()=>{ // evento del objeto que espera a que se cargue

        contexto.drawImage(imagen, 0, 0, 200, 200) // primer parámetro es la imagen, y los demás son el inicio y el final

        // Cambiando la imagen por medio de los píxeles
        let w = canvas.width // Obtenemos el ancho del canvas
        let h = canvas.height // Obtenemos el alto del canvas
        console.log(w, h)
        let imageData = contexto.getImageData(0, 0, w, h) // Nuevo objeto con los datos del contexto en el que hay que pintar
        let data = imageData.data // Datos específicos de la imagen con los píxeles de la imagen (array)

        // for(let i = 0; i < data.length; i += 4){ // Iteración por el array de píxeles
        //     // Sumando coloración (0-255) a los píxeles. El cuarto no se toca porque es intensidad (rgb{a})
        //     data[i] += 120 // Red
        //     data[i + 1] += 120 // Green
        //     data[i + 2] += 120 // Blue
        // }

        // for(let i = 0; i < data.length; i += 4){ 
        //     // Filtro blanco y negro
        //     let promedio = (data[i] + data[i + 1] + data[i + 2] + data[i + 3]) / 3 // Hallar el promedio
        //     data[i] = promedio 
        //     data[i + 1] = promedio 
        //     data[i + 2] = promedio 
        // }

        for(let i = 0; i < data.length; i += 4){ 
            // Filtro invertido
            data[i] = 255 - data[i]
            data[i + 1] = 255 - data[i + 1]
            data[i + 2] = 255 - data[i + 2]
        }

        contexto.putImageData(imageData, 0, 0) // Datos de la imagen más el inicio

    }
    
})

const buttonText = document.getElementById("texto")

buttonText.addEventListener("click", ()=>{
    contexto.clearRect(0, 0, 200, 200)
    contexto.font = "20px Arial" // Primero el size y después el tipo de letra
    contexto.fillText("Hola Mundo", 15, 50) // Parámetros texto, x, y
})
