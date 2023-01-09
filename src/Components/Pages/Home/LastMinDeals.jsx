import React, { Component, useState } from "react";
import Slider from "react-slick";
import './deals.css'
import deal1 from '../../../assets/images/deal1.jpg'
import { Col, Container, Row } from 'react-bootstrap'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Deals from "./Deals";

const LastMinDeals = () => {
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
            <section className="deals">
                <Container>
                    <div className="text-center deal-section">
                        <h2>Last Minute Deals</h2>
                     
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua.Duis aute irure dolor in reprehenderit..</p>
                    </div>
                    <div className="deals-outer">
                        <Row>
                            <div className="slider">
                                <Slider {...settings}>
                                    {Deals.map((img, index) => (
                                        <Col md="4">
                                                <div className={index === slideIndex ? 'slide slide-active' : 'slide'} key={index}>
                                                    <div className="deals-item">
                                                        <div className="deals-item-outer">
                                                            <div className="deals-image">
                                                                <img src={deal1} alt="Image" />
                                                                <span className="deal-price">${img.price}</span>
                                                            </div>
                                                            <div className="deal-content">
                                                                <div className="deal-rating">
                                                                    <span className="fa fa-star checked"></span>
                                                                    <span className="fa fa-star checked"></span>
                                                                    <span className="fa fa-star checked"></span>
                                                                    <span className="fa fa-star-o"></span>
                                                                    <span className="fa fa-star-o"></span>
                                                                </div>
                                                                <h3>{img.packageName}</h3>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                                                                <a href="" className="deal-btn">More Details</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                        </Col>
                                    ))}

                                </Slider>
                            </div>
                        </Row>
                    </div>
                </Container>

            </section>
        </>

    )
}

export default LastMinDeals