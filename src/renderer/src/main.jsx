import React from 'react'
import ReactDOM from 'react-dom/client'
import { NextUIProvider } from '@nextui-org/react'
import './assets/index.css'
import App from './App'
import { SideBar } from './components'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <SideBar /> 
      <App />
    </NextUIProvider>
  </React.StrictMode>
)
