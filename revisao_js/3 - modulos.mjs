//Modularizar o codigo em js vai oprganizar tanto a parte logica do codigo quanto a parte semantica 
// e a parte fisica tambem isso eu falo em rela ção a os arquivos para que um arquivo sej aconsiderado um modulo js 
// sua extensão deve ter a seguinte definição .mjs 
// o primeiro modulo que eu importei no codigo abaixo foi o modulo pessoa que dentro dele tem um objeto 
// no caso alem de declarar o objeto dentro de um modulo eu preciso exporta-lo 
// por isso no final tema diretiva export default(exportação padrão) sem essa linha ele se torna invisivel aos outros modulos 

/*

  const pessoa = {
    nome: "João",
    idade: 20
   }

   export default pessoa

*/

//O segundo modulo que eu importei uti.mjs ele não contem so um simples objeto dentro de si 
//ele guarda duas funções do tipo arrow para que consiga exporta-las eu tenho que usar expostação nomeada
// onde eu digo os nomes das duas como eu fiz na linha abaixo. 

/*
  const ola = nome =>`Olá ${nome}`

  const soma =(n1,n2)=> n1 + n2

   export{ ola,soma }

*/


/*
  No codigo abaxo depois que eu exporto eu uso a função ola para interagit com onome do objeto pessoa 
  e depois eu uso a função soma para soma 3 + 4
  O ponto de visão mas importante a qui foi que eu entendi que a importação não e algo que precisa do framework react pra acontecer

*/


import pessoa from './modulos/pessoa.mjs'
import {ola,soma}  from './modulos/util.mjs'

console.log(ola(pessoa.nome)); 

console.log(soma(3,4))

