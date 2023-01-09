import React from 'react'
import './Footer.css'
import { BsFacebook, BsInstagram } from 'react-icons/bs'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { Container, Row, Col } from 'react-bootstrap'
import logo from '../../../assets/images/zufta-logo.png'
import payment1 from '../../../assets/images/payment1.png'
import payment2 from '../../../assets/images/payment2.png'
import payment3 from '../../../assets/images/payment3.png'
import payment4 from '../../../assets/images/payment4.png'
import { FiPhone } from "react-icons/fi";
import { Link } from 'react-router-dom'
function Footer() {
    return (
        <div className='footer-section'>
            <div className='container footer-wrapper'>
                <img className='footer-logo' src={logo} />
                <div className='footer-icons'>
                    <div className='social-icon'>
                        <a href="https://www.facebook.com" target="_blank" className='link'> <BsFacebook className='nav-icon nav-side-icons' size={20} /> </a>
                    </div>

                    <div className='social-icon'>
                        <a href="https://www.twitter.com" target="_blank" className='link'> <AiFillTwitterCircle className='nav-icon nav-side-icons' size={20} /> </a>
                    </div>

                    <div className='social-icon'>
                        <a href="https://www.instagram.com" target="_blank" className='link'> <BsInstagram className='nav-icon nav-side-icons' size={20} /> </a>
                    </div>
                </div>
            </div>
            <hr className='footer-hr'></hr>
            <div className='footer-links'>
                <Container>
                    <Row>
                        <Col md={3}>

                            <div >
                                <div>
                                    <p>
                                        <FiPhone className="react-icon" />
                                        (631) 697-6263
                                    </p>
                                </div>
                            </div>

                            
                            <Link to="/about">  <h5>About The Artist</h5></Link>
                            <Link to="/journey">  <h5>Inspirational Stories</h5></Link>
                        </Col>

                        <Col md={3}>
                            <Link to="/requests"> <h5>Inspirational Requests</h5></Link>
                            <Link to="">  <h5>Merchandising</h5></Link>
                            <Link to="/gallery">  <h5>Inspirational Gallery</h5></Link>
                        </Col>

                        <Col md={3}>
                            {/* <h5>Customer Support</h5> */}
                            <h5>FAQs</h5>
                            <h5>Terms & conditions</h5>
                        </Col>

                        <Col md={3}>
                            <div className="footer-subscription">
                                <h3>Subscribe to our newsletter</h3>
                            </div>

                            <input
                                type="email"
                                className="form-control footer-form bg-transparent boder mb-4 text-white mt-3"
                                id="contactUs-email"
                                placeholder="Enter email..."
                            />
                            <button className="btn footer-subscribe-btn">Subscribe</button>
                        </Col>
                    </Row>
                </Container>
            </div>
            <hr className='footer-hr'></hr>
            <Container>
                <Row>
                    <Col md="6">
                        <p className='copyright text-center'>2023 © Copyright. All rights reserved.</p>
                    </Col>
                    <Col md='6'>
                        <div class="payment-content">
                            <ul className='copyright'>
                                <li>We Accept</li>
                                <li>
                                    <img src={payment1} alt="Image" />
                                </li>
                                <li>
                                    <img src={payment2} alt="Image" />
                                </li>
                                <li>
                                    <img src={payment3} alt="Image" />
                                </li>
                                <li>
                                    <img src={payment4} alt="Image" />
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer