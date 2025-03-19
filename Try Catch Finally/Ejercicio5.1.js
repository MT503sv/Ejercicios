function dividir (a, b){
    try{
        if(b === 0 ){
            throw new Error("no se puede dividir por cero.");
            
        }
        return a / b 
    } catch (error){
        console.log(error.message);
        return null;
    }
    
}