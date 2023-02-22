import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import {actions} from '../actions/frutas.action'

const AdicionaFruta= () =>{
   
    const[nome,setNome] = useState('');
    const[quantidade, setQuantidade] = useState(0);
    const dispath = useDispatch();




    const adicionarFruta = event => {
        
        event.preventDefault();

        const fruta ={
            id: new Date(),
            nome,
            quantidade
        };

        dispath(actions.adicionar(fruta));

    } 

    return(

        <form onSubmit={adicionarFruta}>

            <input 
                type="text"
                nome={nome}
                placeholder="Fruta"
                required
                onChange={event=>setNome(event.target.value)}
            />


           <input 
                type="number"
                nome={quantidade}
                placeholder="Quantidade"
                required
                onChange={event=>setQuantidade(event.target.value)}
            />

            <button type="submit">Adicionar</button>





        </form>
    );
}

export default AdicionaFruta;