import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import CustomTitle from '../../components/common/CustomTitle'
import Accordion from 'react-bootstrap/Accordion'
import FAQsCard from '../../components/frontend/FAQs/FAQsCard'

const FAQs = () => {
  return (
    <>
      <Container>
        <div className="title__holder">
          <div className="title__holder--title">
            <h3>FAQs</h3>
            <div className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link to="">Home</Link>
                </li>
                <li className="separator">
                  <span></span>
                </li>
                <li className="breadcrumbs__item">
                  <Link to="">FAQs</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>

      <Container fluid className="px-0">
        <FAQsCard title="Residential" />
      </Container>

      <div
        className="faqs-bg-image"
        style={{ backgroundImage: 'url("/images/img-6.jpg")' }}
      >
        <Container>
          <p className="content">
            With diverse capabilities and extensive manufacturing experience,
            you can rely on Amwerk as a critical part of your supply chain.
          </p>
        </Container>
      </div>
      <Container fluid className="px-0">
        <FAQsCard order={2} title="Commercial" />
      </Container>
    </>
  )
}

export default FAQs
