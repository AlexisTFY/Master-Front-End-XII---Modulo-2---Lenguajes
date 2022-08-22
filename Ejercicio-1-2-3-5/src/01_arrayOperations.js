const books = ['El arte de la guerra', 'El código Da Vinci', 'El principito', 'El Señor de los Anillos'];

// Head
// Implementa una función head (inmutable), tal que, dado un array como entrada extraiga 
// y devuelva su primer elemento. Utiliza destructuring.

const head = ([first]) => first;
console.log(head(books));

// Tail
// Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta 
// todos menos el primer elemento. Utiliza rest operator.

const tail = ([head, ...others]) => others;
console.log(tail(books));

// Init
// Implementa una función init (inmutable), tal que, dado un array como entrada devuelva todos
//  los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.

const init = (array) => array.slice(0, array.length - 1);

console.log(init(books));

// Last
// Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el último elemento.

const last = (array) => array[array.length - 1];
console.log(last(books));