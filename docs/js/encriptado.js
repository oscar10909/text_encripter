/* capturar la info del input y volverla a mostrar en otro elemento */
const inputMensaje = document.querySelector('.mensaje'); //escritura

// cambiar la altura del textarea conforme se escribe en el
const textarea = document.querySelector('textarea');
textarea.addEventListener('keyup', event =>{
    textarea.style.height = "0px";
    textarea.style.overflowY = "hidden";
    let scrollAltura = event.target.scrollHeight;
    textarea.style.height = `${scrollAltura}px`;
    if(textarea.style.height > "550px"){
         textarea.style.overflowY = "auto";
     }
});

// validar texto introducido, solo minúsculas y sin acento
inputMensaje.addEventListener('keypress', event =>{
    if (!validacion(event)){
        event.preventDefault(); //no permite la operación (escribir en teclado)
    }
});

function validacion(teclado) {
    const llave = String.fromCharCode(teclado.keyCode); //string con el caracter de tecla presionada a partir de su codigo
    // const llave = teclado.keyCode; solo entrega el caracter, no es string
    // console.log(teclado)
    //console.log(teclado.keyCode); //codigo ANCII de tecla 
    const minusculas = /^[a-z\s]+$/; //expresión regular
    if(llave.match(minusculas)){
        return true;
    }
}

const copia = document.querySelector('.copia'); //lectura

var botonEncriptar = document.querySelector('.btnEnc');
var imagenMensaje = document.querySelector('.esconder'); //elementos mensaje no encontrado
// matriz de decodificación
let matrizCodigo = [['e', 'enter'], ['o', 'ober'], ['i', 'imes'], ['a', 'ai'], ['u', 'ufat']];
botonEncriptar.addEventListener('click', tomarMensaje);

function tomarMensaje(){
    var mensaje = inputMensaje.value;
    botonCopiar.innerHTML = "Copiar";
    if(mensaje.length > 0)
    {
        copia.value = encriptarMensaje(mensaje); //.textContent
        // console.log(mensaje);
        copia.style.display = "inherit";
        imagenMensaje.style.display = "none";
        inputMensaje.value = "";
        textarea.style.height = "48px";
    }else{
        imagenMensaje.style.display = "inherit";
        copia.style.display = "none";
        copia.value = "";
    } 
}

function encriptarMensaje(mensaje) {   
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (mensaje.includes(matrizCodigo[i][0])) {
            mensaje = mensaje.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        } 
    }
    return mensaje;
    /* segunda forma de resolver pero con más lineas repetidas
        var mensajeEncriptado = mensaje.replace(/e/igm, "enter");
        var mensajeEncriptado = mensajeEncriptado.replace(/o/igm, "ober");
        var mensajeEncriptado = mensajeEncriptado.replace(/i/igm, "imes");
        var mensajeEncriptado = mensajeEncriptado.replace(/a/igm, "ai");
        var mensajeEncriptado = mensajeEncriptado.replace(/u/igm, "ufat");
        return mensajeEncriptado;

        var mensajeEncriptado = mensaje.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    */
}

const botonCopiar = document.querySelector('.btnCopiar');
botonCopiar.addEventListener('click', copiarMensaje);

function copiarMensaje() {
    // if(copia.value.length > 0){
        // console.log(copia);
        // console.log(copia.value);
        // console.log(copia.value.length);
        // copia.select();
        // document.execCommand("copy");
        // botonCopiar.innerHTML = "Copiado";
    // }
    navigator.clipboard.writeText(copia.value);
    botonCopiar.innerHTML = "Copiado";
}

var botonDesencriptar = document.querySelector('.btnDesenc');
botonDesencriptar.addEventListener('click', tomarMensajeEnc);

function tomarMensajeEnc(){
    botonCopiar.innerHTML = "Copiar";
    if(copia.value.length > 0){
        var mensaje = copia.value;
        copia.value = desencriptarMensaje(mensaje)
    }
}

function desencriptarMensaje(mensaje) {
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (mensaje.includes(matrizCodigo[i][1])) {
            mensaje = mensaje.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        } 
    }
    return mensaje;
}