// Ocultar el contenedor
function desaparecer() { 
 document.querySelector(".contenedor").style.display = "none";
}

// funcion texto sin mayuscula

function validarMinusculas(cajaTexto) {
    // Convertir el valor a minúsculas
    const valorMinusculas = cajaTexto.value.toLowerCase();
  
    // Eliminar las tildes
    const valorSinTilde = valorMinusculas.replace(/á|é|í|ó|ú/g, "a");
  
    // Reemplazar el valor original por el valor sin tildes
    cajaTexto.value = valorSinTilde;
  }
