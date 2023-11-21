import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'

import App from './App.jsx'
import './index.css'
import { Header } from './Componentes/Header/Header.jsx'
import { Footer } from './Componentes/Footer/Footer.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <React.StrictMode>
    <Header/>
    <App />
    <Footer/>

  </React.StrictMode>
  </ChakraProvider>

)
