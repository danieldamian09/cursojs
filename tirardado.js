// Ubicar dentro del DOM

var verdado = document.getElementById('verdado');

// crear funcion

    function tirarDado( )
    {
        
        //generar un numero aleatorio
        
        var numeroAleatorio = Math.random( );
        
                
        //el numero debe ser entre 1 y 6
        
        var numero = Math.round((numeroAleatorio * 5) +1);
        
        
        
        //mostrar imagen de dado
        
        verdado.innerText = numero;
    }

    tirarDado ( );