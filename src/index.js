import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'

const rootElement = document.getElementById('app')

if(rootElement.hasChildNodes()){
    ReactDOM.hydrate(<App />, rootElement)
} else {
    ReactDOM.render(<App />, rootElement)
}