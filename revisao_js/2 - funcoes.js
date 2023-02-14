// o codigo abaixo declara uma função normal que retona um texto

 function ola(){

    return 'olá'
 }

 // o codigo abaixo declara uma função do mesmo tipo porem recebendo um parametro e retonando o valor do parametro recebido
 
 function ola2(nome){

    return `olá ${nome}`
 }

// o codigo abaixo declara uma função do tipo arrow essa funções tem um flecha nela por isso esse nome 
// normalemnte esse tipo de função é declara dentro de uma constante.  

 const olaPessoa = () => {
     return 'Olá novamente'
 }

 //regras para parametro dentro a arrows functions a ararrow function abaixo recebe 2 parametros
 //para receber dois parametros os parenteses e uma virgula entre esses parametros são necessarios. 
 
 const olaPessoa2 = (nome,idade) => {

    return `Olá novamente, ${nome}, a sua idade é ${idade}`

 }


 // Quando uma arrow function recebe 1 parametro somente não existe a necessidade dos parenteses 

 const olaPessoa3 = nome => `Olá novamente ${nome}`

 console.log(olaPessoa3('joão'))










 



