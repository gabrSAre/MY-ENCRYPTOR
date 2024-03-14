let mensajeDinicio=document.getElementById('mensaje-inicial');
let botonEncriptar=document.getElementById('boton-encriptar');


mensajeDinicio.addEventListener('keyup',validar);




//***********************************ZONA DE FUNCIONES***********************************//
/*****************************************************************************************/

//************************************FUNCIÓN VALIDAR*********************************//


function validar(){
    let deshabilitar=false;
    
    if(mensajeDinicio==""){
        deshabilitar=true;

    }

    if(deshabilitar==true){
        botonEncriptar.disabled=true;
    }

    else{ 
        botonEncriptar.disabled=false;
    }


}


//***************************FUNCIONES ENCRIPTAR Y DESENCRIPTAR*************************//

function encriptar(){
    eliminarTexto('titulo');//Borra el titulo h1
    eliminarTexto('parrafo');//Borra el parrafo que acompaña el h1
    eliminarDragon('encriptado-final');//Estiliza el backgroun, pero sin la imagen dragon
    trasportar();//Toma el texto del id mensaje-inicial y lo lleva al id mensaje-final
   // deshabilitar();//Deshabilita el bonton encriptar
    validarTexto();
}

function desencriptar(){

    
    eliminarTexto('titulo');
    eliminarTexto('parrafo');
    eliminarDragon('encriptado-final');
    
    

}



//*****************************FUNCION ELIMINAR TEXTO************************************//

function eliminarTexto(elemento){
    let desaparecerTexto=document.getElementById(elemento);
    desaparecerTexto.innerHTML="";
}




//**************************FUNCION ELIMINAR DRAGON************************************//

function eliminarDragon(elemento){
    document.getElementById(elemento).style.background="linear-gradient(#4a5c60,#aba7a0)";
}



//***************************FUNCION TRASPORTAR TEXTO***********************************//

function trasportar(){
    let texto=document.getElementById('mensaje-final');
    texto.innerHTML=capturar();
}



//********************************FUNCION CAPTURAR ************************************//

function capturar(){
    let texto=document.getElementById('mensaje-inicial').value;
    return texto;
} 



//***************************FUNCIÓN VALIDAR TEXTO*********************************//

function validarTexto(){
    let mensajeFinal=document.getElementById('mensaje-final');


    if(mensajeFinal==""){
        botonCopiar();
    }



}




//****************************FUNCIÓN DESHABILITAR*********************************//

function deshabilitar(){
    botonEncriptar.disabled=true;
}




//*****************************FUNCION ELIMINAR************************************//

function eliminar(){
    let desaparecerTexto=document.getElementById('mensaje-final');
    desaparecerTexto.innerHTML=" "; 
    

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




//DTMLJC+