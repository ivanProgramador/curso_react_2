
import React, { Component } from 'react';
import './App.css';
import Comentario from './componentes/Comentario'

class App extends Component{
  // o state é um array que abriga um outro array (tecnica antiga ataualmente são usados hoocks dependendo da corporação)
  state={

    // esse é um array de objetos
     comentarios:[
        {
          nome:"João",
          email:"joao@mail.com",
          data: new Date(2022,12,11),
          mensagem:"Olá, tudo bem"
        },
        {
          nome:"Pedro",
          email:"pedro@mail.com",
          data: new Date(2022,12,11),
          mensagem:"Olá, tudo bem sim ....."

        }
     ]
  }



   render(){
        return (

            <div className="App">
              <h1>Meu projeto</h1>
              {
                //executando um loop no array de comentarios pra poegar os dados dele 
                //pra executar codigos js dentro do retorno de um componete o codigo deve estar entre chaves {} 
                //eu uso o this pra referenciar o state atual depois de dentro do state eu puxo o array de comentarios 
                //e uso a função map pra mapear os objetos de pois eu uso uma arraw function pra retornar os valores que eu peguei no console
                //quanse trata de uma lista o react exige que cada item tenha seu proprio id no caso eu criei um atributo com nome chave 
                //e um, parametro chamando indice ele mesmo vai preencher sozinho(parewce que o nome key é recohecido de forma automatica)  
                //expressoes js
                //stateLess = compónetes burros 
                //stateFull = componentes inteligentes

                
                this.state.comentarios.map((comentario,indice)=>(

                  <Comentario
                      key={indice}
                      nome={comentario.nome}
                      email={comentario.email}
                      data={comentario.data}>

                      {comentario.mensagem}

                  </Comentario>
                  
                ))

                


              }

             
            
              
            </div>
        )


   }  
}

export default App;
