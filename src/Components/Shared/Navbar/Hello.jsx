import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./hello.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { NavLink } from "react-router-dom";
import Logo from '../../../assets/images/zufta-logo.png'

function Hello() {
    const [click, setClick] = useState(false);
    const [navbar, SetNavbar] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const changeBackground = () => {
        const search = document.querySelector(".search")
        search.classList.toggle("activeNav", window.scrollY > 100)
    };

    window.addEventListener('scroll', changeBackground);

    return (
        <>
            <IconContext.Provider value={{ color: "#fff" }}>
                <section className="search">
                    <nav className={navbar ? 'navbar activeNav' : 'navbar'}>
                        <div className="navbar-container container">
                            <Link to="/" onClick={closeMobileMenu}>
                                <img src={Logo} alt="zufta-logo" className="img-fluid navbar-logo" />
                            </Link>
                            <div className="menu-icon" onClick={handleClick}>
                                {click ? <FaTimes /> : <FaBars className="nav-icon" />}
                            </div>
                            <ul className={click ? "nav-menu active" : "nav-menu"}>
                                <li className="nav-anchors">
                                    <NavLink
                                        to="/"
                                        className={({ isActive }) =>
                                            "nav-links" + (isActive ? " activated" : "")
                                        }
                                        onClick={closeMobileMenu}
                                    >
                                        Home
                                    </NavLink>
                                </li>

                                <li className="nav-anchors">
                                    <NavLink
                                        to="/destinations"
                                        className={({ isActive }) =>
                                            "nav-links" + (isActive ? " activated" : "")
                                        }
                                        onClick={closeMobileMenu}
                                    >
                                        Destination
                                    </NavLink>
                                </li>
                                <li className="nav-anchors nav-blog">
                                    <NavLink
                                        to="/blogs"
                                        className={({ isActive }) =>
                                            "nav-links" + (isActive ? " activated" : "")
                                        }
                                        onClick={closeMobileMenu}
                                    >
                                        Blogs
                                    </NavLink>
                                    <ul className="blog-lists">
                                        <li>
                                            <NavLink to='/blogs'
                                                className={({ isActive }) =>
                                                    (isActive ? " activated" : "")
                                                }
                                                onClick={closeMobileMenu}
                                            >
                                                Blog 1
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to='/blog2'
                                                className={({ isActive }) =>
                                                    (isActive ? " activated" : "")
                                                }
                                                onClick={closeMobileMenu}
                                            >
                                                Blog 2
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to='/blog3'
                                                className={({ isActive }) =>
                                                    (isActive ? " activated" : "")
                                                }
                                                onClick={closeMobileMenu}
                                            >
                                                Blog 3
                                            </NavLink>
                                        </li>
                                    </ul>
                                </li>

                                <li className="nav-anchors">
                                    <NavLink
                                        to="/about"
                                        className={({ isActive }) =>
                                            "nav-links" + (isActive ? " activated" : "")
                                        }
                                        onClick={closeMobileMenu}
                                    >
                                        About Us
                                    </NavLink>
                                </li>
                                <li className="nav-anchors">
                                    <NavLink
                                        to="/contact"
                                        className={({ isActive }) =>
                                            "nav-links" + (isActive ? " activated" : "")
                                        }
                                        onClick={closeMobileMenu}
                                    >
                                        Contact Us
                                    </NavLink>
                                </li>
                                <li className="nav-anchors">
                                    <NavLink
                                        to="/book"
                                        className={({ isActive }) =>
                                            "nav-links" + (isActive ? " activated" : "")
                                        }
                                        onClick={closeMobileMenu}
                                    >
                                        Book Now
                                    </NavLink>
                                </li>
                                {/* <li className="nav-anchors"> */}
                                <NavLink
                                    to="/plan-my-trip"
                                    className={({ isActive }) =>
                                        "nav-links" + (isActive ? " activated" : "")
                                    }
                                    onClick={closeMobileMenu}
                                >
                                    <button className='btn btn-outline-warning navbar-btn' >Plan My Trip</button>
                                </NavLink>
                                {/* </li> */}
                            </ul>
                        </div>
                    </nav>
                </section>
            </IconContext.Provider>
        </>
    );
}

export default Hello;
