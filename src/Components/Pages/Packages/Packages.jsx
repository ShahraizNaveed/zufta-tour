import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CommonSection from '../../Shared/CommonSection/CommonSection';
import './packages.css'
import { Col, Container, Row } from 'react-bootstrap';
import data from './PackageData'
import { Link } from 'react-router-dom';

const Packages = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <div>
        <CommonSection title="All Packages"
          activePage="Packages" />
      </div>

      <section className='package-section'>
        <Container className='package-container'>
          <Row>
            {data.map((value, key) => {
              return (
                <>
                  <Col md='4' key={key}>
                    <Card style={{ width: '18rem' }} className='package-card'>
                      <Card.Img variant="top" src={value.img} />
                      <Card.Body>
                        <Card.Title className='text-center'>
                          <Link to='/tour-detail'>
                            {value.title}
                          </Link>
                        </Card.Title>
                        <Card.Text>
                          {value.description}
                        </Card.Text>
                        <Button className='btn btn-outline-warning package-card-btn'>Book Now</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                </>
              )
            })}


          </Row>
        </Container>

      </section>
    </>
  )
}

export default Packages