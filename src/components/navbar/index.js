import React from 'react'
import {Container, Navbar, Nav,NavDropdown} from "react-bootstrap"

function navbar(){
    return(
        <div className='mb-4'>
             <Navbar bg="light" expand="lg">
                <Container>
                  <Navbar.Brand href="/">Home</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                      <NavDropdown title="Category" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/category/food">Food</NavDropdown.Item>
                        <NavDropdown.Item href="/category/beverage">Beverage</NavDropdown.Item>
                        <NavDropdown.Item href="/category/technological">Technological</NavDropdown.Item>
                      </NavDropdown>
                    </Nav>
                    <Nav.Link href="/basket">Basket</Nav.Link>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
        </div>
    )
}

export default navbar