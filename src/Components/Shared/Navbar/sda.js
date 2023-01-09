<Navbar className={navbar ? 'navbar active' : 'navbar sticky-top'} variant="dark" expand="lg" show={show}>
<Container>
    <Link to="/"><img src={Logo} className='img-fluid' alt="" /></Link>
    <Navbar.Toggle  aria-controls="basic-navbar-nav" onClick={() => setShow(show ? false : "show")} />
    <Navbar.Collapse id="basic-navbar-nav" >
        <Nav className="ms-auto collapsing-nav">
            <NavLink to='/' className={activeLink === 'home' ? 'active nav-item' : 'nav-item'} onClick={() => {onUpdateActiveLink('home'); setShow(false)} }>Home</NavLink>
            <NavLink to='/destinations' className={activeLink === 'destination' ? 'active nav-item' : 'nav-item'} onClick={() => {onUpdateActiveLink('destination'); setShow(false)}}>Destinations</NavLink>
            {/* <NavLink to="/blogs" className={activeLink === 'blog' ? 'active nav-item' : 'nav-item'} onClick={() => onUpdateActiveLink('blog')}>Blogs</NavLink> */}
            <NavDropdown title="Blogs"
                menuVariant='dark'
            // show={show}
            // onMouseEnter={showDropdown}
            // onMouseLeave={hideDropdown}
            >
                <NavDropdown.Item onClick={() => setShow(false)}> <Link to='/blogs' className='nav-item blog-nav'>Blog 1</Link> </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item > <Link to='/blog2' className='nav-item blog-nav'>Blog 2</Link> </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item > <Link to='/blog3' className='nav-item blog-nav'>Blog 3</Link> </NavDropdown.Item>
            </NavDropdown>
            <NavLink to="/about" className={activeLink === 'about' ? 'active nav-item' : 'nav-item'} onClick={() => onUpdateActiveLink('about')}>About Us</NavLink>
            <NavLink to="/contact" className={activeLink === 'contact' ? 'active nav-item' : 'nav-item'} onClick={() => onUpdateActiveLink('contact')}>Contact Us</NavLink>
            <NavLink to="book" className={activeLink === 'book' ? 'active nav-item' : 'nav-item'} onClick={() => onUpdateActiveLink('book')}>Book Now</NavLink>
            <NavLink to="/plan-my-trip" className={activeLink === 'plan' ? 'active nav-item' : 'nav-item'} onClick={() => onUpdateActiveLink('plan')} ><button className='btn btn-outline-warning navbar-btn' >Plan My Trip</button></NavLink>
        </Nav>
    </Navbar.Collapse>
</Container>
</Navbar>