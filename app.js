function galeriaClick(valor) {
    let p = document.getElementById("galeria");
    let atr1 = document.getElementById("contenedor1");
    let atr2 = document.getElementById("contenedor2");

    if(valor==true){
        document.getElementById("contenedor1").className = "contenedor1";
        document.getElementById("contenedor2").className= "contenedor2 verContenedor";
    
    }else{
        document.getElementById("contenedor2").className = "contenedor2";
        document.getElementById("contenedor1").className= "contenedor1 verContenedor";
     
    }
    
  };