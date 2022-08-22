const numbers = [1,2,3,4];
const letters = ['a','b','c','d'];
const symbols = ['#', '$', '*']

// Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada, devuelva 
// la concatenación de ambos. Utiliza rest / spread operators.

const concat = (...arrays) => arrays.reduce((accumulator, current) => accumulator.concat(current));
console.log(concat(numbers, letters));
console.log(concat(numbers, letters, symbols));