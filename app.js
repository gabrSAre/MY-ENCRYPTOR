//***********************************ZONA DE variables***********************************//
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
    encriptador();//Toma el texto del id mensaje-inicial, lo ecripta y lo lleva al id mensaje-final.
    validarTexto();//Permite que el boton Copiar sea creado solamente una vez.
   
}

function desencriptar(){
    desencriptador();//Desencrita el mensaje entregado en el id mensaje-inicial y lo lleva a su estado original al id mensaje-final
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



//***************************FUNCION ENCRIPTAR TEXTO***********************************//

function encriptador(){
   
    let valor=capturar();
    
    let encriptando=[];
    let vector=valor;
    vector=vector.toLowerCase().split("");  
   

    for(let i=0;i<vector.length;i++){
        encriptando.push(vector[i]);

        if(encriptando[i]=='a'){
            encriptando[i]='ai';
        }
        else if(encriptando[i]=='e'){
            encriptando[i]='enter';
        }
        else if(encriptando[i]=='i'){
            encriptando[i]='imes';
        }
        else if(encriptando[i]=='o'){
            encriptando[i]='ober';
        }
        else if(encriptando[i]=='u'){
            encriptando[i]='ufat';
        }

    }
         
    let unir=encriptando.join("");
    let texto=document.getElementById('mensaje-final');
    texto.innerHTML=unir;
    limpiar();
    return false;  
}



//***************************FUNCION DESENCRIPTAR TEXTO**********************************//


function desencriptador(){
   
    let valor=capturar();
    let desencriptando=[];
    let vector=valor;
    vector=vector.toLowerCase().split("");  
    console.log(vector);
    
    for(let i=0;i<vector.length;i++){
        

        if(vector[i]=='a' && vector[i+1]=='i'){
            desencriptando.push('a');
            i++;
        }
        else if(vector[i]=='e'&& vector[i+1]=='n'&& vector[i+2]=='t'&& vector[i+3]=='e' && vector[i+4]=='r' ){
            desencriptando.push('e');
            i=i+4;
        }
        else if(vector[i]=='i'&& vector[i+1]=='m'&& vector[i+2]=='e'&& vector[i+3]=='s'){
            desencriptando.push('i');
            i=i+3;
        }
        else if(vector[i]=='o'&& vector[i+1]=='b'&& vector[i+2]=='e'&& vector[i+3]=='r'){
            desencriptando.push('o');
            i=i+3;
        }
        else if(vector[i]=='u'&& vector[i+1]=='f'&& vector[i+2]=='a'&& vector[i+3]=='t'){
            desencriptando.push('u');
            i=i+3;
        }
        else{
            desencriptando.push(vector[i]);
        }


    }
         
    let unir=desencriptando.join("");
    let texto=document.getElementById('mensaje-final');
    texto.innerHTML=unir;
    limpiar();
    return false;  
}



//********************************FUNCION CAPTURAR ************************************//

function capturar(){
    let texto=document.getElementById('mensaje-inicial').value;
    return (texto);
    
} 



//********************************FUNCION LIMPIAR ************************************//

function limpiar(){
    let reseteo=document.getElementById('encriptado-inicial');
    reseteo.reset();
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
    //estilo.border= '0';
    estilo.background='linear-gradient(#4a5c60, #d2d1cf)';
    estilo.boxShadow='0 0 100px #4d585f';
    estilo.cursor='pointer';   
    
    //ASIGNANDO EVENTOS AL BOTON COPIAR
    document.getElementById('encriptado-final').appendChild(boton).onclick=copiarText;
    
    

}

function copiarText(){
    let copiar=document.getElementById('mensaje-final');
    copiar.select();
    copiar.setSelectionRange(0 , 99999);
    navigator.clipboard.writeText(copiar.value);

}






//DTMLJC+