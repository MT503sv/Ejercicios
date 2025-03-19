const jsonproductos = '[{"id": 1, "producto": "Lápiz"}, {"id": 2, "producto": "Borrador"}]';
const productos = JSON.parse(jsonproductos);

productos.forEach(item => 
console.log(item.producto));