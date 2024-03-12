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

// funciones para encriptar

function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
 
    let textoCifrado = texto
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
  
      if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent =alert("Texto encriptado con éxito");
      }
     
  }

// funcion para desencriptar

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
 
    let textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
  
      if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent =alert("Texto desencriptado con éxito");
      }
    }
// funcion para copiar

const cajaTexto = document.querySelector(".texto");
const botonCopiar = document.querySelector(".copiar");

botonCopiar.addEventListener("click", () => {
  const texto = cajaTexto.value;
  navigator.clipboard.writeText(texto);
  alert("Texto copiado al portapapeles");
});
