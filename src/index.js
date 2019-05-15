import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import store from './store'
import { Provider } from 'react-redux'
import './styles/index.css'

const rootElement = document.getElementById('app')

if(rootElement.hasChildNodes()){
    ReactDOM.hydrate(<Provider store={store}>
        <App />
    </Provider>, rootElement)
} else {
    ReactDOM.render(<Provider store={store}>
        <App />
    </Provider>, rootElement)
}