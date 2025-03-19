function procesar(){
    try{
        let resultado = 10 / 2 
        console.log("Resultado:", resultado);
    }catch (error){
        console.error("Ocurrió un error", error.message);
    }finally{
        console.log("Este mensaje siempre se imprimirá");
    }
}

procesar();