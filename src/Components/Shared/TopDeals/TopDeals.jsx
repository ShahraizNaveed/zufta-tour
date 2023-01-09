import React, { Component, useState } from "react";
import Slider from "react-slick";
import packageImg from '../../../assets/images/deal1.jpg'
import { Col, Container, Row } from 'react-bootstrap'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TopDeal from './TopDeal'
import { Link } from "react-router-dom";
import '../../Pages/Packages/PackageDetail/packageDetail.css'

const TopDeals = () => {
    const [slideIndex, setSlideIndex] = useState(0);


    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplaySpeed: 2000,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        beforeChange: (current, next) => setSlideIndex(next),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <section className='packageDetail-section'>
                <Container>
                    <Row>
                        <Slider {...settings}>
                            {TopDeal.map((value, key) => {
                                return (
                                    <>
                                        <Col md="4" >
                                            <div className={key === slideIndex ? 'slide slide-active' : 'slide'} key={key}>
                                                <div className="package-list-wrap">
                                                    <img
                                                        src={packageImg} className="img-fluid"
                                                        alt="New year Kashmir trip 2023 from Islamabad" decoding="async"
                                                    />
                                                    <div className="package-list-content">
                                                        <p className="package-list-duration">
                                                            {value.description}
                                                        </p>
                                                        <h3 className="package-list-title">
                                                            <Link to="/">
                                                                {value.title}
                                                            </Link>
                                                        </h3>
                                                        <Link className="package-list-button" to="/book">Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    </>
                                )
                            })}
                        </Slider>
                    </Row>
                </Container>

            </section>
        </>

    )
}

export default TopDeals