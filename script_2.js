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
    imagen.src = "https://www.universidadviu.com/sites/universidadviu.com/files/images/galaxias%20barradas%20(1).jpg" // Se coloca el src en el nuevo objeto

    imagen.onload = ()=>{ // evento del objeto que espera a que se cargue

        contexto.drawImage(imagen, 0, 0, 200, 200) // primer parámetro es la imagen, y los demás son el inicio y el final

    }
    
})
