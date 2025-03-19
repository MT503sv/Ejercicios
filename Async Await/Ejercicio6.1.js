function esperarSegundos(segundos) {
    return new Promise(resove => setTimeout(resolve, segundos * 1000));
}

async function ejecutar() {
    console.log("Esperando...");
    await esperarSegundos(3);
    console.log("¡Tiempo cumplido!")
}

ejecutar();
