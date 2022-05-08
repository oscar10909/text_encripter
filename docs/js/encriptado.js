/* capturar la info del input y volverla a mostrar en otro elemento */
const inputMensaje = document.querySelector('.mensaje');
const copia = document.querySelector('.copia');

var botonEncriptar = document.querySelector('.btnEnc');
var imagenMensaje = document.querySelector('.esconder');
let matrizCodigo = [['e', 'enter'], ['o', 'ober'], ['i', 'imes'], ['a', 'ai'], ['u', 'ufat']];

function tomarMensaje(){
    var mensaje = inputMensaje.value.toLowerCase();
    copia.value = encriptarMensaje(mensaje); //.textContent
    // console.log(mensajeEncriptado);
    inputMensaje.value = "";
    textarea.style.height = "48px";
}

function encriptarMensaje(mensaje) {   
    if(mensaje.length > 0)
    {
        for (let i = 0; i < matrizCodigo.length; i++) {
            if (mensaje.includes(matrizCodigo[i][0])) {
                mensaje = mensaje.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
            } 
        }
        copia.style.display = "inherit";
        imagenMensaje.style.display = "none";
        return mensaje;
        /*
        var mensajeEncriptado = mensaje.replace(/e/igm, "enter");
        var mensajeEncriptado = mensajeEncriptado.replace(/o/igm, "ober");
        var mensajeEncriptado = mensajeEncriptado.replace(/i/igm, "imes");
        var mensajeEncriptado = mensajeEncriptado.replace(/a/igm, "ai");
        var mensajeEncriptado = mensajeEncriptado.replace(/u/igm, "ufat");
        return mensajeEncriptado;
        */
    }else{
        imagenMensaje.style.display = "inherit";
        copia.style.display = "none";
        mensaje = "";
        return mensaje;
    }
}

botonEncriptar.addEventListener('click', tomarMensaje);


var botonDesencriptar = document.querySelector('.btnDesenc');
botonDesencriptar.addEventListener('click', tomarMensajeEnc);

function tomarMensajeEnc(){
    var mensaje = copia.value;
    desencriptarMensaje(mensaje)
    // console.log(mensajeEncriptado);
    // inputMensaje.value = "";
}

function desencriptarMensaje(mensaje) {
    if(mensaje.length > 0)
    {
        for (let i = 0; i < matrizCodigo.length; i++) {
            if (mensaje.includes(matrizCodigo[i][1])) {
                mensaje = mensaje.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
            } 
        }
        copia.value = mensaje; //.textContent
        return mensaje;
    }else{
        mensaje = "";
        return mensaje;
    }
}

var botonCopiar = document.querySelector('.btnCopiar');
botonCopiar.addEventListener('click', copiarMensaje);

function copiarMensaje() {
    var mensajeCopiado = copia;
    mensajeCopiado.select();
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
}

// cambiar la altura conforme se escribe en el textarea
const textarea = document.querySelector('textarea');
textarea.addEventListener('keyup', event =>{
    textarea.style.height = "0px";
    let scrollAltura = event.target.scrollHeight;
    textarea.style.height = `${scrollAltura}px`;
});