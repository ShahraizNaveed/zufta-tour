import React, { Component, useState } from "react";
import Slider from "react-slick";
import './blog.css'
import deal1 from '../../../assets/images/deal1.jpg'
import { Col, Container, Row } from 'react-bootstrap'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Blog from "./Blog";
import '../Home/deals.css'
import { NavLink } from "react-router-dom";

const BlogSlider = () => {
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
            <section className="blog pb-5" id="blog">
                <Container>
                    <Row>
                        <Col md="12">
                            <div className="text-center blog-section">
                                <h2>Our Blog</h2>
                              
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua.Duis aute irure dolor in reprehenderit..</p>
                            </div>
                        </Col>

                        <div className="slider">
                                <Slider {...settings}>
                                    {Blog.map((img, index) => (
                                        <Col md="4">
                                            <div className={index === slideIndex ? 'slide slide-active' : 'slide'} key={index}>
                                                <div className="blog-item">
                                                    <div className="blog-image">
                                                        <img src={deal1} alt="Image" />
                                                    </div>
                                                    <div className="blog-content">
                                                        <div className="blog-date">
                                                            <p><i className="fa fa-clock-o"></i> Posted On : 12 May</p>
                                                        </div>
                                                        <h3><NavLink to="/blogs">{img.blogTitle}</NavLink></h3>
                                                        <p>{img.description}</p>
                                                        <div className="blog-author">
                                                            <div className="pull-left">
                                                                <p><NavLink to="/blogs"><i className="fa fa-user-o" aria-hidden="true"></i>{img.author}</NavLink>
                                                                </p>
                                                            </div>
                                                            <div className="pull-right blog-date-icon">
                                                                <p><i className="fa fa-eye" aria-hidden="true"></i> 24</p>
                                                                <p><i className="fa fa-heart" aria-hidden="true"></i> 5</p>
                                                                <p><i className="fa fa-comment-o" aria-hidden="true"></i> 0</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    ))}

                                </Slider>
                            </div>
                    </Row>
                </Container>
            </section>
        </>

    )
}

export default BlogSlider