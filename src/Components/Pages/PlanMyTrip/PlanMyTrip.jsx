import { React, useState } from 'react'
import { Card, Container, Form, Col, Button, Row } from 'react-bootstrap';
import CommonSection from '../../Shared/CommonSection/CommonSection'
import { AiOutlineMail } from 'react-icons/ai'
import { IoLocationOutline } from 'react-icons/io5'
import { FiPhone } from 'react-icons/fi'
import './plan-trip.css'
import logo from '../../../assets/images/zufta-logo.png'

const PlanMyTrip = () => {
  window.scrollTo(0, 0);

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
      <div>
        <CommonSection
          title="Plan My Trip"
          activePage="Plan My Trip"
        />
      </div>

      <section className="plan-section">
        <Container className="container">
          <Row className='contact-container'>
            <Col md='8'>
              <Card className="card shadow">
                <Card.Body className="card-body">
                  <Row className="row">

                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                      <Form.Group controlId="validationCustom01">
                        <Form.Label className=''>First name</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="First name"
                          defaultValue=""
                          className='mb-3'
                        />
                        <Form.Control.Feedback type="invalid">
                          Please enter a valid name.
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group controlId="validationCustom03">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Email" required className='mb-3' />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid Email.
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Row>
                        <Col md='6'>
                          <Form.Group controlId="validationCustom04">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="number" placeholder="Phone Number" required className='mb-3' />
                            <Form.Control.Feedback type="invalid">
                              Please provide a valid Phone Number.
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Col>

                        <Col md='6'>
                          Range

                        </Col>
                      </Row>

                      <Row>
                        <Col md='6'>
                          <Form.Group controlId="validationCustom04">
                            <Form.Label>Departure Location :</Form.Label>
                            <Form.Control type="number" placeholder="Enter your location" required className='mb-3' />
                            <Form.Control.Feedback type="invalid">
                              Please provide a location.
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Col>

                        <Col md='6'>
                          <Form.Group controlId="validationCustom04">
                            <Form.Label>Preffered Location :</Form.Label>
                            <Form.Select aria-label="Default select example" required>
                              <option value="1">Select Destination</option>
                              <option value="2">Naran</option>
                              <option value="3">Hunza</option>
                              <option value="4">Skurdu</option>
                              <option value="5">Swat</option>
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">
                              Please provide a location.
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Col>

                        <Col md='6'>
                          <Form.Group controlId="validationCustom04">
                            <Form.Label>Numer of Participants</Form.Label>
                            <Form.Control type="number" placeholder="Number of people" required className='mb-3' />
                            <Form.Control.Feedback type="invalid">
                              Please provide a valid Number.
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Col>

                        <Col md='6'>
                          <Form.Group controlId="validationCustom04">
                            <Form.Label>Numer of Rooms</Form.Label>
                            <Form.Control type="number" placeholder="Number of rooms" required className='mb-3' />
                            <Form.Control.Feedback type="invalid">
                              Please provide a valid Number.
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Col>

                        <Col md='6'>
                          <Form.Group controlId="validationCustom04">
                            <Form.Label>Departure Date :</Form.Label>
                            <Form.Control type="date" placeholder="Please enter your date" required className='mb-3' />
                            <Form.Control.Feedback type="invalid">
                              Please provide a valid date.
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Col>

                        <Col md='6'>
                          <Form.Group controlId="validationCustom04">
                            <Form.Label>Package Type :</Form.Label>
                            <Form.Select aria-label="Default select example" required>
                              <option value="">Standard</option>
                              <option value="">Deluxe</option>
                              <option value="">Group Tour</option>
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">
                              Please select a package.
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Col>
                      </Row>

                      <Form.Group className="mb-3" controlId="validationCustom05">
                        <Form.Label>Message:</Form.Label>
                        <Form.Control as="textarea" rows={6} required placeholder='Enter your message' className='mb-3' />
                        <Form.Control.Feedback type="invalid">
                          Please fill this field.
                        </Form.Control.Feedback>
                      </Form.Group>

                      {/* <Form.Group className="mb-3">
                  <Form.Check
                    required
                    label="Agree to terms and conditions"
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                  />
                </Form.Group> */}
                      <Button type="submit" className='form-btn book-btn-end'>Submit form</Button>
                    </Form>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col md="4" className='right-contact-section'>
              <div>
                <img src={logo} className="img-fluid" alt="" />
              </div>

              <div className='mt-2'>
                <h5 className='mb-3 contact-heading'>Travel With Us</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, veritatis!</p>
              </div>

              <div className='mb-3'>
                <IoLocationOutline className="react-icon" />
                <span>Location</span>
              </div>

              <div className='mb-3'>
                <FiPhone className="react-icon" />
                <span>0123-456789</span>
              </div>

              <div>
                <AiOutlineMail className='react-icon' />
                <a href="mailto:info@zufta.pk">    <span>info@zufta.pk</span></a>
              </div>
            </Col>
          </Row>
        </Container>

      </section>
    </>

  )
}

export default PlanMyTrip