import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux' //allows React app have access to the Redux store

import './index.css';
import reducers from './reducers'

import App from './components/App'
import registerServiceWorker from './registerServiceWorker'

const store = createStore(reducers)

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>
  , document.getElementById('root')
)

registerServiceWorker()