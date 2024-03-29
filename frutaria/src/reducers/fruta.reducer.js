import {actionsTypes} from '../constants/frutas'


const INITIAL_STATE = {

    frutas:[

        {id: 1, nome: 'Abacaxi', quantidade: 20 },
        {id: 2, nome: 'Maça',    quantidade: 5}

           ]
    };



const reducers = (state = INITIAL_STATE ,action)=>{

    switch(action.type){

        case actionsTypes.ADICIONAR_FRUTA:
            return{ frutas:[...state.frutas,{...action.payload}]}

        case actionsTypes.REMOVER_FRUTA:
            return{ frutas:[...state.frutas.filter(x => x.id !== action.payload.id)]}

        default:
            return state        
    }
       

} 

export {reducers};