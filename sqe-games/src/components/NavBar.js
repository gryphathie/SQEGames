import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">SQE Games</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/puzzle1">Puzzle 1</Nav.Link>
            <Nav.Link href="/puzzle2">Puzzle 2</Nav.Link>
            <Nav.Link href="/puzzle3">Puzzle 3</Nav.Link>
            <Nav.Link href="/puzzle4">Puzzle 4</Nav.Link>
            <Nav.Link href="/puzzle5">Puzzle 5</Nav.Link>
            <Nav.Link href="/puzzle6">Puzzle 6</Nav.Link>
            <Nav.Link href="/puzzle7">Puzzle 7</Nav.Link>
            <Nav.Link href="/escape_room">Escape Room</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;