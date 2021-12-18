import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import CreateUser from './components/create-user.component'
import EditUser from './components/edit-user.component'
import UserList from './components/user-list.component'
import UserTableRow from './components/userTableRow'
import CreateCode from './components/create-code.component'
import ShowCode from './components/show-code.component'

//require('dotenv').config();

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={'/create-user'} className="nav-link">
                  Ylivuotoputki, tänne kaikki postaukset
                </Link>
              </Navbar.Brand>

              <Nav className="justify-content-end">
                <Nav>
                  <Link to={'/create-user'} className="nav-link">
                    Create User
                  </Link>
                </Nav>

                <Nav>
                  <Link to={'/userTableRow'} className="nav-link">
                    {/* Table */}
                  </Link>
                </Nav>

                <Nav>
                  <Link to={'/create-code'} className="nav-link">
                    Create Code post
                  </Link>
                </Nav>

                <Nav>
                  <Link to={'/show-code'} className="nav-link">
                    Show Code post
                  </Link>
                </Nav>

                <Nav>
                  <Link to={'/user-list'} className="nav-link">
                    User List
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Switch>
                  <Route
                    exact
                    path="/"
                    component={(props) => <CreateUser {...props} />}
                  />
                  <Route
                    exact
                    path="/create-user"
                    component={(props) => <CreateUser {...props} />}
                  />
                  <Route
                    exact
                    path="/edit-user/:id"
                    component={(props) => <EditUser {...props} />}
                  />
                  <Route
                    exact
                    path="/userTableRow/"
                    component={(props) => <UserTableRow {...props} />}
                  />
                  <Route
                    exact
                    path="/create-code"
                    component={(props) => <CreateCode {...props} />}
                  /> 
                  <Route
                    exact
                    path="/show-code"
                    component={(props) => <ShowCode {...props} />}
                  />
                  <Route
                    exact
                    path="/user-list"
                    component={(props) => <UserList {...props} />}
                  />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  )
}

export default App