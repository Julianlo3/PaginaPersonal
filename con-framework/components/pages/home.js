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
        loadComponent("parafoInge", "/con-framework/components/atoms/paragraf.html",{text:"Ingeniero de sistemas"});
        // Cargo otra molécula (navbar)
        loadComponent("navbar", "/con-framework/components/molecules/navbar.html");
    })
    loadComponent("s1","/con-framework/components/organisms/section1.html").then(() => {
        loadComponent("title","/con-framework/components/atoms/title.html",{text:"¿Quién Soy?"});
        loadComponent("card","/con-framework/components/molecules/cardImgText.html").then(() => {
            loadComponent("img","/con-framework/components/organisms/carousel.html",{
                img1: "/con-framework/assets/images/Yo/Yo1.jpg",
                img2: "/con-framework/assets/images/Yo/Yo2.jpg",
                img3: "/con-framework/assets/images/Yo/Yo3.jpg",
                caption1: "",
                caption2: "",
                caption3: "",});
            loadComponent("text","/con-framework/components/atoms/paragraf.html",{text:"Soy la mondá"})
        })
    })
    
})