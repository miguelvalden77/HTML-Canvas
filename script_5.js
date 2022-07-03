
const button = document.getElementById("button")
const canvas = document.getElementById("canvas")
const video = document.getElementById("video")

const contexto = canvas.getContext("2d")

const mostrarEnVideo = (stream)=>{
    window.strem = stream
    video.srcObject = stream
}

const init = async ()=>{ // async para indicar que es asíncrono

   try {
     // Objeto creado con los permisos que necesita stream
     const constraints = {
        audio: true,
        video: {
            width: 400,
            height: 300
        }
    }
    // stream es la respuesta del objeto navigator intentando conectarse a los medios físicos del ordenador y necesita permisos como parámetros
    const stream = await navigator.mediaDevices.getUserMedia(constraints)

    mostrarEnVideo(stream)

   } catch (error) {
    console.error(error.message)
   }
}

button.addEventListener("click", ()=>{

    init()
    contexto.drawImage(video, 0, 0, 500, 500)

})

