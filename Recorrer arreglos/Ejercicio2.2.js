const numeros = [12, 45, 6, 89, 23];
let maximo = numeros[0];

for(let num of numeros){
    if (num > maximo){
        maximo = num
    }
}

console.log(maximo);