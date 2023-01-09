import React from 'react'
import './destinations.css'
import CommonSection from '../CommonSection/CommonSection'
import destin1 from '../../../assets/images/deal1.jpg'
import destin2 from '../../../assets/images/deal2.jpg'
import destin3 from '../../../assets/images/deal3.jpg'
import destin4 from '../../../assets/images/deal4.jpg'
import destin5 from '../../../assets/images/deal5.jpg'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Destin = () => {
    window.scrollTo(0, 0);
    return (
        <>
            <section class="top-destinations destination-section">
                <Container>
                    <div class="section-title text-center mb-5">
                        <h2>Top Destinations</h2>
                        <div class="section-icon">
                            <i class="flaticon-diamond"></i>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua.Duis aute irure dolor in reprehenderit..</p>
                    </div>
                    <Row>
                        <Col md="4">
                            <div class="top-destination-item">
                                <img class="img-responsive" src={destin1} alt="Image" />
                                <div class="overlay">
                                    <h2><Link to="/packages">Naran</Link></h2>
                                    <p>Plan Your Tour to Naran With Us.</p>
                                </div>
                            </div>
                            <div class="top-destination-item">
                                <img class="img-responsive" src={destin2} alt="Image" />
                                <div class="overlay">
                                    <h2><Link to="/packages">Swat</Link></h2>
                                    <p>Plan Your Tour to Swat With Us.</p>
                                </div>
                            </div>
                        </Col>

                        <Col md="4">
                            <div class="top-destination-item destination-margin">
                                <img class="img-responsive" src={destin5} alt="Image" />
                                <div class="overlay overlay-full">
                                    <h2><Link to="/packages">Hunza</Link></h2>
                                    <p>Plan Your Tour to Hunza With Us.</p>
                                </div>
                            </div>
                        </Col>

                        <Col md="4">
                            <div class="top-destination-item">
                                <img class="img-responsive" src={destin3} alt="Image" />
                                <div class="overlay">
                                    <h2><Link to="/packages">Skurdu</Link></h2>
                                    <p>Plan Your Tour to Skurdu With Us.</p>
                                </div>
                            </div>
                            <div class="top-destination-item">
                                <img class="img-responsive" src={destin4} alt="Image" />
                                <div class="overlay">
                                    <h2><Link to="/packages">Babusar Top</Link></h2>
                                    <p>Plan Your Tour to Babusar Top With Us.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </section>
        </>

    )
}

export default Destin