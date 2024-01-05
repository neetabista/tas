import React from 'react'
import '../styles/main.sass'
import 'remixicon/fonts/remixicon.css'
import PublicRouter from '../router/PublicRouter'
import { BrowserRouter as Router } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Router>
        <PublicRouter />
      </Router>
    </>
  )
}

export default App
