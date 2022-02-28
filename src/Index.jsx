import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux' //usado para setar a store
import {createStore} from 'redux' // usado para criar a store
import {reducer} from '../reducers/Reducers' // usado para manipular o estado
import Counter from '../Componentes/Counter'

// criando a store
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(<Provider store={store}>
  <Counter />
</Provider>,
  document.getElementById('root')
)
