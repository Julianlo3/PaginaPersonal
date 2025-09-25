function loadComponent(containerId, filePath, options = {}) {
    return fetch(filePath)
        .then(res => res.text())
        .then(data => {
            // Reemplazar placeholders {{key}} por el valor en options
            if (options) {
                Object.entries(options).forEach(([key, value]) => {
                    const regex = new RegExp(`{{\\s*${key}\\s*}}`, "g");
                    data = data.replace(regex, value);
                });
            }

            const container = document.getElementById(containerId);
            
            // Insertamos sin borrar lo que ya había
            container.insertAdjacentHTML("beforeend", data);

            return container.lastElementChild;
        })
        .catch(err => console.error("Error cargando componente:", err));
}
