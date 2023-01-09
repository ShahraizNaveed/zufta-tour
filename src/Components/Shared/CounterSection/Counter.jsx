import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import CountUp from 'react-countup';
import ReactVisibilitySensor from 'react-visibility-sensor'
import './counter.css'
import { CiFaceSmile } from 'react-icons/ci'
import { FaPlaneDeparture } from 'react-icons/fa'
import { GiPalmTree } from 'react-icons/gi'
import { BsGlobe } from 'react-icons/bs'
import { BiBus } from 'react-icons/bi'

const Counter = ({ className, ...rest }) => {
    const [viewPortEntered, setViewPortEntered] = useState();
    return (
        <>
            <section className="counter">

                <div className='above-counter'>
                    <h4 className='text-center'>
                        Some statistics about Zufta & Travel
                    </h4>

                    <h6 className='text-center'>Center Acheivements</h6>

                    <hr className='' />
                </div>

                <Container>
                    <Row className="counter-row">
                        <Col className="counter-column text-center mb-5" md='3'>
                            <strong data-number='94532'>
                                <CountUp {...rest} start={viewPortEntered ? null : 0} end={94532}>
                                    {({ countUpRef }) => {
                                        return (
                                            <>
                                                <div>
                                                    <h1>< FaPlaneDeparture className='react-icon icon' /></h1>
                                                </div>

                                                <ReactVisibilitySensor
                                                    active={!viewPortEntered}
                                                    onChange={isVisible => {
                                                        if (isVisible) {
                                                            setViewPortEntered(true)
                                                        }
                                                    }}
                                                    delayedCall
                                                >
                                                    <span className='number' ref={countUpRef} />
                                                </ReactVisibilitySensor>
                                            </>
                                        )
                                    }}
                                </CountUp>
                            </strong>
                            <h4>Happy Customers</h4>
                        </Col>

                        <Col className="counter-column text-center mb-5" md='3'>
                            <strong data-number='1021'>
                                <CountUp {...rest} start={viewPortEntered ? null : 0} end={1021}>
                                    {({ countUpRef }) => {
                                        return (
                                            <>
                                                <div>
                                                    <h1>< GiPalmTree className='react-icon icon' /></h1>
                                                </div>

                                                <ReactVisibilitySensor
                                                    active={!viewPortEntered}
                                                    onChange={isVisible => {
                                                        if (isVisible) {
                                                            setViewPortEntered(true)
                                                        }
                                                    }}
                                                    delayedCall
                                                >

                                                    <span className='number' ref={countUpRef} />
                                                </ReactVisibilitySensor>
                                            </>

                                        )
                                    }}
                                </CountUp>
                            </strong>

                            <h4>Destinations</h4>
                        </Col>

                        <Col className="counter-column text-center mb-5" md='3'>
                            <strong data-number='20096'>
                                <CountUp {...rest} start={viewPortEntered ? null : 0} end={20096}>
                                    {({ countUpRef }) => {
                                        return (
                                            <>
                                                <div>
                                                    <h1>< BsGlobe className='react-icon icon' /></h1>
                                                </div>

                                                <ReactVisibilitySensor
                                                    active={!viewPortEntered}
                                                    onChange={isVisible => {
                                                        if (isVisible) {
                                                            setViewPortEntered(true)
                                                        }
                                                    }}
                                                    delayedCall
                                                >
                                                    <span className='number' ref={countUpRef} />
                                                </ReactVisibilitySensor>
                                            </>

                                        )
                                    }}
                                </CountUp>
                            </strong>
                            <h4>Tours</h4>
                        </Col>

                        <Col className="counter-column text-center mb-5" md='3'>
                            <strong data-number='121'>
                                <CountUp {...rest} start={viewPortEntered ? null : 0} end={121}>
                                    {({ countUpRef }) => {
                                        return (
                                            <>
                                                <div>
                                                    <h1>< BiBus className='react-icon icon' /></h1>
                                                </div>

                                                <ReactVisibilitySensor
                                                    active={!viewPortEntered}
                                                    onChange={isVisible => {
                                                        if (isVisible) {
                                                            setViewPortEntered(true)
                                                        }
                                                    }}
                                                    delayedCall
                                                >
                                                    <span className='number' ref={countUpRef} />
                                                </ReactVisibilitySensor>
                                            </>

                                        )
                                    }}
                                </CountUp>
                            </strong>
                            <h4>Tours Types</h4>
                        </Col>


                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Counter