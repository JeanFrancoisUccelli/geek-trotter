import React from 'react'
import {Navbar, Nav, Button, FormControl, Form, Carousel} from 'react-bootstrap'; 
import  { NavLink }  from 'react-router-dom'
import './NavBar.css'

class NavBar extends React.Component{
render() {
    return (
    
  <Navbar className="dark" >
    <Navbar.Brand href='/'>Geek Trotter</Navbar.Brand>
    <Nav className="mr-auto">
      <NavLink to ='/'>Accueil</NavLink>
      <NavLink to='/Recherche'>Recherche</NavLink>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button className="boutton" variant="outline-info">Rechercher</Button>
    </Form>
  </Navbar>
    )}
}

export default NavBar