import React, { useContext } from 'react'
import axios from '../../axios'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import './Header.css'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from 'react-router-dom'
import Login from '../login/Login'
import Signup from '../signup/Signup'
import Blogs from '../blogs/Blogs'
import AddBlog from '../addBlog/AddBlog'

// import AuthContext from '../../auth/AuthContext'

const Header = () => {
  const history = useHistory()

  // const { loginUserRole, loggedIn, getLoggedIn } = useContext(AuthContext)

  // async function logOut() {
  //   try {
  //     await axios.get(`http://flybuyapi.aritrarivu.co.in/users/logout`)
  //     await getLoggedIn()
  //     alert('You Have Successfully Logged Off')
  //     console.log('logged out')
  //     history.push('/')
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  return (
    <div className='header_bg'>
      <Router>
        <Navbar
          collapseOnSelect
          expand='lg'
          bg='dark'
          variant='dark'
          sticky='top'
        >
          <Container className='header_text'>
            <Navbar.Brand href='/blogs' className='header_app_name_text'>
              BLOGGING
            </Navbar.Brand>

            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav className='header_right  justify-content-end'>
                <Nav.Link href='/blogs'>VIEW BLOGS</Nav.Link>
                <Nav.Link href='/addBlog'>ADD BLOG</Nav.Link>
                <Nav.Link href='/'>LOGOUT</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Switch>
          <Route exact path='/' component={Login}></Route>
          <Route path='/signUp' component={Signup}></Route>
          <Route path='/blogs' component={Blogs}></Route>
          <Route path='/addBlog' component={AddBlog}></Route>
        </Switch>
      </Router>
    </div>
  )
}

export default Header
