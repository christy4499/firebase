import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './header.css'

function Header() {
  return (
  
   <>
     
     
       
            <Navbar expand="lg"  style={{height:'60px', backgroundColor:'lightskyblue'}}>
              <Container fluid >
                <Navbar.Brand  href="#"><img className='' width={'30px'} height={'40px'}   src="https://firebase.google.com/static/downloads/brand-guidelines/PNG/logo-vertical.png" alt="" />{''} {''}Firebase </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                  >
                    <Nav.Link className='ms-4' href="#action1">products</Nav.Link>
                    <Nav.Link href="#action2" className='ms-4' >solutions</Nav.Link>
                   
                    <Nav.Link href="#action2" className='ms-4' >solutions</Nav.Link>
                     
                    
                    <Nav.Link href="#"  className='ms-4' >
                      support
                    </Nav.Link>
                  </Nav>
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                  </Form>
                  <Nav.Link href="#action2" className='ms-4' >Go to console</Nav.Link>
                  
                </Navbar.Collapse>
              </Container>
            </Navbar>
            
              <div className='text-center ' style={{height:'20px', backgroundColor:'light', color:"blue"}}><p className='mt-3'>Firebase Demo Day is here! Watch demos of how to build and grow AI-powered, full stack apps using the best of Google.</p></div>
           
     
   </>
       
  
            
    
  )
}

export default Header