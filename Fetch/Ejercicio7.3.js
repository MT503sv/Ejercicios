async function obtenerUsuarios() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
        const data = await response.json();
        data.forEach(user => console.log(user.name));
    }catch (error){
        console.error("Error al obtener datos", error.message);
    }
}

obtenerUsuarios();