import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Counter from '../../Shared/CounterSection/Counter';
import './homePage.css'
import Destin from '../../Shared/Destinations/Destin';
import LastMinDeals from './LastMinDeals';
import BlogSlider from '../Blogs/BlogSlider'
import AboutMe from './AboutMe';
import Testimonials from '../../Shared/TestimonialSection/Testimonials';

const HomePage = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <div className='home-bg text-center'>
        <div className="opacity">
          <Container xl={12} xs={12} sm={12}>
            <Row>
              <Col>
                <div className='home-pageImage'>
                  <p className='presents'>Book A Ticket & Just Leave</p>

                  <h1 className='white-color'>SEARCH YOUR NEXT DESTINATION</h1>
                  <Link to='/All-packages'>
                    <button className="btn btn-outline-warning banner-btn"> View Our Packages </button>
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <div>
        <Destin />
        <AboutMe />
        <LastMinDeals />
        <Counter />
        <Testimonials />
        <BlogSlider />
      </div>

    </>
  )
}

export default HomePage