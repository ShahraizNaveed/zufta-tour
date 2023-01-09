import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import team1 from '../../../../assets/images/testemonial1.jpg'
import team2 from '../../../../assets/images/testemonial2.jpg'
import team3 from '../../../../assets/images/testemonial3.jpg'
import team4 from '../../../../assets/images/testemonial4.jpg'
import './team.css'
import TeamData from './TeamData'

const Team = () => {
    return (
        <section >
            <Container>
                <Row>
                    <Col md="12">
                        <div className="section-title text-center">
                            <h2>Our Team</h2>
                            <div className="section-icon section-icon-white">
                                <i className="flaticon-diamond"></i>
                            </div>
                        </div>
                    </Col>

                    <Row>
                        {TeamData.map((value, key) => {
                            return (
                                <>
                                    <Col lg="3" md="6" key={key}>
                                        <div className="team-item teams-section">
                                            <div className="team-image">
                                                <img src={value.img} className='img-fluid' alt="Image" />
                                            </div>
                                            <div className="team-content">
                                                <h3>{value.name}</h3>
                                                <p>{value.designation}</p>
                                            </div>
                                        </div>
                                    </Col>
                                </>
                            )
                        })}

                    </Row>



                </Row>



            </Container>
        </section>
    )
}

export default Team