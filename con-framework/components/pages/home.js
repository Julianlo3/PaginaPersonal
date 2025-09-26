 function buildTableHeaders(headers) {
    return headers.map(h => `<th>${h}</th>`).join("");
}

 function buildTableRows(rows) {
    return rows.map(row =>
        `<tr>${row.map(col => `<td>${col}</td>`).join("")}</tr>`
    ).join("");
}

 const headersTable = ["Nivel", "Institución","Años","Ubicación"];
 const rows = [
     ["Primaria", "I.E.M Central","2007-2012","Pitalito - Huila"],
     ["Secundaria", "I.E.M Humerto Muñoz Ordoñez","2013-2019","Pitalito - Huila"],
     ["Pregrado", "Universidad del Cauca","2021 - que se acabe pronto por favor","Popayán - Cauca"]
 ];


loadComponent("home","/con-framework/components/templates/homeTemplate.html").then(()=>{
    loadComponent("top","/con-framework/components/organisms/Top.html").then(()=>{
        // Dentro del Top cargo la molécula Header (titleIcon)
        loadComponent("titleIconSection", "/con-framework/components/molecules/titleIcon.html")
            .then(() => {
                // 👇 Aquí ya estoy seguro de que los divs existen
                loadComponent("molecule-title", "/con-framework/components/atoms/title.html", { text: "Julián Rojas López" });
                loadComponent("molecule-icon-1", "/con-framework/components/atoms/icon.html", { className: "fa-brands fa-github ",link:"https://github.com/Julianlo3" });
                loadComponent("molecule-icon-2", "/con-framework/components/atoms/icon.html", { className: "fa-brands fa-linkedin", link:"https://www.linkedin.com/in/juli%C3%A1n-rojas-l%C3%B3pez-a8399b204/" });
            });
        loadComponent("parafoInge", "/con-framework/components/atoms/paragraf.html",{text:"Ingeniero de sistemas",className:"text-center md-4"});
        // Cargo otra molécula (navbar)
        loadComponent("navbar", "/con-framework/components/molecules/navbar.html");
    })
    loadComponent("s1","/con-framework/components/organisms/section1.html").then(() => {
        loadComponent("title","/con-framework/components/atoms/title.html",{text:"¿Quién Soy?"});
        loadComponent("card","/con-framework/components/molecules/cardImgText.html",{className:"card d-flex"}).then(() => {
            loadComponent("img","/con-framework/components/organisms/carousel.html",{
                img1: "/con-framework/assets/images/Yo/Yo1.jpg",
                img2: "/con-framework/assets/images/Yo/Yo2.jpg",
                img3: "/con-framework/assets/images/Yo/Yo3.jpg",
                caption1: "",
                caption2: "",
                caption3: "",});
            loadComponent("text","/con-framework/components/atoms/paragraf.html",{
                text:"Soy Julián Rojas López, un opita perdido en el Cauca. Nací el 14 de octubre de 2001. " +
                    "Actualmente tengo 23 años y me dedico a estudiar la poderosa carrera de Ingeniería de Sistemas en la Universidad del Cauca. <br>" +
                    "Mis expectativas como futuro profesional de Ingeniería de Sistemas se " +
                    "enfocan en la creación de proyectos que tengan un impacto inmediato en la vida de las personas " +
                    " y por supuesto en tener al menos un salario digno por la quemadera de ojos que conlleva ser ingeniero. "
                    })
        })
    })
    loadComponent("s2","/con-framework/components/molecules/tableData.html",{className:"tablaEstudio"}).then(() => {
        loadComponent("titleTable","/con-framework/components/atoms/title.html",{text:"Mis estudios"});
        loadComponent("tablaEstudio","/con-framework/components/atoms/table.html",{
            headers:  buildTableHeaders(headersTable),
            rows: buildTableRows(rows),
            className:"table table-responsive table-striped table-bordered table-hover table-sm align-middle"
        })
    })
    
    loadComponent("s3","/con-framework/components/organisms/3card.html",{
        classNameDiv:"cards-container",
        classNameCard1:"card",
        classNameCard2:"card",
        classNameCard3:"card"
    }).then(() => {
        loadComponent("title3card","/con-framework/components/atoms/title.html",{text:"Pasatiempos"});
        loadComponent("card1","/con-framework/components/molecules/card3ImgText.html",{IDTitleCard:"homeCard1",IDImgCard:"imgCard1",IDTextCard:"textCard1"}).then(() => {
            loadComponent("homeCard1","/con-framework/components/atoms/titleCard.html",{text:"Jugar videojuegos",className:"p-4"});
            loadComponent("imgCard1","/con-framework/components/atoms/img.html",{src:"/con-framework/assets/images/Pasatiempos/Jugar.jpg",className:"img-thumbnail"});
            loadComponent("textCard1","/con-framework/components/atoms/paragraf.html",
                {text:"No solo es pasar tiempo viendo una pantalla, se trata de vivir númerosas aventuras, risas y tiempo con personas que se recordarán por mucho tiempo"});
        })
        loadComponent("card2","/con-framework/components/molecules/card3ImgText.html",{IDTitleCard:"homeCard2",IDImgCard:"imgCard2",IDTextCard:"textCard2"}).then(() => {
            loadComponent("homeCard2","/con-framework/components/atoms/titleCard.html",{text:"Tomar fotos",className:"p-4"});
            loadComponent("imgCard2","/con-framework/components/atoms/img.html",{src:"/con-framework/assets/images/Pasatiempos/TomarFoto.jpg",className:"img-thumbnail"});
            loadComponent("textCard2","/con-framework/components/atoms/paragraf.html",
                {text:"En algún punto tomé una foto a mi primer hola mundo, ahora estoy sufriendo con atomic Design. Las fotos permiten esto, recordar y vivir nuevamente momentos que ya quedaron en el olvido."});
        })
        loadComponent("card3","/con-framework/components/molecules/card3ImgText.html",{IDTitleCard:"homeCard3",IDImgCard:"imgCard3",IDTextCard:"textCard3"}).then(() => {
            loadComponent("homeCard3","/con-framework/components/atoms/titleCard.html",{text:"Visitar pueblitos",className:"p-4"});
            loadComponent("imgCard3","/con-framework/components/atoms/img.html",{src:"/con-framework/assets/images/Pasatiempos/VisitarPueblitos.jpg",className:"img-thumbnail"});
            loadComponent("textCard3","/con-framework/components/atoms/paragraf.html",{
                text:"Visitar pueblitos es lo mejor, se conoce nuevos lugares y personas. Es una experiencia que permite salir de la cueva un rato."});
        })
    })
    // Cargo el organismo
    loadComponent("s4", "/con-framework/components/organisms/listaDeProyectos.html", {idName: "misProyectos"})
        .then(() => {

            loadComponent("titleProyect","/con-framework/components/atoms/title.html",{text:"Mis proyectos"});
            loadComponent("misProyectos", "/con-framework/components/molecules/itemProyecto.html", {
                IDNombre: "nombre1",
                IDDescripcion: "descripcion1",
                IDTecnologias: "tecnologias1",
                IDDemo: "demo1"
            }).then(() => {
                document.getElementById("nombre1").innerText = "Infinity Future";
                document.getElementById("descripcion1").innerText = "Juego en 2D. ¡Esquiva todos los obstaculos y supera tu record!";
                document.getElementById("tecnologias1").innerText = "Unity,C#";
                document.getElementById("demo1").href = "https://julianlo14.itch.io/infinity-future";
            });

            // Proyecto 2
            loadComponent("misProyectos", "/con-framework/components/molecules/itemProyecto.html", {
                IDNombre: "nombre2",
                IDDescripcion: "descripcion2",
                IDTecnologias: "tecnologias2",
                IDDemo: "demo2"
            }).then(() => {
                document.getElementById("nombre2").innerText = "Curso HTML y CSS";
                document.getElementById("descripcion2").innerText = "Resumen de lo más importante de HTML y CSS";
                document.getElementById("tecnologias2").innerText = "HTML,CSS";
                document.getElementById("demo2").href = "https://github.com/Julianlo3/Cursos";
            });
        });
    loadComponent("s4", "/con-framework/components/organisms/formContact.html")
        .then(() => {
            loadComponent("titleForm","/con-framework/components/atoms/title.html",{text:"Formulario de contacto"})
        })
})

