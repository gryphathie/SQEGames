import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={NavLink} to="/">SQE Games</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/puzzle1">Puzzle 1</Nav.Link>
            <Nav.Link as={NavLink} to="/puzzle2">Puzzle 2</Nav.Link>
            <Nav.Link as={NavLink} to="/puzzle3">Puzzle 3</Nav.Link>
            <Nav.Link as={NavLink} to="/puzzle4">Puzzle 4</Nav.Link>
            <Nav.Link as={NavLink} to="/puzzle5">Puzzle 5</Nav.Link>
            <Nav.Link as={NavLink} to="/puzzle6">Puzzle 6</Nav.Link>
            <Nav.Link as={NavLink} to="/puzzle7">Puzzle 7</Nav.Link>
            <Nav.Link as={NavLink} to="/escape_room">Escape Room</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;