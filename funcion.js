// script.js

function encriptar() {
    let texto = document.getElementById("inputText").value;
    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.getElementById("outputText").value = textoEncriptado;
}

function desencriptar() {
    let textoEncriptado = document.getElementById("inputText").value;
    let textoDesencriptado = textoEncriptado
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById("outputText").value = textoDesencriptado;
}

function copiarTexto() {
    let textoOutput = document.getElementById("outputText");
    let textoInput = document.getElementById("inputText");
    
    textoOutput.select();
    textoOutput.setSelectionRange(0, 99999); // Para móviles
    document.execCommand("copy");
    
    // Elimina el texto de ambos campos
    textoOutput.value = '';
    textoInput.value = '';
}

//function copiarTexto() {
    let texto = document.getElementById("outputText");
    texto.select();
    texto.setSelectionRange(0, 99999); // Para móviles
    document.execCommand("copy");
     // Elimina el texto de ambos campos
    textoOutput.value = '';
    textoInput.value = '';
    //alert("Texto copiado al portapapeles");
//}
