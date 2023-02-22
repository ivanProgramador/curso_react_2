import React from 'react';
import Fruta from './Fruta';
import AdicionaFruta from './AdicionarFruta';
import { useSelector } from 'react-redux';

const ListaFruta = () =>{

    const frutas = useSelector(state => state.frutaReducers.frutas);

    return(
        <>
          <h1>Lista de Frutas</h1>

          
           <AdicionaFruta/>
          
          {
              frutas.map(fruta=>(

                  <Fruta key={fruta.id} fruta={fruta} />
              ))
          }
        
        
        </>
    );

}

export default ListaFruta;