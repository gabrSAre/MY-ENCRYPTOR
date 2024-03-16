let cont=0;  
let mensajeDinicio=document.getElementById('mensaje-inicial');
let botonEncriptar=document.getElementById('boton-encriptar');
let botonDesEncriptar=document.getElementById('boton-desencriptar');


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
        botonDesEncriptar.disabled=true;
    }

    else{ 
        botonEncriptar.disabled=false;
        botonDesEncriptar.disabled=false;
    }


}


//***************************FUNCIONES ENCRIPTAR Y DESENCRIPTAR*************************//

function encriptar(){
    trasportar();//Toma el texto del id mensaje-inicial y lo lleva al id mensaje-final
   // deshabilitar();//Deshabilita el bonton encriptar
    validarTexto();//Permite que el boton Copiar sea creado solamente una vez.
}

function desencriptar(){
    trasportar();//Toma el texto del id mensaje-inicial y lo lleva al id mensaje-final
   // deshabilitar();//Deshabilita el bonton encriptar
    validarTexto();//Permite que el boton Copiar sea creado solamente una vez.
    
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
    let valor=capturar();
    let texto=document.getElementById('mensaje-final');
    texto.innerHTML=valor;
}



//********************************FUNCION CAPTURAR ************************************//

function capturar(){
    let texto=document.getElementById('mensaje-inicial').value;
    return texto;
} 



//***************************FUNCIÓN VALIDAR TEXTO*********************************//

let mensajeFinal=document.getElementById('mensaje-final');
mensajeFinal.addEventListener('keyup',validarTexto);


function validarTexto(){
    

    if(mensajeFinal!=""){
        while(cont<1){
            
            eliminarTexto('titulo');//Borra el titulo h1
            eliminarTexto('parrafo');//Borra el parrafo que acompaña el h1
            eliminarDragon('encriptado-final');//Estiliza el backgroun, pero sin la imagen dragon
            botonCopiar();//Crea el boton copiar
            cont++;
            
        }
    }
  
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
    //document.getElementById('encriptado-final').appendChild(boton).onclick=eliminar;
    

}




//DTMLJC+