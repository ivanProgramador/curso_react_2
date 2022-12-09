/*Usnado uma tecnica de desestrutturação em um array de frutas*/

/*
const frutas =['laranja','banana','uva'];

let [fruta1,fruta2] = frutas;

console.log(fruta1);
console.log(fruta2);

agora se eu queiser a primeira e a ultima e só colocar um espaço vazio entre as duas  

let [fruta1,,fruta2] = frutas;
*/


/*Normalmente isso serve para capturar atributos especificosa de objetos*/


const pessoa = {

    nome:"josé",
    idade: 29,
    idioma:"português"
}

/*aqui eu estou desestruturando o objeto pessoa pra pegar so os atributos que eu preciso*/

let {nome,idioma} = pessoa;

console.log(nome);
console.log(idioma);



