import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import CommonSection from '../../../Shared/CommonSection/CommonSection'
import blog2Page from '../../../../assets/images/detailslider1.jpg'
import Blog from '../Blog';
import './blog2.css'

const Blog2 = () => {
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
                                        <Col md="10" className='mx-auto' key={key}>
                                            <div className="blog-item">
                                                <div className="blog2-image">
                                                    <img src={blog2Page} className="img-fluid" alt="Image" />
                                                </div>
                                                <div className="blog-content">
                                                    <div className="blog-date">
                                                        <p><i className="fa fa-clock-o"></i> Posted On : 12 May</p>
                                                    </div>
                                                    <h3><a href="#">{value.blogTitle}</a>
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


            {/* <section class="blog-list grid-list">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-10 mx-auto">
                            <div class="blog-wrapper">


                                <div class="blog-post-wrap">
                                    <div class="blog-post-upper">
                                        <img src={blog2Page} alt="Image" />
                                    </div>
                                    <div class="blog-post-detail">
                                        <div class="blog-content blog-content-1">
                                            <div class="blog-date">
                                                <p><i class="fa fa-clock-o"></i> Posted On : 12 May</p>
                                            </div>
                                            <h3><a href="blog-detail.html">What happened during my first trip alone</a></h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                                incididunt ut labore et dolore magna aliqua.Duis aute irure dolor in
                                                reprehenderit.</p>
                                            <div class="blog-author">
                                                <div class="pull-left">
                                                    <p><a href="#"><i class="fa fa-user-o" aria-hidden="true"></i> Jack
                                                        Richard</a></p>
                                                </div>
                                                <div class="pull-right blog-date-icon">
                                                    <p><i class="fa fa-eye" aria-hidden="true"></i> 24</p>
                                                    <p><i class="fa fa-heart" aria-hidden="true"></i> 5</p>
                                                    <p><i class="fa fa-comment-o" aria-hidden="true"></i> 0</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="blog-post-wrap">
                                    <div class="blockquote-upper">
                                        <blockquote>
                                            <p>Was popularised in the 1960s with the release of Letraset sheets containing Lorem
                                                Ipsum passages, and more recently with desktop publishing software like Aldus
                                                PageMaker including versions of Lorem Ipsum.</p>
                                            <div class="sectionoverlay"></div>
                                        </blockquote>
                                    </div>
                                    <div class="blog-post-detail">
                                        <div class="blog-content blog-content-1">
                                            <div class="blog-date">
                                                <p><i class="fa fa-clock-o"></i> Posted On : 12 May</p>
                                            </div>
                                            <h3><a href="blog-detail.html">What happened during my first trip alone</a></h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                                incididunt ut labore et dolore magna aliqua.Duis aute irure dolor in
                                                reprehenderit.</p>
                                            <div class="blog-author">
                                                <div class="pull-left">
                                                    <p><a href="#"><i class="fa fa-user-o" aria-hidden="true"></i> Jack
                                                        Richard</a></p>
                                                </div>
                                                <div class="pull-right blog-date-icon">
                                                    <p><i class="fa fa-eye" aria-hidden="true"></i> 24</p>
                                                    <p><i class="fa fa-heart" aria-hidden="true"></i> 5</p>
                                                    <p><i class="fa fa-comment-o" aria-hidden="true"></i> 0</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="blog-post-wrap">
                                    <div class="blog-post-upper">
                                        <img src="images/detailslider2.jpg" alt="Image" />
                                    </div>
                                    <div class="blog-post-detail">
                                        <div class="blog-content blog-content-1">
                                            <div class="blog-date">
                                                <p><i class="fa fa-clock-o"></i> Posted On : 12 May</p>
                                            </div>
                                            <h3><a href="blog-detail.html">What happened during my first trip alone</a></h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                                incididunt ut labore et dolore magna aliqua.Duis aute irure dolor in
                                                reprehenderit.</p>
                                            <div class="blog-author">
                                                <div class="pull-left">
                                                    <p><a href="#"><i class="fa fa-user-o" aria-hidden="true"></i> Jack
                                                        Richard</a></p>
                                                </div>
                                                <div class="pull-right blog-date-icon">
                                                    <p><i class="fa fa-eye" aria-hidden="true"></i> 24</p>
                                                    <p><i class="fa fa-heart" aria-hidden="true"></i> 5</p>
                                                    <p><i class="fa fa-comment-o" aria-hidden="true"></i> 0</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-12">
                                <div class="pagination-content">
                                    <ul class="pagination">
                                        <li><a href="#"><i class="fa fa-angle-double-left" aria-hidden="true"></i></a></li>
                                        <li class="active"><a href="#">1</a></li>
                                        <li><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                        <li><a href="#">4</a></li>
                                        <li><a href="#"><i class="fa fa-angle-double-right" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
        </>

    )
}

export default Blog2