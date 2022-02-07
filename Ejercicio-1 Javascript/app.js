let textarea = document.getElementById('textarea');
const btnMayus = document.getElementById('btnMayus');
const btnMin = document.getElementById('btnMin');
const btnIni = document.getElementById('btnIni');
const btnBorrar = document.getElementById('btnBorrar');



btnMayus.addEventListener('click', TextoMayusculas);
btnMin.addEventListener('click', TextoMinusculas);
btnIni.addEventListener('click', InicialMayuscula);
btnBorrar.addEventListener('click', BorrarTexto);


function TextoMayusculas(){
    let text = textarea.value;
    text = text.toUpperCase();
    textarea.value = text;

}

function TextoMinusculas(){
    let text = textarea.value;
    text = text.toLowerCase();
    textarea.value = text;
}

function InicialMayuscula(){
    textarea.value = InicialesMayuscula();
}


function InicialesMayuscula(){
    let text = textarea.value;
    let palabras = text.split(' ');
    return palabras.map(p => p[0].toUpperCase() + p.slice(1)).join(' ');
}

function BorrarTexto(){
    textarea.value = "";
}