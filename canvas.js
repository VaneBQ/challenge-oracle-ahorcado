var btnNuevaPalabra = document.querySelector('#nueva-palabra');
var btnIniciaJuego = document.querySelector('#iniciar-juego');
var palabrasSecretas = [];
var es_juego_iniciado = false;
var numeroIntentoError = 0;


var palabra = {
    "palabraSecreta":"",
    "posicionInicialLetra":400,
    "ubicacion_x":50,
    "ubicacion_y":760,
    "indicePalabraIngresada":0,
    "ubicaciones_x_letras_correcta":[],
    "ubicacion_x_letra_incorrecta":600,
    "intentos_errores":0,
    "intentos_correctos":0
}


btnNuevaPalabra.addEventListener("click",function(event){
    //event.preventDefault();
    var txtPalabra = document.querySelector(".text-input");
    if (es_juego_iniciado == false)
    {
       agregar_nueva_palabra(txtPalabra);
    }
    else
    {
       juegar(txtPalabra);
    }
});

btnIniciaJuego.addEventListener("click",function(event){  
    es_juego_iniciado = true;
    tablero_juego();
    crear_guiones();

});

function agregar_nueva_palabra(txtPalabra)
{
    var estado = es_palabra_valida(txtPalabra.value);
    if (estado == true)
    {
        palabrasSecretas.push(txtPalabra.value);
        txtPalabra.value = ""; 
    }
    else
    {
        alert("- Solo funciona con letras mayúsculas. \n - No debe utilizar letras con acentos ni caracteres especiales");
    }  
}

function juegar(txtPalabra)
{
    var estado = es_palabra_valida(txtPalabra.value);
    if (estado == true && txtPalabra.value.length == 1)
    {
        validar_letra(txtPalabra.value);
        validar_juego();
    }
    else
    {
        alert("- Solo funciona con letras mayúsculas. \n - No debe utilizar letras con acentos ni caracteres especiales \n - Una sola letra");
    }  
}

function es_palabra_valida(palabra)
{

        var estado = true;
        var filtro = 'ABCDEFGHIJKLNMÑOPQRSTUVWXYZ';//Caracteres validos
        
        //Recorrer el texto y verificar si el caracter se encuentra en la lista de validos 
        for (var i=0; i<palabra.length; i++)
        {
           if (filtro.indexOf(palabra.charAt(i)) == -1) 
           {
                estado = false;
                break;
           }
        }
        
        return estado;
    
}

function escojer_palabra()
{   
    var palabraSecreta ="";
    if (palabrasSecretas.length > 0)
    {
        var indice = Math.floor(Math.random()*palabrasSecretas.length);
        palabraSecreta = palabrasSecretas[indice];
    }

    return  palabraSecreta
}

// Palabras

function crear_guiones()
{
    palabra.palabraSecreta = escojer_palabra();
    
    if (palabra.palabraSecreta.length>0)
    {
        var mover = palabra.posicionInicialLetra;
        for (i = 0; i < palabra.palabraSecreta.length; i++)
        {
            pincel.strokeStyle = "black";               
            pincel.moveTo(mover,palabra.ubicacion_y);
            palabra.ubicaciones_x_letras_correcta.push(mover);
            var ubicacion_x = mover + palabra.ubicacion_x - 25;
            pincel.lineTo(ubicacion_x,palabra.ubicacion_y);
            pincel.stroke();
            mover = mover + palabra.ubicacion_x;
        }

    }
    else
    {
        alert("No hay palabra secreta");
    }
    
}

function validar_letra(letra)
{  
    var posicion_letra = buscar_posicion(letra);
    if (posicion_letra != -1) 
    {
        dibujar_letra_correcta(letra,posicion_letra);
        palabra.intentos_correctos ++;
    }
    else
    {
        dibujar_letra_incorrecta(letra);
        dibujar_horca(palabra.intentos_errores);
        palabra.intentos_errores ++;
    }
}

function validar_juego()
{     
    var ub_x = palabra.ubicacion_x_letra_incorrecta - 100; 
    var ub_y = 350;
    var  tamanio = "25px Arial";
    if ( palabra.intentos_errores >= 9) 
    {
       es_juego_iniciado = false;
       dibujar_fin_incorrecto(ub_x,ub_y,tamanio);
       
    }
    if (palabra.palabraSecreta.length == palabra.intentos_correctos)
    {
        es_juego_iniciado = false;
        dibujar_fin_correcta(ub_x,ub_y,tamanio);
        
    }
    if (es_juego_iniciado == false)
    {
        palabra.indicePalabraIngresada = 0;
        palabra.intentos_correctos = 0;
        palabra.intentos_errores = 0;
        palabra.palabraSecreta = "";
        palabra.ubicaciones_x_letras_correcta = [];
    }
}

function buscar_posicion(letra)
{
    var posicion = palabra.palabraSecreta.indexOf(letra);
    palabra.indicePalabraIngresada ++;
    return posicion;
}

function dibujar_letra_correcta(letra,posicion_letra)
{  
    var ub_x = palabra.ubicaciones_x_letras_correcta[posicion_letra];
    ub_y = palabra.ubicacion_y;
    ub_x_inicial = palabra.posicionInicialLetra;
    dibujar_letra(letra,
                 "black",
                 ub_x_inicial,
                 ub_x,
                 ub_y);

    reemplazar_letra(letra);
}

function dibujar_letra_incorrecta(letra)
{  
    ub_x_inicial = palabra.ubicacion_x_letra_incorrecta;
    palabra.ubicacion_x_letra_incorrecta = palabra.ubicacion_x_letra_incorrecta + 25;
    ub_y = 400;
    dibujar_letra(letra,
                  "red",
                  ub_x_inicial,
                  palabra.ubicacion_x_letra_incorrecta,
                  ub_y);
}

function reemplazar_letra(letra)
{
    palabra.palabraSecreta = palabra.palabraSecreta.replace(letra,'-');
}

function dibujar_letra(letra,color,ub_x_inicial,ub_x,ub_y)
{
    pincel.beginPath(); 
    pincel.font = "25px Arial";
    pincel.moveTo(ub_x_inicial, ub_y);
    pincel.fillStyle = color;
    pincel.fillText(letra,ub_x,ub_y);
    pincel.fill();
     
}

function dibujar_fin_correcta(ub_x,ub_y, tamanio)
{  
    pincel.font =  tamanio ; 
    texto = "Ganastes,";
    pincel.fillStyle = "green";
    pincel.fillText(texto,ub_x,ub_y-50);
    texto = "Felicidades!,";
    pincel.fillText(texto,ub_x,ub_y);
    pincel.fill();
}

function dibujar_fin_incorrecto(ub_x,ub_y, tamanio)
{ 
    pincel.font =  tamanio ; 
    texto = "Fin del Juego";
    pincel.fillStyle = "red";
    pincel.fillText(texto,ub_x,ub_y);
    pincel.fill();
}






