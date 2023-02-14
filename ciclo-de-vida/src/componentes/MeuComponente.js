import React,{Component} from 'react';

class MeuComponente extends Component{

    //usando um construtor para tratar as props
    
    constructor(props){

        super(props)

        this.state = { numero: 5}

        console.log('constructor etapa 1');

    }

    static getDerivedStateFromProps(props,state){

       
        return null;
        
    }

    componentDidMount(){
        console.log('component did Mount etapa 3 elemento montado ');
    }


    
    

    render(){
        return<div>
            <p>Olá, eu sou um componente</p>
            <p>{this.props.titulo}</p>
            <p>O numero recebido pelo construtor foi {this.state.numero} </p>
        </div>
    }
}

export default MeuComponente;