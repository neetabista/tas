import React from 'react'
import './styles/main.sass'
import 'remixicon/fonts/remixicon.css'
import Home from './frontend/home'
import PublicRouter from './router/PublicRouter'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <>
      <PublicRouter />
    </>
  )
}

export default App
