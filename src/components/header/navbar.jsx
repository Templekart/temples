import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';


class Navbartk extends Component {
    state = { 
        Imageurl: 'https://ik.imagekit.io/templekart/logo_y5siGOIv0.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653389867093',
        
     } 
    render() { 
        return (
            <>
               <Navbar className='tk__navbar' collapseOnSelect expand="lg" bg="light" variant="light">
  <Container>
  <Navbar.Brand ><img  style={{ width:'100px'}} src={this.state.Imageurl} alt="" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      
      
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Login In</Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar> 
            </>
        );
    }
}
 
export default Navbartk;


