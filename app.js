window.onload;

function modificarTexto(elemento){
    let desaparecerTexto=document.getElementById(elemento);
    desaparecerTexto.innerHTML="";
}

function modificarEstilos(elementoId){
    let estilo=document.getElementById(elementoId).style;
    estilo.backgroundColor="red";
    
}

function agregarTexto(elemento,texto){
    let desaparecerTexto=document.getElementById(elemento);
    desaparecerTexto.innerHTML=texto;

}



function alerta(){
    modificarTexto('titulo');
    modificarTexto('parrafo');
    modificarEstilos("cajaFinal");
}



function aterla(){
    agregarTexto('titulo', 'NINGÚN MENSAJE FUÉ ENCONTRADO');
    agregarTexto('parrafo', 'Ingresa el texto que deseas encriptar o desencriptar');

}




   
    

//DTMLJC+