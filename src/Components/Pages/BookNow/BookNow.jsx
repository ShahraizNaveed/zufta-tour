import CommonSection from '../../Shared/CommonSection/CommonSection'
import { React, useState } from 'react'
import { Card, Container, Form, Col, Button, Row } from 'react-bootstrap';
import './book.css'

const BookNow = () => {
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
          title="Book Now"
          activePage="Book Now" />
      </div>


      <section className="plan-section">
        <Container >
          <Row className="book-container">
            <Col md='8'>
              <Card className="card shadow">
                <Card.Body className="card-body">
                  <Row className="row">

                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                      <Row>
                        <Col md='6'>
                          <Form.Group controlId="validationCustom01">
                            <Form.Label className=''>Name</Form.Label>
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
                        </Col>

                        <Col md='6'>
                          <Form.Group controlId="validationCustom03">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Email" required className='mb-3' />
                            <Form.Control.Feedback type="invalid">
                              Please provide a valid Email.
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Col>
                      </Row>

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
                          <Form.Group controlId="validationCustom03">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="address" placeholder="Address" required className='mb-3' />
                            <Form.Control.Feedback type="invalid">
                              Please enter your address.
                            </Form.Control.Feedback>
                          </Form.Group>

                        </Col>
                      </Row>

                      <Row>


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
                            <Form.Label>Tour  Date :</Form.Label>
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


                      {/* <Form.Group className="mb-3">
                  <Form.Check
                    required
                    label="Agree to terms and conditions"
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                  />
                </Form.Group> */}
                        <Button type="submit" className='book-btn-end form-btn text-center'>Submit form</Button>
                    </Form>

                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

      </section>
    </>
  )
}

export default BookNow