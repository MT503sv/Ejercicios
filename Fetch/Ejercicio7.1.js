fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
        const listaUSuarios = document.getElementById("js7.1");
        data.forEach(user => {const li = document.createElement("li");
            li.textContent = user.name;
            listaUSuarios.appendChild(li);
        });
    })
    .catch(error => console.error("Error al obtener datos:", error));