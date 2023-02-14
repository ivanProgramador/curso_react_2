
/*inserindo dados em array de forma normal
const numeros = [1 ,2 ,3 ,4 ];

numeros.push(5);
*/
/*inserindo dados em um array usando operador spread*/
/*
const novosNumeros = [...numeros,2]

console.log(numeros);
console.log(novosNumeros);
*/

/*Usando operador spread em um objeto*/

const rex = {
   name:"rex"
}

/*usando o spread para adicionar atributos a um objeto*/

const max ={...rex,idade: 2, familia:'Carnivoro'}

console.log(rex);

console.log(max);
