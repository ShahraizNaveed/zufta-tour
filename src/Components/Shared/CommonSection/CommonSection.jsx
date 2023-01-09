import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./common-section.css";

const CommonSection = (props) => {
    return (
        <>
            {/* <section className="common__section">
                <Container>

                    <div className="breadcrumb-content">
                        <h2 className="text-white">{props.title}</h2>

                        <nav aria-label="breadcrumb">
                            <ul class="breadcrumb">
                                <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                                <li class="breadcrumb-item"><a href="package.html">Destinations</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Booking</li>
                            </ul>
                        </nav>
                    </div>


                </Container>
            </section> */}

            <section class="breadcrumb-outer text-center">
                <Container>
                    <div class="breadcrumb-content">
                        <h2 className="text-white">{props.title}</h2>
                        <nav aria-label="breadcrumb">
                            <ul class="breadcrumb">
                                <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li class="breadcrumb-item active" aria-current="page">{props.activePage}</li>
                            </ul>
                        </nav>
                    </div>
                </Container>
                <div class="section-overlay"></div>
            </section>
        </>




    );
};

export default CommonSection;
