import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {Tipograf} from '../src/styles/styles'
import { Navbar } from './components/navbar'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<Tipograf>

    <Navbar />
  <App />
</Tipograf>
  </React.StrictMode>
)
