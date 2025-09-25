function loadComponent(containerId, filePath, options = {}) {
    return fetch(filePath)
        .then(res => res.text())
        .then(data => {
            const container = document.getElementById(containerId);

            // Insertamos sin borrar lo que ya había
            container.insertAdjacentHTML("beforeend", data);

            const element = container.lastElementChild;
            if (!element) return;

            if (options.text) {
                element.textContent = options.text;
            }

            if (options.className) {
                element.className = options.className;
            }

            if (options.attrs) {
                Object.entries(options.attrs).forEach(([key, value]) => {
                    element.setAttribute(key, value);
                });
            }

            return element;
        })
        .catch(err => console.error("Error cargando componente:", err));
}
