import React from 'react'
import { projects } from '../../../../data/data'
import { Link } from 'react-router-dom'
import CustomCard from '../../../../components/common/CustomCard/CustomCard'
import Button from '../../../../components/common/button/Button'
import { Container, Row, Col } from 'react-bootstrap'

const Projects = () => {
  return (
    <>
      <div className="project">
        <div className="project__content">
          <div className="project__left--content">
            <div className="project__left__sticky--section">
              <h3>Our latest projects.</h3>
              <p>
                At Industify Company, we rely on honesty, discipline and hard
                work and believe our success can be attributed to upholding a
                simple set of core values that date back to the beginning of the
                company.
              </p>
              <p>
                Industify is an integrated design-build firm offering
                engineering, architecture and construction services to domestic
                and international customers throughout the U.S. Unique to
                Industify is the fact that we conduct all disciplines in-house
                in a collaborative environment.
              </p>
              <div className="button">
                <Link to="">
                  <Button btnData="view all projects" />
                </Link>
              </div>
            </div>
          </div>
          <div className="project__right--content">
            {projects?.length > 0 &&
              projects?.map((project, index) => <CustomCard data={project} />)}
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects
