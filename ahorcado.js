var pantalla = document.querySelector("#ahorcado");
var pincel = pantalla.getContext("2d");



function tablero_juego()
{
    pincel.beginPath();
    pincel.fillStyle = "white";
    pincel.fillRect(0,0,1200,800);    
    pincel.strokeStyle = "black";
    pincel.strokeRect(0,0,1200,800);
    pincel.fill();
    pincel.stroke();
}

function dibujar_horca(intentos_errores)
{

    switch (intentos_errores) {
        case 0:
            dibujar_base_horca();
            break;
        case 1:
            dibujar_palo_verticar_horca();
            break;
        case 2:
            dibujar_palo_verticar_horca();
            break;        
        case 3:
            dibujar_palo_horizontal_horca();
            break;          
        case 4:
            dibujar_cabeza_persona_horca();
            break;
        case 5:
            dibujar_cuerpo_persona_horca();
            break;
        case 6:
            dibujar_cuerpo_persona_piernas();
            break;        
        case 7:
            dibujar_cuerpo_persona_brazo_izquierdo();
            break;    
        case 8:
            dibujar_cuerpo_persona_brazo_derecho();
            break; 
    }



}

/// Horca
function dibujar_base_horca()
{
    var posicion_suelo = {
        "ub_x1":10,
        "ub_y1":palabra.ubicacion_y,
        "ub_x2":palabra.posicionInicialLetra - 100,
        "ub_y2":palabra.ubicacion_y,
        "ub_x3":palabra.posicionInicialLetra - 120,
        "ub_y3":palabra.ubicacion_y - 20,
        "ub_x4":palabra.posicionInicialLetra - 370,
        "ub_y4":palabra.ubicacion_y -20
    }

    dibujar_rectangulo("green","green",posicion_suelo);
}

function dibujar_palo_verticar_horca()
{
    var posicion_apoyo = {
        "ub_x1":palabra.posicionInicialLetra - 340,
        "ub_y1":palabra.ubicacion_y - 20,
        "ub_x2":palabra.posicionInicialLetra - 340,
        "ub_y2":palabra.ubicacion_y - 120,
        "ub_x3":palabra.posicionInicialLetra - 280,
        "ub_y3":palabra.ubicacion_y  - 120,
        "ub_x4":palabra.posicionInicialLetra -  280,
        "ub_y4":palabra.ubicacion_y - 20
    }

    dibujar_rectangulo("#997950","#997950",posicion_apoyo);

    var posicion_vertical = {
        "ub_x1":palabra.posicionInicialLetra - 325,
        "ub_y1":palabra.ubicacion_y - 120,
        "ub_x2":palabra.posicionInicialLetra - 325,
        "ub_y2":palabra.ubicacion_y - 570,
        "ub_x3":palabra.posicionInicialLetra - 295,
        "ub_y3":palabra.ubicacion_y - 570,
        "ub_x4":palabra.posicionInicialLetra - 295,
        "ub_y4":palabra.ubicacion_y - 120
    }

    dibujar_rectangulo("#7C4700","#7C4700",posicion_vertical);
}

function dibujar_palo_horizontal_horca()
{
    var posicion_horizontal = {
        "ub_x1":palabra.posicionInicialLetra - 325,
        "ub_y1":palabra.ubicacion_y - 570,
        "ub_x2":palabra.posicionInicialLetra - 75,
        "ub_y2":palabra.ubicacion_y - 570,
        "ub_x3":palabra.posicionInicialLetra - 75,
        "ub_y3":palabra.ubicacion_y - 540,
        "ub_x4":palabra.posicionInicialLetra - 325,
        "ub_y4":palabra.ubicacion_y - 540
    }

    dibujar_rectangulo("#7C4700","#7C4700",posicion_horizontal);

    var posicion_soporte = {
        "ub_x1":palabra.posicionInicialLetra - 200,
        "ub_y1":palabra.ubicacion_y - 540,
        "ub_x2":palabra.posicionInicialLetra - 295,
        "ub_y2":palabra.ubicacion_y - 440,
        "ub_x3":palabra.posicionInicialLetra - 295,
        "ub_y3":palabra.ubicacion_y - 420,
        "ub_x4":palabra.posicionInicialLetra - 180,
        "ub_y4":palabra.ubicacion_y - 540
    }

    dibujar_rectangulo("#997950","#997950",posicion_soporte);

    // Clavos
    var  radio = 7;
    ub_x = palabra.posicionInicialLetra - 310;
    ub_y = palabra.ubicacion_y - 555;
    dibujar_circulo("#89CFEF","black",ub_x,ub_y,radio);

    ub_y = ub_y + 126;
    dibujar_circulo("#89CFEF","black",ub_x,ub_y,radio);

    ub_y = ub_y - 126;
    ub_x = ub_x + 125;
    dibujar_circulo("#89CFEF","black",ub_x,ub_y,radio);

}

function dibujar_cabeza_persona_horca()
{
    var posicion_soga = {
        "ub_x1":palabra.posicionInicialLetra - 100,
        "ub_y1":palabra.ubicacion_y - 540,
        "ub_x2":palabra.posicionInicialLetra - 100,
        "ub_y2":palabra.ubicacion_y - 440
    }
    dibujar_linea("red",posicion_soga);

    // Cabeza
    ub_x = palabra.posicionInicialLetra - 100;
    ub_y = palabra.ubicacion_y - 440,    
    radio = 25;
    dibujar_circulo("white","black",ub_x,ub_y,radio);

}

function dibujar_cuerpo_persona_horca()
{
    // cuerpo cuerpo
    var posicion_cuerpo = {
        "ub_x1":palabra.posicionInicialLetra - 100,
        "ub_y1":palabra.ubicacion_y - 415,
        "ub_x2":palabra.posicionInicialLetra - 100,
        "ub_y2":palabra.ubicacion_y - 265
    }
    dibujar_linea("black",posicion_cuerpo);
}

function dibujar_cuerpo_persona_piernas()
{
    // pierna izquierda
    var posicion_brazo_izquierdo = {
        "ub_x1":palabra.posicionInicialLetra - 100,
        "ub_y1":palabra.ubicacion_y - 265,
        "ub_x2":palabra.posicionInicialLetra - 150,
        "ub_y2":palabra.ubicacion_y - 205 
    }
    dibujar_linea("black",posicion_brazo_izquierdo);

    // pierna derecha
    var posicion_brazo_derecha = {
        "ub_x1":palabra.posicionInicialLetra - 100,
        "ub_y1":palabra.ubicacion_y - 265,
        "ub_x2":palabra.posicionInicialLetra - 100 + 50,
        "ub_y2":palabra.ubicacion_y - 205 
    }
    dibujar_linea("black",posicion_brazo_derecha);
}

function dibujar_cuerpo_persona_brazo_izquierdo()
{
    // brazo izquierda
    var posicion_brazo_izquierdo = {
        "ub_x1":palabra.posicionInicialLetra - 100,
        "ub_y1":palabra.ubicacion_y - 365,
        "ub_x2":palabra.posicionInicialLetra - 150,
        "ub_y2":palabra.ubicacion_y - 415 
    }
    dibujar_linea("black",posicion_brazo_izquierdo);

}

function dibujar_cuerpo_persona_brazo_derecho()
{
    // brazo derecho
    var posicion_brazo_derecho = {
        "ub_x1":palabra.posicionInicialLetra - 100,
        "ub_y1":palabra.ubicacion_y - 365,
        "ub_x2":palabra.posicionInicialLetra - 50,
        "ub_y2":palabra.ubicacion_y - 415 
    }
    dibujar_linea("black",posicion_brazo_derecho);

}

function dibujar_rectangulo(color_fondo,color_borde,posicion)
{
    pincel.beginPath(); 
    pincel.strokeStyle = color_fondo;
    pincel.fillStyle = color_borde;
    pincel.moveTo(posicion.ub_x1,posicion.ub_y1);
    pincel.lineTo(posicion.ub_x2,posicion.ub_y2);
    pincel.lineTo(posicion.ub_x3,posicion.ub_y3);
    pincel.lineTo(posicion.ub_x4,posicion.ub_y4);
    pincel.fill();
    pincel.stroke();
}

function dibujar_circulo(color_fondo,color_borde,ub_x,ub_y,radio)
{
    pincel.beginPath(); 
    pincel.fillStyle = color_fondo;   
    pincel.strokeStyle = color_borde;
	pincel.arc(ub_x,ub_y,radio,0,2*3.14);
    pincel.fill();
    pincel.stroke();
}

function dibujar_linea(color_fondo,posicion)
{
    pincel.beginPath(); 
    pincel.strokeStyle = color_fondo;
    //pincel.fillStyle = color_borde;
    pincel.moveTo(posicion.ub_x1,posicion.ub_y1);
    pincel.lineTo(posicion.ub_x2,posicion.ub_y2);
    //pincel.fill();
    pincel.stroke();
}



