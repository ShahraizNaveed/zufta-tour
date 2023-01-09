import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import CommonSection from '../../Shared/CommonSection/CommonSection'
import './about.css'
import { GrPlan, GrSecure } from 'react-icons/gr'
import { BiHappyAlt } from 'react-icons/bi'
import Team from './TeamSection/Team';
import Testimonials from '../../Shared/TestimonialSection/Testimonials';


const About = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <section>
        <CommonSection
          title="About Us"
          activePage="About Us"
        />
      </section>

      <section className="aboutus">
        <Container className="container">
          <Row className="row">
            <Col md="12">
              <div className="section-title text-center">
                <h2 className='my-5'>Why Choose Us?</h2>
                <div className="section-icon section-icon-white">

                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md="6" lg="4">
              <div className="about-item">
                <div className="about-icon">
                  <GrPlan className='react-icon' size={30} />
              
                </div>
                <div className="about-content">
                  <h3>Perfect Planning</h3>
                  <p>Plan your perfect vacation with our travel agency. Choose among hundreds of all-inclusive
                    offers!</p>
                </div>
              </div>
            </Col>
            <Col md="6" lg="4">
              <div className="about-item">
                <div className="about-icon">
                 <GrSecure size={30} className='react-icon' />
                </div>
                <div className="about-content">
                  <h3>Secure Venues</h3>
                  <p>We work hard to secure the best hotel rates in the most popular destinations. Search and
                    book adventure tours now!</p>
                </div>
              </div>
            </Col>
            <Col md="6" lg="4">
              <div className="about-item">
                <div className="about-icon">
                  <BiHappyAlt size={30}  />
                </div>
                <div className="about-content">
                  <h3>Beautiful Memories</h3>
                  <p>Book international vacation packages with us and create memories that will last a
                    lifetime! Create History !</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>


      <section>
        <Team />
      </section>

      <section>
        <Testimonials />
      </section>
    </>
  )
}

export default About