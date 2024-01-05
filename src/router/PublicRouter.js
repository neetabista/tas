import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BlogDetails from '../frontend/blog detail/BlogDetails'
import Home from '../frontend/home'

const PublicRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<BlogDetails />} />
      </Routes>
    </>
  )
}


export default PublicRouter