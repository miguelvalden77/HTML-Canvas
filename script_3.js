
const buttonColision = document.getElementById("button-colision")
const canvas = document.getElementById("canvas")

const contexto = canvas.getContext("2d")

buttonColision.addEventListener("click", ()=>{

    contexto.fillStyle = "red"
    contexto.fillRect(10, 100, 100, 100)

    contexto.fillStyle = "green"
    contexto.fillRect(150, 100, 100, 100)

    addEventListener("keydown", e =>{
        
        let tecla = e.key

        if(tecla === "ArrowUp"){  

        } else if(tecla === "ArrowDown"){

        } else if(tecla === "ArrowRight"){

            contexto.clearRect(0, 0, 400, 400)
            contexto.fillStyle = "red"
            contexto.fillRect(20, 100, 100, 100)

        } else if(tecla === "ArrowLeft"){

        }

        contexto.fillStyle = "green"
        contexto.fillRect(150, 100, 100, 100)

    })
})


