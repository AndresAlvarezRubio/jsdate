let fecha = new Date(); //lee fecha y hora
let salida = document.querySelector("#salida");

window.onload=()=> {
    
    document.querySelector("#fecha-hoy").addEventListener("click",mostrarFechaHoy);
    document.querySelector("#dia-hoy").addEventListener("click",mostrarDia);
    document.querySelector("#mes-actual").addEventListener("click",mostrarMes);
    document.querySelector("#anio-actual").addEventListener("click",mostrarAnio);
    document.querySelector("#fecha-completa").addEventListener("click",mostrarFechaCompleta);
    document.querySelector("#hora-actual").addEventListener("click",mostrarHoraActual);
    
}


function mostrarFechaHoy() {
    
    //muestra la fecha según formato local
    salida.textContent = fecha.toLocaleDateString(); 
    
}

function mostrarDia() { 
    
    //muestra la fecha de hoy en formato numérico
    salida.textContent = "Hoy es " + fecha.getDate(); 
    

}

function mostrarMes() { 
    
    //muestra el mes actual en formato numérico
    salida.textContent = "El mes es " + (fecha.getMonth()+1); 
    

}

function mostrarAnio() { 
    
    //muestra el año actual
    salida.textContent = "El año es " + fecha.getFullYear(); 
    

}

function mostrarFechaCompleta() { 
    
    //muestra la fecha de hoy en formato numérico
    salida.textContent = `La fecha actual es ${fecha.toLocaleString({
        weekday:"long",
        year:"numeric",
        month:"long",
        day:"numeric"
    }).toUpperCase()} `; 
    

}

function mostrarHoraActual() { 

    const intervalID = setInterval (() => {

    let now = new Date(); //Leer cada segundo la hora
    salida.textContent = `La hora actual es ${now.toLocaleTimeString("ES-es")}`}); 

    //IMPORTANTE -> Hay que parar la hora, ya que al actualizar se superpone
    document.querySelector("#detener-hora").addEventListener("click", ()=> {
        clearInterval(intervalID);
    });
}