import { React, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import CommonSection from '../../Shared/CommonSection/CommonSection'
import Form from 'react-bootstrap/Form';
import logo from '../../../assets/images/zufta-logo.png'
import { AiOutlineMail } from 'react-icons/ai'
import { IoLocationOutline } from 'react-icons/io5'
import { FiPhone } from 'react-icons/fi'
import './contact.css'

const Contact = () => {
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
    <div>
      <CommonSection
        title="Contact Us"
        activePage="Contact Us"
      />

      <section className='under-breadcrumb'>
        <Container >
          <Row className='contact-container'>
            <Col md="8">
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Form.Group as={Col} md="6" controlId="validationCustom01">
                    <Form.Label className=''>First name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="First name"
                      defaultValue=""
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter a valid name.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="6" controlId="validationCustom02">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Last name"
                      defaultValue=""
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter a valid name.
                    </Form.Control.Feedback>
                  </Form.Group>

                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} md="6" controlId="validationCustom03">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" required />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid Email.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="6" controlId="validationCustom04">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="number" placeholder="Phone Number" required />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid Phone Number.
                    </Form.Control.Feedback>
                  </Form.Group>

                </Row>

                <Form.Group className="mb-3" controlId="validationCustom05">
                  <Form.Label>Message:</Form.Label>
                  <Form.Control as="textarea" rows={6} required placeholder='Enter your message' />
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
                <Button type="submit" className='form-btn'>Submit form</Button>
              </Form>
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

    </div>
  )
}

export default Contact