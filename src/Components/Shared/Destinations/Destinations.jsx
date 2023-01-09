import React from 'react'
import './destinations.css'
import CommonSection from '../CommonSection/CommonSection'
import destin1 from '../../../assets/images/deal1.jpg'
import destin2 from '../../../assets/images/deal2.jpg'
import destin3 from '../../../assets/images/deal3.jpg'
import destin4 from '../../../assets/images/deal4.jpg'
import destin5 from '../../../assets/images/deal5.jpg'
import { Col, Container, Row } from 'react-bootstrap'
import Destin from './Destin'

const Destinations = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <section>
        <div>
          <CommonSection
            title="Top Destinations"
            activePage="Destinations"
          />
        </div>
      </section>

      <section className="destination-section">
        <Destin />
      </section>
    </>

  )
}

export default Destinations