const textArea = document.querySelector(".text-area");
const mensaje= document.querySelector(".mensaje");


// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"


function botonEncriptar () {
    const textoEncriptado =  encriptar(textArea.value);
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}



 //Función vinculada al botón encriptar para que el texto sea codificado si cumple con las características
function encriptar(encriptador) {
  // Definir la matriz de sustituciones
  let matriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
  
  // Convertir el texto a minúsculas
  encriptador = encriptador.toLowerCase();

  // Validar caracteres permitidos
  if (/[^a-z\s]/.test(encriptador)) {
      document.querySelector(".text-area").innerText = "Error: Solo se permiten letras minúsculas y espacios.";
      return "Error: Solo se permiten letras minúsculas y espacios.";
  }

  // Encriptar el texto solo si pasa la validación
  for (let index = 0; index < matriz.length; index++) {
      // Reemplazar caracteres de acuerdo a la matriz
      encriptador = encriptador.replaceAll(matriz[index][0], matriz[index][1]);
  }

  // Retornar el texto encriptado
  return encriptador;
}



//Traduce el mensaje codificado 

function botonDesencriptar () {
  const textoDesencriptado =  desencriptar(textArea.value);
  mensaje.value = textoDesencriptado
  textArea.value = "";
  mensaje.style.backgroundImage = "none";
}



function desencriptar (desencriptado) {

  let matriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
  desencriptado=desencriptado.toLowerCase()

  //valida la función
  
  if (/[^a-z\s]/.test(desencriptado)) {
    document.querySelector(".text-area").innerText = "Error: Solo se permiten letras minúsculas y espacios.";
    return "Error: Solo se permiten letras minúsculas y espacios.";
  }


  for (let index = 0; index < matriz.length; index ++) {
      if (desencriptado.includes(matriz[index][1])) {
          desencriptado = desencriptado.replaceAll(matriz[index][1], matriz[index][0])
      }
      
  }

return desencriptado

}

function copiarAlPortapapeles() {
  // Usar la API del portapapeles para copiar el texto
  navigator.clipboard.writeText(mensaje.value)
      .then(() => {
          console.log('Texto copiado al portapapeles');
          // Puedes agregar alguna notificación visual aquí si lo deseas
      })
      .catch(err => {
          console.error('Error al copiar el texto: ', err);
      });
}

botonCopiar.addEventListener("click", copiarAlPortapapeles);




