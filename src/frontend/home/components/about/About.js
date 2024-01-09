import React from 'react'
import Button from '../../../../components/common/button/Button'
import { Container, Row, Col } from 'react-bootstrap'


const About = () => {
  return (
    <>
      <Container>
        <div className="about">
          <Row>
            <Col lg={6}>
              <img
                className="about__image"
                src="/images/about-img.png"
                alt=""
              />
            </Col>
            <Col lg={6}>
              <div className="about__content">
                <h3 className="title">About Us</h3>
                <p className="about__text">
                  Technical Associates Services (TAS) aim to provide cost
                  effective engineering solutions to people and industries in
                  Nepal.
                </p>
                <p className="about__text">
                  Technical Associates Services (TAS) aim to provide cost
                  effective engineering solutions to people and industries in
                  Nepal. We provide complete solutions for Water Treatment
                  Systems, Waste Treatment Systems, Water Treatment accessories,
                  Pharma water distributions system, Pumping Solutions (Grundfos
                  Pumps), Compressed Air Systems, Medical Gas Pipeline Systems,
                  Sprinklers & Irrigation System, Professional Laundry
                  solutions, PSA type Oxygen & Nitrogen Generators, Modular
                  Operation Theatres, Fire Fighting Systems and Flowmeters.
                </p>
                <Button btnData="Learn More" />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  )
}

export default About
