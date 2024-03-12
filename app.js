

//*****************FUNCIONES PARA MODIFICAR TITULOS Y PARRAFOS***************************//

function eliminarTexto(elemento){
    let desaparecerTexto=document.getElementById(elemento);
    desaparecerTexto.innerHTML="";
}

function agregarTexto(elemento,texto){
    let insertarTexto=document.getElementById(elemento);
    insertarTexto.innerHTML=texto;
}




//****************FUNCIONES RELACIONADAS A EVENTOS CON LOS BOTONES***********************//


/**FUNCIÓN CREAR BOTON**/

function crearBoton(){
   
    const boton=document.createElement('button');
    boton.type='button';
    boton.innerText='Copiar';
    document.getElementById('cajaFinal').appendChild(boton);
    let estilo=document.getElementById('cajaFinal').appendChild(boton).style;
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
    
    ///////////EVENTOS///////////
    
    let evento=document.getElementById('cajaFinal').appendChild(boton).onclick;
    evento=eliminar;

}

//************************************FUNCION PRUEBA************************************//

function eliminar(){
    let desaparecerTexto=document.getElementById('areaTexto2');
    desaparecerTexto.innerHTML="hola";
}








//**************************FUNCION ELIMINAR DRAGON************************************//

function eliminarDragon(elemento){
    document.getElementById(elemento).style.background="linear-gradient(#4a5c60,#aba7a0)";
}


//***************************FUNCIONES CAPTURAR TEXTO***********************************//

function capturar(){
    let texto=document.getElementById('areaTexto1').value;
    console.log(texto);
    return texto;
} 


//***************************FUNCION TRASPORTAR TEXTO***********************************//

function trasportar(){
    let texto=document.getElementById('areaTexto2');
    texto.innerHTML=capturar();
}



//***************************FUNCIONES ENCRIPTAR Y DESENCRIPTAR*************************//

function encriptar(){
    eliminarTexto('titulo');
    eliminarTexto('parrafo');
    eliminarDragon('cajaFinal');
    crearBoton();
    trasportar();
    

}

function desencriptar(){

    
    eliminarTexto('titulo');
    eliminarTexto('parrafo');
    eliminarDragon('cajaFinal');
    crearBoton();
    

}









   
    

//DTMLJC+