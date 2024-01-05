import React from 'react'
import { Routes, Route } from 'react-router-dom'

import BlogDetails from '../frontend/blog detail/BlogDetails'
import Home from '../frontend/home'

const PublicRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<BlogDetails />} />
      </Routes>
    </>
  )
}

export default PublicRouter
