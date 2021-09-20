import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import { Navbar, Nav, Container } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
  Link,
} from 'react-router-dom'
import Login from '../login/Login'
import Signup from '../signup/Signup'
import Blogs from '../blogs/Blogs'
import AddBlog from '../addBlog/AddBlog'
import store from '../../reduxStore/Store'

const Header = () => {
  const history = useHistory()

  // const [isLoggedIn, setIsLoggedIn]= useState('')
  // setIsLoggedIn(store.getState().default.user.loggedIn)
  // console.log(isLoggedIn)

  //  useEffect(() => {
  //    store.dispatch(fetchUser())
  //    // eslint-disable-next-line
  //  }, [])


  async function logOut() {
    try {
      await axios.get(`/users/logout`)
      //await getLoggedIn()
      alert('You Have Successfully Logged Off')
      console.log('logged out')
      history.push('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Router>
      <Navbar
        collapseOnSelect
        expand='lg'
        bg='dark'
        variant='dark'
        sticky='top'
      >
        <Container>
          <Navbar.Brand as={Link} to='/blogs'>
            BLOGGING
          </Navbar.Brand>

          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse
            id='responsive-navbar-nav'
            className='justify-content-end'
          >
            <Nav>
              <Nav.Link as={Link} to='/blogs'>
                VIEW BLOGS
              </Nav.Link>
              <Nav.Link as={Link} to='/addBlog'>
                ADD BLOG
              </Nav.Link>
              <Nav.Link as={Link} to='/' onClick={logOut}>
                LOGOUT
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className='container py-4'>
        <Switch>
          <Route exact path='/' component={Login}></Route>
          <Route path='/signUp' component={Signup}></Route>
          <Route path='/blogs' component={Blogs}></Route>
          <Route path='/addBlog' component={AddBlog}></Route>
        </Switch>
      </div>
    </Router>
  )
}

export default Header
