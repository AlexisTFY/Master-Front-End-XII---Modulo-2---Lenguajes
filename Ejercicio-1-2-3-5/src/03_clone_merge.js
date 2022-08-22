const user = {
    name: "Alexis",
    surnames: "Domínguez Pizarro",
    age: 40,
}

const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

// Clone
// Implementa una función clone que, a partir de un objeto de entrada source devuelva un nuevo objeto con las propiedades de source:
const clone = source => ({ ...source });
console.log('Clone', clone(user));

// Merge
// Implementa una función merge que, dados dos objetos de entrada source y target, devuelva un nuevo objeto con todas las propiedades de target y de source, 
// y en caso de propiedades con el mismo nombre, source sobreescribe a target.
// Por ejemplo, dados estos 2 objetos:

  const merge = (source, target) => ({ ...target, ...source });
  console.log('Merge', merge(a,b));