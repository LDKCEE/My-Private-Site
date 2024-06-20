document.addEventListener("DOMContentLoaded", () => {
    const galeriaPortafolio = document.getElementById("Portafolio1");
    const galeriaNinios = document.getElementById("Galeria_ninios2");
    const galeriaNinias = document.getElementById("Galeria_ninias3");
    const sobreMi = document.getElementById("Sobre_mi");
    const blog1 = document.getElementById("blog1");
    const informacion = document.getElementById("informacion");
    let data = {}


    //Cargar el JSON fetch
    fetch('fotos.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al carga el archivo JSON');
            }
            return response.json();
        })
        .then(jsonData => {
            data = jsonData;//Guardar el JSON cargado en una variable
        })
        .catch(error => console.error('Error al carga el JSON:', error));

    //mostrar la galeria basda en la seleccion
    function mostrarGaleria(galeria, imagenes) {
        galeria.innerHTML = ''; // limpiar la galeria 
        if (imagenes && imagenes.length > 0) {
            imagenes.forEach(imagen => {
                if (imagen.url) {
                    const imgElement = document.createElement("img");
                    imgElement.src = imagen.url;
                    imgElement.alt = imagen.title;
                    imgElement.title = imagen.title;
                    galeria.appendChild(imgElement);
                }
            });
            galeria.style.display = 'grid'; // Cambiar a grid para mostrar las imagenes
        } else {
            galeria.innerHTML = 'No tienes imagenes disponibles';
            galeria.style.display = 'flex';
        }
    }

    //añadir eventos a los enlaces de menu
    document.getElementById("PortafolioFotos").addEventListener("click", (event) => {
        event.preventDefault();
        mostrarSeccion(galeriaPortafolio);
        mostrarGaleria(galeriaPortafolio, data.niños.concat(data.niñas));
    });

    document.getElementById("ninios1").addEventListener("click", event => {
        event.preventDefault();
        mostrarSeccion(galeriaNinios);
        mostrarGaleria(galeriaNinios, data.niños);
    });
    document.getElementById("ninias2").addEventListener("click", event => {
        event.preventDefault();
        mostrarSeccion(galeriaNinias);
        mostrarGaleria(galeriaNinias, data.niñas);
    });
    document.getElementById("sobremi").addEventListener("click", event => {
        event.preventDefault();
        mostrarSeccion(sobreMi);

    });
    document.getElementById("bloger").addEventListener("click", event => {
        event.preventDefault();
        mostrarSeccion(blog1)

    });

    document.getElementById("contacto").addEventListener("click", event => {
        event.preventDefault();
        mostrarSeccion(informacion);

    });

    // function mostrar unasseccion especifica
    function mostrarSeccion(seccion) {
        galeriaPortafolio.style.display = 'none';
        galeriaNinios.style.display = 'none';
        galeriaNinias.style.display = 'none';
        sobreMi.style.display = 'none';
        blog1.style.display = 'none';
        informacion.style.display = 'none';
        seccion.style.display = 'block';
    }
    // Ocultar la galería al deseleccionar el menú
    document.getElementById("menu-toggle").addEventListener("change", (event) => {
        if (!event.target.checked) {
            galeriaPortafolio.style.display = 'none';
            galeriaNinios.style.display = 'none';
            galeriaNinias.style.display = 'none';
            sobreMi.style.display = 'none';
            blog1.style.display = "none";   
            informacion.style.display = 'none';
        }
    });

  

    // mostrar pantalla ppor defecto
    setTimeout(
        () => document.getElementById("PortafolioFotos").click(),
        10
    )
    
  
});





