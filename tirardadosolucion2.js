// Ubicar dentro del DOM

var verdado = document.getElementById('verdado');
var dado = document.getElementById('dado');

// crear funcion

    function tirarDado( )
    {
        
        //generar un numero aleatorio
        
        var numeroAleatorio = Math.random( );
        
                
        //el numero debe ser entre 1 y 6
        
        var numero = Math.round((numeroAleatorio * 5) +1);
        
        
        
        //mostrar imagen de dado
        
        //verdado.innerText = numero;
        
        switch (numero == 1){
        dado.src = 'dado1.png';
        

        else if (numero == 2){
            dado.src = 'dado2.png';
        }

        else if (numero == 3){
            dado.src = 'dado3.png';
        }

        else if (numero == 4){
            dado.src = 'dado4.png';
        }

        else if (numero == 5){
            dado.src = 'dado5.png';
        }

        else{

            dado.src = 'dado6.png';

        }

        
        
    }

    tirarDado ( );