let mensajeDinicio=document.getElementById('mensaje-inicial');
let botonEncriptar=document.getElementById('boton-encriptar');


mensajeDinicio.addEventListener('keyup',validar);




//************************************METODO VALIDAR*************************************//


function validar(){
    let deshabilitar=false;
    
    if





}



//***********************************ZONA DE FUNCIONES***********************************//
/*****************************************************************************************/





//*****************FUNCIONES PARA MODIFICAR TITULOS Y PARRAFOS***************************//

function eliminarTexto(elemento){
    let desaparecerTexto=document.getElementById(elemento);
    desaparecerTexto.innerHTML="";
}


//*************************FUNCIÓN RELACIONADA CON EL BOTON******************************//


/**FUNCIÓN CREAR BOTON**/

function botonCopiar(){

    //CREAR BOTON COPIAR
   
    const boton=document.createElement('button');
    boton.innerText='Copiar';
    document.getElementById('encriptado-final').appendChild(boton);

    //ESTILIZAR BOTON COPIAR
    let estilo=document.getElementById('encriptado-final').appendChild(boton).style;
    estilo.display='block';
    estilo.position='relative';
    estilo.top='2%';
    estilo.left='17%';
    estilo.width='355px';
    estilo.height='57px';
    estilo.margin='10px';
    estilo.borderRadius='10px';
    estilo.color='rgb(30 57 105)';
    estilo.fontSize='25px';
    estilo.border= '0';
    estilo.background='linear-gradient(#4a5c60, #d2d1cf)';
    estilo.boxShadow='0 0 100px #4d585f';
    estilo.cursor='pointer';  
    
    //ASIGNANDO EVENTOS AL BOTON COPIAR
    document.getElementById('encriptado-final').appendChild(boton).onclick=eliminar;
    

}




//*****************************FUNCION ELIMINAR TEXTO************************************//

function eliminar(){
    let desaparecerTexto=document.getElementById('mensaje-final');
    desaparecerTexto.innerHTML=" "; 
}




//***************************FUNCIÓN HABILITAR BOTONES***********************************//


function habilitar(){
    document.getElementById('boton-encriptar').removeAttribute('disabled');
}




//**************************FUNCION ELIMINAR DRAGON************************************//

function eliminarDragon(elemento){
    document.getElementById(elemento).style.background="linear-gradient(#4a5c60,#aba7a0)";
}



//***************************FUNCIONES CAPTURAR TEXTO***********************************//

function capturar(){
    let texto=document.getElementById('mensaje-inicial').value;
    console.log(texto);
    return texto;
} 



//***************************FUNCION TRASPORTAR TEXTO***********************************//

function trasportar(){
    let texto=document.getElementById('mensaje-final');
    texto.innerHTML=capturar();
}



//***************************FUNCIONES ENCRIPTAR Y DESENCRIPTAR*************************//

function encriptar(){
    eliminarTexto('titulo');
    eliminarTexto('parrafo');
    eliminarDragon('encriptado-final');
    botonCopiar();
    trasportar();
    

}

function desencriptar(){

    
    eliminarTexto('titulo');
    eliminarTexto('parrafo');
    eliminarDragon('encriptado-final');
    botonCopiar();
    

}









   
    

//DTMLJC+