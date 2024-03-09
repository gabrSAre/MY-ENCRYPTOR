alert('DIGITA UN NÚMERO ENTRE 1 A 10');


let numeroSecreto=6;
let numeroUsuario=0;



while(numeroUsuario!=numeroSecreto){

    numeroUsuario = prompt('ingresa un número entre 1 y 10'); 
    console.log(numeroUsuario);

    

    if(numeroUsuario==numeroSecreto){

        alert(`Adivinaste, el numero secreto es: ${numeroUsuario}`);


    }

    else if(numeroUsuario>numeroSecreto){
        alert('El número secreto es menor');
    }

    else{
        alert('El número secreto es mayor');
    }

  

 

}

//DTMLJC+