import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">SQE Games</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/puzzle1">Puzzle 1</Nav.Link>
            <Nav.Link href="/puzzle2">Puzzle 2</Nav.Link>
            <Nav.Link href="/puzzle3">Puzzle 3</Nav.Link>
            <Nav.Link href="/puzzle4">Puzzle 4</Nav.Link>
            <Nav.Link href="/puzzle5">Puzzle 5</Nav.Link>
            <Nav.Link href="#link">Puzzle 6</Nav.Link>
            <Nav.Link href="#link">Puzzle 7</Nav.Link>
            <Nav.Link href="#link">Puzzle 8</Nav.Link>
            <Nav.Link href="#link">Escape Room</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;