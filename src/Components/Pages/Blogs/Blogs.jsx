import React from 'react'
import CommonSection from '../../Shared/CommonSection/CommonSection'
import blog1Page from '../../../assets/images/grid.jpg'
import { Col, Container, Row } from 'react-bootstrap';
import Blog from './Blog'


const Blogs = () => {
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



      <section className="blog1-section">
        <div className="blog-wrapper">
          <div className=" grid-item">
            <Container>
              {Blog.map((value, key) => {
                return (
                  <>
                    <Row className='blog1-row my-4 blog-item'>
                      <Col md="5">
                        <div className="blog1-image">
                          <img src={blog1Page} alt="Image" />
                        </div>
                      </Col>
                      <Col md="7">
                        <div className="blog-content">
                          <div className="blog-date">
                            <p><i className="fa fa-clock-o"></i> Posted On : 12 May</p>
                          </div>
                          <h3><a>{value.blogTitle}</a></h3>
                          <p>{value.description}.</p>
                          <div className="blog-author">
                            <div >
                              <p><a href="#"><i className="fa fa-user-o" aria-hidden="true"></i>{value.author}</a></p>
                            </div>
                            <div className="pull-right blog-date-icon">
                              <p><i className="fa fa-eye" aria-hidden="true"></i> 24</p>
                              <p><i className="fa fa-heart" aria-hidden="true"></i> 5</p>
                              <p><i className="fa fa-comment-o" aria-hidden="true"></i> 0</p>
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </>
                )
              })}

            </Container>
          </div>
        </div>
      </section >


    </>

  )
}

export default Blogs