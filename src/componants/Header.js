import axios from 'axios'
import React, { useContext } from 'react'
import { Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../context/AuthContext'
const Header = () => {
    const {setLoogedin , Loogedin} = useContext(AuthContext)
    const navegate = useNavigate()
    return (
        <div>
            <Navbar bg="primary" expand="lg" variant='dark'>
            <Container>
                <Navbar.Brand href="/">Login Ap</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav className='m-auto'>
                <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                </Form>
                </Nav>
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                {Loogedin && 
                    <Nav.Link onClick={async()=>{
                        await axios.get('http://localhost:2000/api/v1/logout')
                        await setLoogedin()
                        navegate('/')
                    }} >Logout</Nav.Link>
                }

                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    )
}

export default Header
