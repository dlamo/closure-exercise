function makeSizer(size) {
    let pixelsSize = size + 'px';
    return function() {
      document.body.style.fontSize = pixelsSize;
    };
  }
  
  // size12, size24 y size36 son funciones diferentes. 
  // cada cual, al ejecutarse, cambiará el "fontSize" del "body" del HTML
  // de acuerdo al parámetro pasado en el momento de su creación
  var size12 = makeSizer(12);
  var size24 = makeSizer(24);
  var size36 = makeSizer(36);

//crear tu código aqui:
//debes crer una función que retorne una función que pinte el 
//backgroundcolor del body con el color especificado. 
//las variables abajo deberán recibir el retorno de la función 

//function pintar(color) {
// ...    
//}
//var paintRed = 
//var paintBlue = 
  
