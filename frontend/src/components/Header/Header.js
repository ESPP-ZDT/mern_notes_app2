import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Form, FormControl } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../actions/userActions";

import Button from 'react-bootstrap/Button';

function BasicExample({setSearch}) {
  let navigate = useNavigate();

  const dispatch = useDispatch();

  const userLogin =useSelector(state => state.userLogin)
  const {userInfo} = userLogin

  const logoutHandler = () =>{
    dispatch(logout())
    navigate("/")

  }

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          {" "}
          <Link to="/">Revievlutionn</Link>{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
                onChange={(e) =>setSearch(e.target.value)}
              />
            </Form>
          </Nav>
          <Nav>
          <Link to="/mynotes">
            <Button variant="primary" size="xs">my Notes</Button>{' '}
            </Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item onClick={logoutHandler}>
              Logout
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

//
export default BasicExample;
