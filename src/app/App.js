import React from 'react'
import '../styles/main.sass'
import 'remixicon/fonts/remixicon.css'
import PublicRouter from '../router/PublicRouter'
import { BrowserRouter as Router } from 'react-router-dom'
import { Footer, Header } from '../frontend/home/components'

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <PublicRouter />
        <Footer />
      </Router>
    </>
  )
}

export default App
