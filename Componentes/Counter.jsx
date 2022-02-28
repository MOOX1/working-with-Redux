import React from "react";
import { connect } from "react-redux"; // import que faz interligação do nosso component/reducer

class Counter extends React.Component {
    state = {count: 0} // componente 

    //funções que dispara a mensagem 
    increment = () => {
        this.props.dispatch({type:'INCREMENT'})
    }
    decrement = () => {
        this.props.dispatch({type:'DECREMENT'})
    }
    //função para rederização
    render() {
        return (
        <div>
            <h2>Contador</h2>
            <div>
                <button onClick={this.decrement}>decrementar</button>
                <span>{this.props.count}</span>
                <button onClick={this.increment}>Incrementar</button>
            </div>
        </div>
        )
    }
}

function mapStateToProps (state) { //função para setar o estado dos reducer e interligar ao componentes
    return {
        count: state.count
    }
}

export default connect(mapStateToProps)(Counter) // connect faz a conexão do reducer com o componente
