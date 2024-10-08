function crearCirculo(svgElement, x, y, r, clase){
    let circulo = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circulo.setAttribute("cx", x);
    circulo.setAttribute("cy", y);
    circulo.setAttribute("r", r);
    circulo.setAttribute("class", clase);
    svgElement.appendChild(circulo);
    return circulo;
}

function crearRectangulo(svgElement, x, y, ancho, alto, clase){
    let rectangulo = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    
    // TODO: COMPLETAR 
    rectangulo.setAttribute("x", x);
    rectangulo.setAttribute("y", y);
    rectangulo.setAttribute("width", ancho);
    rectangulo.setAttribute("height", alto);
    rectangulo.setAttribute("class", clase);
    svgElement.appendChild(rectangulo)

    
    return rectangulo; 
}

function crearEllipse(svgElement, x, y, rx, ry, clase){
    let ellipse = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
    
    // TODO: COMPLETAR 
    ellipse.setAttribute("cx", x);
    ellipse.setAttribute("cy", y);
    ellipse.setAttribute("rx", rx);
    ellipse.setAttribute("ry", ry);
    ellipse.setAttribute("class", clase);
    svgElement.appendChild(ellipse)

    return ellipse;
}

function rotarElemento(element, grado, x, y) {
    // Construimos la cadena de transformación
    let transformValue = "rotate(" + grado + "," + x + "," + y + ")";
    // Establecemos el atributo 'transform' con la nueva transformación
    element.setAttribute("transform", transformValue);
}






function crearPochita(SVG) {
    // CUERPO
    let bodyCircle = crearCirculo(SVG, 300, 300, 150, "pelaje-pochita");
    let bodyRect = crearRectangulo(SVG, 150, 300, 300, 200, "pelaje-pochita");

    // MANILLA
    crearCirculo(SVG, 410, 230, 35, "color-negro-pochita");
    crearRectangulo(SVG, 375, 90, 70, 135, "color-negro-pochita");
    crearRectangulo(SVG, 105, 90, 300, 50, "color-negro-pochita");

    // CADENA
    crearCirculo(SVG, 130, 80, 70, "chain-pochita-exterior");
    let rectangulo_cadena_exterior = crearRectangulo(SVG, 120, 80, 180, 140, "chain-pochita-exterior");
    rotarElemento(rectangulo_cadena_exterior, 225, 200, 150);

    // Sierras
    crearRectangulo(SVG, 140, 180, 30, 30, "chain-pochita-exterior");
    crearRectangulo(SVG, 240, 100, 30, 30, "chain-pochita-exterior");
    crearRectangulo(SVG, 80, 120, 30, 30, "chain-pochita-exterior");
    crearRectangulo(SVG, 170, 30, 30, 30, "chain-pochita-exterior");
    crearRectangulo(SVG, 70, 20, 30, 30, "chain-pochita-exterior");

    crearCirculo(SVG, 130, 80, 60, "chain-pochita");
    let rectangulo_cadena = crearRectangulo(SVG, 120, 90, 180, 120, "chain-pochita");
    rotarElemento(rectangulo_cadena, 225, 200, 150);

    crearCirculo(SVG, 285, 230, 80, "pelaje-pochita");

    // OJOS
    crearCirculo(SVG, 325, 255, 45, "ojos-pochita");
    crearCirculo(SVG, 320, 250, 40, "pupila-pochita");

    // BOCA-ROJA
    crearEllipse(SVG, 215, 360, 30, 60, "boca-pochita");

    // COLMILLOS
    let colmillo1 = crearRectangulo(SVG, 180, 340, 30, 30, "colmillos-pochita");
    rotarElemento(colmillo1, 45, 180, 340);
    let colmillo2 = crearRectangulo(SVG, 250, 340, 30, 30, "colmillos-pochita");
    rotarElemento(colmillo2, 45, 250, 340);

    // BOCA
    crearCirculo(SVG, 180, 323, 50, "color-negro-pochita");
    crearCirculo(SVG, 180, 320, 50, "pelaje-pochita");
    crearCirculo(SVG, 250, 323, 50, "color-negro-pochita");
    crearCirculo(SVG, 250, 320, 50, "pelaje-pochita");
    
      let meme = agregarImagen(SVG, 0, 0, 100, 500, "denji_anime.png", "memeImagen");
      mostrarImagenConMouse(SVG, meme); 
  

}


function agregarImagen(svgElement, x, y, width, height, imageUrl, id) {
    let img = document.createElementNS("http://www.w3.org/2000/svg", "image");
    img.setAttribute("x", x);
    img.setAttribute("y", y);
    img.setAttribute("width", width);
    img.setAttribute("height", height);
    img.setAttributeNS("http://www.w3.org/1999/xlink", "href", imageUrl); 
    img.setAttribute("id", id);
    img.setAttribute("visibility", "hidden"); 
    svgElement.appendChild(img);
    return img;
}


function mostrarImagenConMouse(svgElement, img) {
    svgElement.addEventListener('mouseenter', function () {
        img.setAttribute('visibility', 'visible'); 
    });

    svgElement.addEventListener('mouseleave', function () {
        img.setAttribute('visibility', 'hidden'); 
    });

    svgElement.addEventListener('mousemove', function (event) {
        let rect = svgElement.getBoundingClientRect();
        //Calculando posición relativa
        let x = event.clientX - rect.left; 
        let y = event.clientY - rect.top;  

        // centrando la imagen
        let imgWidth = parseFloat(img.getAttribute('width'));
        let imgHeight = parseFloat(img.getAttribute('height'));

        img.setAttribute('x', x - imgWidth / 2); 
        img.setAttribute('y', y - imgHeight / 2); 
    });
}


function eventoDarkMode(){    
    document.getElementById('dark-mode').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});}


function eventoAnimacionOJO(SVG) {
    // Seleccionar el elementos
    let pupila = SVG.querySelector('.pupila-pochita');
    let ojo = SVG.querySelector('.ojos-pochita');

    // Guardar la posición original de la pupila
    const centroPupilaX = parseFloat(pupila.getAttribute('cx'));
    const centroPupilaY = parseFloat(pupila.getAttribute('cy'));
    const radioPupila = parseFloat(pupila.getAttribute('r'));

    // Guardar atributos del Ojo 
    const centroOjoX = parseFloat(ojo.getAttribute('cx'));
    const centroOjoY = parseFloat(ojo.getAttribute('cy'));
    const radioOjo = parseFloat(ojo.getAttribute('r')); 

    SVG.addEventListener('mousemove', function(event) {
        // coordenadas donde esta el cursor
        let rect = SVG.getBoundingClientRect();
        // considerar que el svg tiene una posicion
        let x = event.clientX - rect.left; 
        let y = event.clientY - rect.top ;

        // calculo nueva posicion pupila
        let dx = x - centroOjoX;
        let dy = y - centroOjoY;
        let distancia = Math.sqrt(dx * dx + dy * dy);
        
        // Calcular factor de movimiento asegurando que la pupila no salga del ojo
        let distanciaMaxPupila = radioOjo - radioPupila;
        let factorOjo = Math.min(distanciaMaxPupila, distancia) / distancia;

        // Actualizar posición de la pupila con el factor ajustado
        pupila.setAttribute("cx", centroOjoX + dx * factorOjo);
        pupila.setAttribute("cy", centroOjoY + dy * factorOjo);   
    });

    SVG.addEventListener('mouseout', function() {
        // resetear posicion inicial del ojo
        pupila.setAttribute("cx", centroPupilaX);
        pupila.setAttribute("cy", centroPupilaY);
    });
}

function eventoResizePochita(SVG){

  
    let scale = 1; 
    
    document.getElementById('ID-AGRANDAR').addEventListener('click', function() {
        if (scale < 0.97) scale += 0.03;;
        SVG.style.transform = `scale(${scale})`;
    });

    document.getElementById('ID-ACHICAR').addEventListener('click', function() {
        if (scale > 0.47) scale -= 0.03;
        SVG.style.transform = `scale(${scale})`;
    });
  
}

function crearEventos(SVG){
    eventoDarkMode();

    eventoResizePochita(SVG);

    eventoAnimacionOJO(SVG);
}

function pochita(){
    let SVG = document.getElementById("pochita");
    SVG.setAttribute("width", "500");
    SVG.setAttribute("height", "500");

    crearPochita(SVG);

    crearEventos(SVG);
}

pochita()