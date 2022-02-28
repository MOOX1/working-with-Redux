// importação das actions
import { INCREMENT,DECREMENT } from "../actions/actions";

const initialState = { //estado inicial do componente
    count: 0
}
//reducer que vai receber a mensagem para manipular o estado do componente 
export function reducer(state = initialState, action) { 
    // apartir das duas actions que criamos 
    switch (action.type) {
        case INCREMENT:
            return {
                count: state.count + 1
            }
        case DECREMENT:
            return {
                count: state.count - 1
            }
            default:
                return state;
    }
}