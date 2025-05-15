import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/SQEGames/">SQE Games</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/SQEGames/puzzle1">Puzzle 1</Nav.Link>
            <Nav.Link href="/SQEGames/puzzle2/">Puzzle 2</Nav.Link>
            <Nav.Link href="/SQEGames/puzzle3">Puzzle 3</Nav.Link>
            <Nav.Link href="/SQEGames/puzzle4">Puzzle 4</Nav.Link>
            <Nav.Link href="/SQEGames/puzzle5">Puzzle 5</Nav.Link>
            <Nav.Link href="/SQEGames/puzzle6">Puzzle 6</Nav.Link>
            <Nav.Link href="/SQEGames/puzzle7">Puzzle 7</Nav.Link>
            <Nav.Link href="/SQEGames/escape_room">Escape Room</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;