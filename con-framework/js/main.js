// Cargo el organismo en el index
loadComponent("Top", "/con-framework/components/organisms/Top.html")
    .then(() => {
        // Cargo molécula Header dentro del organismo
        loadComponent("Header", "/con-framework/components/molecules/header.html")
            .then(() => {
                loadComponent("molecule-title", "/con-framework/components/atoms/title.html", { text: "Hola Inges" });
                loadComponent("molecule-icon-1", "/con-framework/components/atoms/icon.html", { className: "fa-brands fa-github" });
                loadComponent("molecule-icon-2", "/con-framework/components/atoms/icon.html", { className: "fa-brands fa-facebook" });
            });

        // Cargo otra molécula (navbar)
        loadComponent("navbar", "/con-framework/components/molecules/navbar.html");
    });
