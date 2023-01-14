import React, { useState } from "react";
import CommonSection from '../../../Shared/CommonSection/CommonSection'
import packageImg from '../../../../assets/images/Naran/tour-package.jpg'
import './packageDetail.css'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import PackageData from './PackageData'
import {CiSearch} from 'react-icons/ci'
import TopDeals from '../../../Shared/TopDeals/TopDeals'

const PackageDetail = () => {
    // window.scrollTo(0, 0);

    const [searchTerm, setSearchTerm] = useState("");

    const [pageNumber, setPageNumber] = useState(0);

    const searchedProduct = PackageData.filter((item) => {
        if (searchTerm.value === "") {
            return item;
        }
        if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
            return item;
        } else {
            return console.log("not found");
        }
    });
    return (
        <>
            <section>
                <CommonSection title="Let's Travel to" />
            </section>

            <section className='packageDetail-section'>
                <Container>
                    <Row>

                        <Col lg="6" md="6" sm="6" xs="12">
                            <div className="search__widget d-flex align-items-center justify-content-between ">
                                <input
                                    type="text"
                                    placeholder="I'm looking for...."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                <span>
                                    <CiSearch size={25} />
                                </span>
                            </div>
                        </Col>
                        <Col lg="6" md="6" sm="6" xs="12" className="mb-5">
                            <div className="sorting__widget text-end">
                                <select className="w-50">
                                    <option>Default</option>
                                    <option value="ascending">Alphabetically, A-Z</option>
                                    <option value="descending">Alphabetically, Z-A</option>
                                    <option value="high-price">High Price</option>
                                    <option value="low-price">Low Price</option>
                                </select>
                            </div>
                        </Col>


                        {searchedProduct.map((value, key) => {
                            return (
                                <>
                                    <Col md="4" >
                                        <div className="package-list-wrap" key={key}>
                                            <img
                                                src={packageImg} className="img-fluid"
                                                alt="New year Kashmir trip 2023 from Islamabad" decoding="async"
                                            />
                                            <div className="package-list-content">
                                                <p className="package-list-duration">
                                                    {value.description}
                                                </p>
                                                <h3 className="package-list-title">
                                                    <Link to="/tour-detail">
                                                        {value.title}
                                                    </Link>
                                                </h3>
                                                <Link className="package-list-button" to="/book">Book Now</Link>
                                            </div>
                                        </div>
                                    </Col>
                                </>
                            )
                        })}

                    </Row>
                </Container>

            </section>

            <section>
                {/* <TopDeals /> */}
            </section>
        </>
    )
}

export default PackageDetail