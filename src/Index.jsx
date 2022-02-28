import React from 'react'
import ReactDOM from 'react-dom'
import App from "./App"
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {reducer} from '../reducers/Reducers'
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
