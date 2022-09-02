import React from 'react'
import ReactDOM from 'react-dom/client'
/* import App from './App' */
import {Tipograf} from '../src/styles/styles'
/* import { Navbar } from './components/navbar' */
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './Router'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
<Tipograf>

    {/* <Navbar /> */}
    <AppRouter />
{/*   <App /> */}
</Tipograf>
    </BrowserRouter>
  </React.StrictMode>
)
