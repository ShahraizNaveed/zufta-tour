import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './navbar.css'

import Logo from '../../../assets/images/zufta-logo.png'
import { NavDropdown } from 'react-bootstrap';


const Navigation = () => {
    window.scrollTo(0, 0);
    const [activeLink, setActiveLink] = useState('home');
    const [navbar, SetNavbar] = useState(false);

    const changeBackground = () => {
        const search = document.querySelector(".search")
        search.classList.toggle("active", window.scrollY > 100)
    };

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    window.addEventListener('scroll', changeBackground);

    return (
        <section className="search">
            <Navbar expand="lg"  variant='dark' className={navbar ? 'navbar active' : 'navbar sticky-top'}>
                <Container>
                    <Navbar.Brand className={activeLink === 'home' ? 'active' : ''} onClick={() => { onUpdateActiveLink('home') }}> <Link to="/"><img src={Logo} className='img-fluid' alt="" /></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link className={activeLink === 'home' ? 'active nav-item' : 'nav-item'} onClick={() => { onUpdateActiveLink('home') }}><Link to='/'>Home</Link></Nav.Link>
                            <Nav.Link className={activeLink === 'destin' ? 'active nav-item' : 'nav-item'} onClick={() => { onUpdateActiveLink('destin') }}> <Link to='/destinations'>Destination</Link> </Nav.Link>
                            <NavDropdown menuVariant='dark' title="Blogs" id="basic-nav-dropdown" className={activeLink === 'blog' ? 'active nav-item' : 'nav-item'} onClick={() => { onUpdateActiveLink('blog') }}>
                                <NavDropdown.Item >
                                    <Link to='/blogs' className='w-100 dropdown-blog'>Blogs</Link>
                                </NavDropdown.Item>

                                <NavDropdown.Item >
                                    <Link to='/blog2' className='w-100 dropdown-blog'>Blog2</Link>
                                </NavDropdown.Item>

                                <NavDropdown.Item>
                                    <Link to='/blog3' className='w-100 dropdown-blog' >Blog3</Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link className={activeLink === 'about' ? 'active nav-item' : 'nav-item'} onClick={() => { onUpdateActiveLink('about') }}> <Link to='/about'>About Us</Link> </Nav.Link>
                            <Nav.Link className={activeLink === 'contact' ? 'active nav-item' : 'nav-item'} onClick={() => { onUpdateActiveLink('contact') }}> <Link to='/contact'>Contact Us</Link> </Nav.Link>
                            <Nav.Link className={activeLink === 'book' ? 'active nav-item' : 'nav-item'} onClick={() => { onUpdateActiveLink('book') }}> <Link to='/book'>Book Now</Link> </Nav.Link>
                            <Nav.Link className={activeLink === 'plan' ? 'active' : ''} onClick={() => { onUpdateActiveLink('plan') }}> <Link to='/plan-my-trip'><button className='btn btn-outline-warning navbar-btn' >Plan My Trip</button></Link> </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </section>
    )
}

export default Navigation