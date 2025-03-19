const jsonString = '{"nombre":"Marcelo", "edad": 30, "ciudad": "El Salvador"}';
const persona = JSON.parse(jsonString);
console.group(persona.edad);