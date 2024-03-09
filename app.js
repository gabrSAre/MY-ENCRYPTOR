let numeroSecreto= Math.floor(Math.random()*1000)+1;
console.log(numeroSecreto);
let numeroUsuario=0;
let intentos=1;



while(numeroUsuario!=numeroSecreto){
    

    numeroUsuario = parseInt(prompt('ingresa un número entre 1 y 10')); 
    console.log(typeof(numeroUsuario));

    

    if(numeroUsuario==numeroSecreto){

        alert(`Adivinaste en ${intentos} ${intentos==1? 'vez':'veces'} , el numero secreto es: ${numeroUsuario}`);
    }

    else if(numeroUsuario>numeroSecreto){
        alert('El número secreto es menor');
    }

    else{
        alert('El número secreto es mayor');
    }

    
    if(intentos==10){
        alert('Perdiste, el número de intentos se agotó');
        break;
    }

   intentos++;

 

}
 
   
     
   
    

//DTMLJC+