import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import aboutImage from '../../../assets/images/travel-person.jpg'
import './aboutMe.css'

const AboutMe = () => {

    return (
        <>
            <Container fluid>
                <Row>
                    <Col md="4" className='about-section'>
                        {/* <img src={aboutImage} className='img-fluid' alt="" /> */}
                    </Col>

                    <Col md="8">
                        <div className=" about-body">
                            <div>
                                <h2 className=" about-title">About Us</h2>
                                <p className="ext">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                                    omnis vero
                                    blanditiis quas aspernatur neque dolorum eaque harum voluptates deserunt, quasi
                                    consectetur
                                    commodi ipsa id repudiandae modi aliquid non mollitia esse? Aspernatur corporis rem,
                                    rerum
                                    quae
                                    quod illum necessitatibus omnis ex cumque ad quaerat ab ut, dolores quo. Consequatur
                                    sunt
                                    iusto
                                    corrupti. Esse quae, dignissimos recusandae nesciunt rerum velit numquam id quas nam
                                    mollitia<span id="dots">...</span>
                                    <span id="more">architecto, optio pariatur magnam tenetur voluptates tempora sunt
                                        natus
                                        vitae consectetur et
                                        aspernatur eius vel? Dolorum quos, sunt saepe pariatur debitis rerum sed nemo
                                        laborum
                                        dolores
                                        suscipit, ipsam libero cupiditate magnam maiores et corporis nostrum
                                        eius.</span>
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default AboutMe