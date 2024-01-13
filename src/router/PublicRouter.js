import React from 'react'
import { Routes, Route } from 'react-router-dom'
import BlogDetails from '../frontend/blog detail/BlogDetails'
import Home from '../frontend/home'
import Contact from '../frontend/contact/Contact'

const PublicRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<BlogDetails />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default PublicRouter
