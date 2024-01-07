import React from 'react'
import {
  LatestProjects,
  Testimonial,
  ThoughtsAndExperiments,
  Banner,
  About,
  Overview,
} from './components'

const Home = () => {
  return (
    <>
      <Banner />
      <About />

      <Testimonial />

      <LatestProjects />
      <Overview />

      <ThoughtsAndExperiments />
    </>
  )
}

export default Home
