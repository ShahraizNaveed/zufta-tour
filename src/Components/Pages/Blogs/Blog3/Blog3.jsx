import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import CommonSection from '../../../Shared/CommonSection/CommonSection'
import './blog3.css'
import blog4 from '../../../../assets/images/blog4.jpg'
import Blog from '../Blog';

const Blog3 = () => {
    window.scrollTo(0, 0);
    return (
        <>
            <section>
                <div>
                    <CommonSection
                        title="Blogs"
                        activePage="Blogs" />
                </div>
            </section>

            <section className="blog3-section">
                <Container className="container">

                    <div className="blog-wrapper">
                        <Row className="row">
                            {Blog.map((value, key) => {
                                return (
                                    <>
                                        <Col md="6" key={key}>
                                            <div className="blog-item">
                                                <div className="blog3-image">
                                                    <img src={blog4} className="img-fluid" alt="Image" />
                                                </div>
                                                <div className="blog-content">
                                                    <div className="blog-date">
                                                        <p><i className="fa fa-clock-o"></i> Posted On : 12 May</p>
                                                    </div>
                                                    <h3><a href="blog-detail-fw.html">{value.blogTitle}</a>
                                                    </h3>
                                                    <p>{value.description}.</p>
                                                    <div className="blog-author">
                                                        <div className="pull-left">
                                                            <p><a href="#"><i className="fa fa-user-o" aria-hidden="true"></i>{value.author}</a></p>
                                                        </div>
                                                        <div className="pull-right blog-date-icon">
                                                            <p><i className="fa fa-eye" aria-hidden="true"></i> 24</p>
                                                            <p><i className="fa fa-heart" aria-hidden="true"></i> 5</p>
                                                            <p><i className="fa fa-comment-o" aria-hidden="true"></i> 0</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    </>
                                )
                            })}


                        </Row>
                    </div>

                </Container>
            </section>
        </>

    )
}

export default Blog3