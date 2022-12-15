import { NavLink } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function RenderNavbar() {
  return (
            <header className='mb-4'>

              <Navbar bg="primary" variant="dark">
                  <div className='container-fluid ps-5'>
                        <Navbar.Brand href="/page1">Home</Navbar.Brand>
                        <Nav className="me-auto">
                          <Nav.Link href="/page1">Favorite Movies</Nav.Link>
                          <Nav.Link href="/page2">Age Verification</Nav.Link>
                          <Nav.Link href="/page3">Product Reviews</Nav.Link>
                        </Nav>
                  </div>
              </Navbar>

            </header>
  );
}

export default RenderNavbar;