import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavigationBar() {
  return (
    <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" container light>
      <Container>
        <Navbar.Brand href="/">AT-43 List Builder</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Faction Overview" id="basic-nav-dropdown">
              <NavDropdown.Item href="/UNA">United Nations of Ava (U.N.A)</NavDropdown.Item>
              <NavDropdown.Item href="/Therians">Therians</NavDropdown.Item>
              <NavDropdown.Item href="/RedBlok">Red Blok</NavDropdown.Item>
              <NavDropdown.Item href="/Karmans">Karmans</NavDropdown.Item>
              <NavDropdown.Item href="/Cogs">The Cogs</NavDropdown.Item>
              <NavDropdown.Item href="/ONI">Okamura Non-Aligned Industries (O.N.I.)</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;