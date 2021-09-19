import React from "react";
import axios from "../../axios";
import { Navbar, Nav, Container } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
  Link,
} from "react-router-dom";
import Login from "../login/Login";
import Signup from "../signup/Signup";
import Blogs from "../blogs/Blogs";
import AddBlog from "../addBlog/AddBlog";


const Header = () => {
  const history = useHistory();

  // const { loginUserRole, loggedIn, getLoggedIn } = useContext(AuthContext)

  async function logOut() {
    try {
      await axios.get(`/users/logout`);
      //await getLoggedIn()
      alert("You Have Successfully Logged Off");
      console.log("logged out");
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Router>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        sticky="top"
      >
        <Container>
          <Navbar.Brand as={Link} to="/blogs">
            BLOGGING
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link as={Link} to="/blogs">
                VIEW BLOGS
              </Nav.Link>
              <Nav.Link as={Link} to="/addBlog">
                ADD BLOG
              </Nav.Link>
              <Nav.Link as={Link} to="/" onClick={logOut}>
                LOGOUT
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="container py-4">
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route path="/signUp" component={Signup}></Route>
          <Route path="/blogs" component={Blogs}></Route>
          <Route path="/addBlog" component={AddBlog}></Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Header;
