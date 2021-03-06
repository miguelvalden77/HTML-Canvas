
const buttonColision = document.getElementById("button-colision")
const canvas = document.getElementById("canvas")

const contexto = canvas.getContext("2d")

let distanceLeft = 10
let distanceTop = 100
let isGameOver = false

buttonColision.addEventListener("click", ()=>{

        contexto.fillStyle = "red"
        contexto.fillRect(10, 100, 100, 100)
    
        contexto.fillStyle = "green"
        contexto.fillRect(150, 100, 100, 100)
    
        const hayColision = (x) =>{
            return (x + 100) >= 150
        }
        
        addEventListener("keydown", e =>{
            

            if(!isGameOver){
            let tecla = e.key
            contexto.fillStyle = "red"

            contexto.clearRect(0, 0, 400, 400)
    
            if(tecla === "ArrowUp"){  

                distanceTop -= 1
    
            } else if(tecla === "ArrowDown"){
    
                distanceTop += 1
    
            } else if(tecla === "ArrowRight"){
    
                distanceLeft += 1
    
            } else if(tecla === "ArrowLeft"){
    
                distanceLeft -= 1
    
            }

            contexto.fillRect(distanceLeft, distanceTop, 100, 100)
    
            contexto.fillStyle = "green"
            contexto.fillRect(150, 100, 100, 100)
    
            if(hayColision(distanceLeft)){
                isGameOver = true

                let imagenGameOver = new Image()
                imagenGameOver.src = "Game-over.jpg"
    
                imagenGameOver.onload = ()=>{
                contexto.clearRect(0, 0, 400, 400)
                contexto.drawImage(imagenGameOver, 0, 0, 400, 400)
                
                }
            }
        }          
    })
})


