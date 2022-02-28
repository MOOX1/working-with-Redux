import React from "react";
import { connect } from "react-redux";

class Counter extends React.Component {
    state = {count: 0} // componente 

    //função que dispara a mensagem 
    increment = () => {
        this.props.dispatch({type:'INCREMENT'})
    }
    decrement = () => {
        this.props.dispatch({type:'DECREMENT'})
    }

    render() {
        return (
        <div>
            <h2>Counter</h2>
            <div>
                <button onClick={this.decrement}>decrementar</button>
                <span>{this.props.count}</span>
                <button onClick={this.increment}>Incrementar</button>
            </div>
        </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        count: state.count
    }
}

export default connect(mapStateToProps)(Counter)
