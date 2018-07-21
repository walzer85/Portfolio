import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import '../App.css'
import { Link } from 'react-router-dom';

class Header extends Component {

  render() {
    return (
      <div>
        <Navbar className='TopNav'>
  
            <img className='TopNav-image' src='https://scontent.fmkc1-1.fna.fbcdn.net/v/t1.0-9/18119470_1347919951964699_6100335579804975267_n.jpg?_nc_cat=0&oh=2071d29601eb2c763ffcb62a5e099610&oe=5BA2A86C' alt='Cat House Percussion'/>
          
          <Nav className='Nav-items'>
            <NavItem eventkey={1} href='#'>
              <Link to={'/'}>Home</Link>
            </NavItem>
            <NavItem eventkey={1} href='#'>
              <Link to={'/about'}>About</Link>
            </NavItem>
            <NavItem eventkey={2} href='#'>
              <Link to={'/instruments'}>Instruments</Link>
            </NavItem>
            <NavItem eventkey={3} href='#'>
            <Link to={'/media/'}>Media</Link>
            </NavItem>
            <NavItem eventkey={4} href='#'>
            <Link to={'/testimonials'}>Testimonials</Link>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    )
  }
}

export default Header;