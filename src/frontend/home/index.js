import React from 'react'
import {
  LatestProjects,
  Testimonial,
  ThoughtsAndExperiments,
  Header,
  Footer,
} from './components'

const Home = () => {
  return (
    <>
      <Header />
      <Testimonial />
      <LatestProjects />
      <ThoughtsAndExperiments />
      <Footer />
    </>
  )
}

export default Home
