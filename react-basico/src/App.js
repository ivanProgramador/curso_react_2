
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
     ],
     novoComentario:{

       nome:'',
       email:'',
       mensagem:''

     }
  }

   adicionarComentario = evento =>{
     evento.preventDefault();


     //A mecanica por tras do state e que ele é um array principal que esta recebendo um outro array 
     // entro do state eu criei um indice chamado Comentarios que tambem e um array então primeiro
     //tenho que acessar o array state e depois apontar o indice para a função set state jogar o dado que eu quero 
     //dentro do array de ocmnetario como na sequencia abaixo  

     // colocando um novo comentario dentro do array 
     /* const novoComentario = {
        nome:"Pedro",
        email:"pedro@mail.com",
        data: new Date(2022,12,11),
        mensagem:"Olá, tudo bem sim ....."        
      }*/
     
      // criando uma variavel pra receber o objeto novo
     //   let lista = this.state.comentarios;
     // adicionando o novo objeto a o array principal 
    // lista.push(novoComentario);
    // colocando ele extamente no indice comentarios   
    //  this.setState({comentarios: lista})


    //refatorando pra usar o spread
    //no set state eu acesso o indice comentarios uso o spread pra puxar tudo
    // que tem dentro do state e adiciono o novo comentario direto no array 

    const novoComentario ={ ...this.state.novoComentario, data: new Date()}
    this.setState({
      comentarios:[...this.state.comentarios,novoComentario],
      novoComentario:{nome:'',email:'', mensagem:''}
    
    })

   }


   removerComentario = comentario =>{
        let lista = this.state.comentarios;
        lista = lista.filter(c => c !== comentario)
        this.setState({comentarios: lista})
   }



   //eventos do tipo onchange são obrigatorios para rastrear as teclas digitadas nos inputs
   //se não colocar o console reclama

            digitacao = evento => {

                const value = evento.target.value;
                const name = evento.target.name;

                this.setState({novoComentario:{ ...this.state.novoComentario, [name]:value }})  

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
                      data={comentario.data}
                      onRemove={this.removerComentario.bind(this, comentario)}
                      >

                      {comentario.mensagem}

                  </Comentario>
                  
                ))
              }

                <form method="post" onSubmit={this.adicionarComentario} className="Novo-comentario">

                    <h2>Adicionar Comentario</h2>
                    <div>
                      <input 
                         type="text"
                         name="nome"
                         value={this.state.novoComentario.nome}
                         onChange={this.digitacao}
                         placeholder="Digite seu nome"
                         required
                         />
                    </div>

                    <div>
                      <input
                         type="text"
                         name="email"
                         onChange={this.digitacao}
                         value={this.state.novoComentario.email}
                         placeholder="Digite seu email"
                         required
                         />
                    </div>
                    
                    <div>
                      <textarea 
                        name="mensagem"
                        value={this.state.novoComentario.mensagem}
                        onChange={this.digitacao}
                        rows="4"
                        ></textarea>
                    </div>

                    <button type="submit">Adicionar Comentario</button>

                </form>

             
            
              
            </div>
        )


   }  
}

export default App;
