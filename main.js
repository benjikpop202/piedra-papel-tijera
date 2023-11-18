
let opciones = document.getElementById("opciones")
let opciones2 = document.getElementById("mensaje-oponente")
let p1 = document.getElementById("p1")
let p2 = document.getElementById("p2")
let juegador2;
let mensaje = document.getElementById("mensaje")
let winner = document.getElementById("ganador")
let start = document.getElementById("btn-start")
let restart = document.getElementById("restablecer")
let temp = document.getElementById("temp")
let init = document.getElementById("init-game")
const options = ["piedra", "papel", "tijera"]

let conteo = new Audio('time-passing-sound-effect-fast-clock-108403.mp3')
let error = new Audio('error-126627.mp3')
let correcto = new Audio('open-new-level-143027.mp3')
let entrada = new Audio('shooting-sound-fx-159024.mp3')

init.addEventListener("click", ()=>{
 entrada.play()
 document.getElementById("juego").style.display = "flex"
 document.getElementById("inicio").style.display = "none"
})

p1.innerHTML = "🤜🏻"
opciones.addEventListener("change", () =>{
    let opcion = opciones.value
    if(opcion == "piedra"){ 
        p1.innerHTML = "🤜🏻"
    }else if(opcion == "papel"){
        p1.innerHTML = "🫱🏻"
    }else if(opcion == "tijera"){
        p1.innerHTML = "✌🏻"
    }
})

function mostrarJugador2(){
let pos = Math.floor(Math.random() * options.length)
juegador2 = options[pos]

switch (juegador2) {
    case "piedra":
        p2.innerHTML = "🤜🏻"
        opciones2.innerHTML = "piedra"
        break;
    case "papel":
        p2.innerHTML = "🫱🏻"
        opciones2.innerHTML = "papel"
        break;
    case "tijera":
        p2.innerHTML = "✌🏻"
        opciones2.innerHTML = "tijera"
        break;
    default:
        break;
}
}

const LogicGame = () =>{
    if(opciones.value == "piedra" && juegador2 == "tijera" || opciones.value == "papel" && juegador2 == "piedra" || opciones.value == "tijera" && juegador2 == "papel"){
      winner.innerHTML = "GANASTE!!"
      correcto.play()
    }else if(juegador2 == "piedra" && opciones.value == "tijera" || juegador2 == "papel" && opciones.value == "piedra" || juegador2 == "tijera" && opciones.value == "papel"){
       winner.innerHTML = "PERDISTE :("
       error.play()
    }else if(opciones.value == juegador2){
      winner.innerHTML = "EMPATE"
    }else{
        winner.innerHTML = "ERROR"
    }
}

const Temporizador = () =>{
   let time = 3
    function Actualizar(){
        temp.innerHTML = time
    }

    function Decrementar(){
        if(time > 1){
            time--
            Actualizar()
        }else{
           clearInterval(descontar)
           temp.style.display = "none"
           opciones.desiable = true
           mostrarJugador2()
           mensaje.style.display = "flex"
           LogicGame()
        }
    }
    let descontar = setInterval(Decrementar, 1000)
}

start.addEventListener("click", ()=>{
     start.style.display = "none"
     temp.style.display = "flex"
     opciones.disabled = true
     Temporizador()
     conteo.play()
})

restart.addEventListener("click", () => {
    // Almacenar un indicador de que el juego está reiniciándose
    localStorage.setItem('reiniciandoJuego', 'true');
    
    // Recargar la página
    location.reload();
  });
  

  document.addEventListener("DOMContentLoaded", function() {
    // Verificar si se está reiniciando el juego
    const reiniciandoJuego = localStorage.getItem('reiniciandoJuego');
  
    // Limpiar el indicador
    localStorage.removeItem('reiniciandoJuego');
  
    // Obtener referencias a los elementos del DOM
    const inicioSection = document.getElementById("inicio");
    const juegoSection = document.getElementById("juego");
  
    // Verificar si se está reiniciando el juego y mostrar la sección correcta
    if (reiniciandoJuego) {
      inicioSection.style.display = "none";
      juegoSection.style.display = "flex";
    }
  });
  
  
 
  



