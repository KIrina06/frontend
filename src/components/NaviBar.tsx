import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function BasicExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">История живописи</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Главная</Nav.Link>
            <NavDropdown title="Экспертизы" id="basic-nav-dropdown">
              <NavDropdown.Item> <Link to="/expertise/1">Проверка подлинности</Link></NavDropdown.Item>
              <NavDropdown.Item> <Link to="/expertise/2">Заказ копии</Link></NavDropdown.Item>
              <NavDropdown.Item> <Link to="/expertise/3">Определение художника</Link></NavDropdown.Item>
              <NavDropdown.Item> <Link to="/expertise/4">Определение эпохи</Link></NavDropdown.Item>
              <NavDropdown.Item> <Link to="/expertise/5">Реставрация</Link></NavDropdown.Item>
              <NavDropdown.Item> <Link to="/expertise/6">Заказ на разбор картины</Link></NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;