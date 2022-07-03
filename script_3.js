
const buttonColision = document.getElementById("button-colision")
const canvas = document.getElementById("canvas")

const contexto = canvas.getContext("2d")

buttonColision.addEventListener("click", ()=>{

    contexto.fillStyle = "red"
    contexto.fillRect(10, 100, 100, 100)

    contexto.fillStyle = "green"
    contexto.fillRect(150, 100, 100, 100)

    let distanceLeft = 10
    let distanceTop = 100

    const hayColision = (x) =>{
        return (x + 100) >= 150
    }
    
    addEventListener("keydown", e =>{
        
        let tecla = e.key
        contexto.fillStyle = "red"

        if(tecla === "ArrowUp"){  

            contexto.clearRect(0, 0, 400, 400)

            distanceTop -= 1
            contexto.fillRect(distanceLeft, distanceTop, 100, 100)

        } else if(tecla === "ArrowDown"){

            contexto.clearRect(0, 0, 400, 400)

            distanceTop += 1
            contexto.fillRect(distanceLeft, distanceTop, 100, 100)

        } else if(tecla === "ArrowRight"){

            contexto.clearRect(0, 0, 400, 400)

            distanceLeft += 1
            contexto.fillRect(distanceLeft, distanceTop, 100, 100)

        } else if(tecla === "ArrowLeft"){
            
            contexto.clearRect(0, 0, 400, 400)

            distanceLeft -= 1
            contexto.fillRect(distanceLeft, distanceTop, 100, 100)

        }

        contexto.fillStyle = "green"
        contexto.fillRect(150, 100, 100, 100)

        if(hayColision(distanceLeft)){
        let imagenGameOver = new Image()
        imagenGameOver.src = "Game-over.jpg"

        imagenGameOver.onload = ()=>{
            contexto.clearRect(0, 0, 400, 400)
            contexto.drawImage(imagenGameOver, 0, 0, 400, 400)
        }
    }

    })
})


