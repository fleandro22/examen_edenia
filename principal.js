document.getElementById('txt_id_cliente').focus();

var coordenadas = {};

if (navigator.geolocation) { //Validar si hay acceso web a la ubicación
    navigator.geolocation.getCurrentPosition(mostrarUbicacion); //Obtiene la posición
    } else {
    alert("¡Error! Este navegador no soporta la Geolocalización.");
}

//Funcion para obtener latitud y longitud
function mostrarUbicacion(position) {
    var latitud = position.coords.latitude; 
    var longitud = position.coords.longitude;

    coordenadas.latitud = latitud;
    coordenadas.longitud = longitud;
    
}   

setTimeout(function() {

    var latitud_cam  = coordenadas.latitud;
    var longitud_cam = coordenadas.longitud;
    var direccion    =  '';


    var MapCenter = {lat: latitud_cam, lng: longitud_cam}; /*Ubicacion inicial Mapa*/
    center        = MapCenter;

    var mapOptions = {
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: MapCenter
    };

    map = new google.maps.Map(document.getElementById('map'), mapOptions);


    var marker = new google.maps.Marker({
        map: map,
        position: MapCenter
    });

    /*capa de trafico*/
    var trafficLayer = new google.maps.TrafficLayer();
    trafficLayer.setMap(map);

    var contentStringG1 = '<div id="content">'+
                            '<div id="bodyContent">'+
                            '<p><strong>'+direccion+'</strong><br />'+
                            '</p></div>'+
                            '</div>';

    var infowindowg1 = new google.maps.InfoWindow({
            content: contentStringG1
    });


    var CAMARA1 = {lat: latitud_cam, lng: longitud_cam};
    var markerg1 = new google.maps.Marker({
            position: CAMARA1,
            title: "Camara",
            map: map
    });

    markerg1.addListener('click', function() {
            infowindowg1.open(map, markerg1);
    });




}, 500);

let mapa        = document.getElementById('map');


function validar_envio() 
{

    //declaracion de variables
    let txt_id_cliente   = document.getElementById('txt_id_cliente');
    let txt_nif          = document.getElementById('txt_nif');
    let txt_nombre_com   = document.getElementById('txt_nombre_com');
    let txt_razon_social = document.getElementById('txt_razon_social');
    let txt_direccion    = document.getElementById('txt_direccion');
    let txt_cod_postal   = document.getElementById('txt_cod_postal');
    let txt_provincia    = document.getElementById('txt_provincia');
    let txt_pais         = document.getElementById('txt_pais');
    let txt_email        = document.getElementById('txt_email');


    
    
    
    let tamaño_cadena_nif = txt_nif.value.length;
    let ultima_posicion   = txt_nif.value.substring(tamaño_cadena_nif-1)
    let tipoCaracter      = esLetra(ultima_posicion)
    
    /*Expresion regular para validar el email*/
    let patron            = /[A-Za-z]+@[a-z]+\.[a-z]+/;
    let esMail            = patron.test(txt_email.value);
        

    /*Limpiar campos*/
    document.getElementById('mje_error').innerHTML = 'El campo es obligatorio';
    document.getElementById('mje_error').classList.add("hide");
    document.getElementById('mje_success').classList.add("hide");
    txt_id_cliente.classList.remove("resaltar_error");
    txt_nif.classList.remove("resaltar_error");
    txt_nombre_com.classList.remove("resaltar_error");
    txt_razon_social.classList.remove("resaltar_error");
    txt_direccion.classList.remove("resaltar_error");
    txt_cod_postal.classList.remove("resaltar_error");
    txt_provincia.classList.remove("resaltar_error");
    txt_pais.classList.remove("resaltar_error");
    txt_email.classList.remove("resaltar_error");
     mapa.classList.add("hide")
    


    //Valir id cliente
    if (txt_id_cliente.value.length==0){

            
        txt_id_cliente.focus();
        
        document.getElementById('mje_error').classList.remove("hide");
        txt_id_cliente.classList.add("resaltar_error");
        document.getElementById('mje_error').innerHTML += '. Solo numeros.';
        
        return 0;

    }else if (txt_nif.value.length==0 || txt_nif.value.length < 9 || !esLetra(ultima_posicion)){//Validar Nit

            
        txt_nif.focus();
        
        document.getElementById('mje_error').classList.remove("hide");
        txt_nif.classList.add("resaltar_error");
        document.getElementById('mje_error').innerHTML += '. Minimo 8 Digitos y debe terminar en letra';

        
        
        return 0;

    }

    else if (txt_nombre_com.value.length==0){//Validar Nombre compañia

            
        txt_nombre_com.focus();
        
        document.getElementById('mje_error').classList.remove("hide");
        txt_nombre_com.classList.add("resaltar_error");
        
        return 0;
    }
    else if (txt_direccion.value.length==0){//Validar direccion

        
        txt_direccion.focus();
        
        document.getElementById('mje_error').classList.remove("hide");
        txt_direccion.classList.add("resaltar_error");
        
        return 0;
    }
    else if (txt_razon_social.value.length==0){//Validar Razon Social

            
        txt_razon_social.focus();
        
        document.getElementById('mje_error').classList.remove("hide");
        txt_razon_social.classList.add("resaltar_error");
        
        return 0;
    }
    else if (txt_cod_postal.value.length==0){//Validar Cod POstal

            
        txt_cod_postal.focus();
        
        document.getElementById('mje_error').classList.remove("hide");
        txt_cod_postal.classList.add("resaltar_error");
        
        return 0;
    }
    else if (txt_provincia.value.length==0){//Validar Provincia

            
        txt_provincia.focus();
        
        document.getElementById('mje_error').classList.remove("hide");
        txt_provincia.classList.add("resaltar_error");
        
        return 0;
    }
    else if (txt_pais.value.length==0){//Validar pais

        
        txt_pais.focus();
        
        document.getElementById('mje_error').classList.remove("hide");
        txt_pais.classList.add("resaltar_error");
        
        return 0;
    }
    else if (txt_email.value.length==0 || !esMail){//Validar Email

            
        txt_email.focus();
        
        document.getElementById('mje_error').classList.remove("hide");
        txt_email.classList.add("resaltar_error");
        
        return 0;
    }
    else
    {

        document.getElementById("frm_nuevo_cliente").reset();
        mapa.classList.remove("hide")
        document.getElementById('mje_success').classList.remove("hide");

        setTimeout(function() {

            document.frm_nuevo_cliente.submit();
        }, 2500);

         
     }
}

function cerrar() 
{

    document.getElementById("frm_nuevo_cliente").reset();
        
    setTimeout(function() {

        document.frm_nuevo_cliente.submit();
    }, 2500);

}


const esLetra = (caracter) => {

    let ascii = caracter.toUpperCase().charCodeAt(0);

    if(ascii > 64 && ascii < 91)
    {

        return true
    }
    else
    {
        false
    }
   
};




