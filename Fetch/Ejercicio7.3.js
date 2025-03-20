async function obtenerUsuarios() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
        const data = await response.json();
        const listaUsuarios = document.getElementById("js7.3");

        data.forEach(user => {
            const li = document.createElement("li");
            li.textContent = user.name;
            listaUsuarios.appendChild(li);
        });
    } catch (error) {
        console.error("Error al obtener datos", error.message);
    }
}

obtenerUsuarios();