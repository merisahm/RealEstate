import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import { AuthContext } from '../contexts/AuthContext';
import { VscHeart } from 'react-icons/vsc';
import Logo from '../logo.png'; 
//import ThemeContextProvider from '../contexts/ThemeContexe';

export class NavMenu extends Component {
  static displayName = NavMenu.name;
  static contextType = AuthContext;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }
  
  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  
  render () {
    const { isAuthenticated, toggleAuth } = this.context;
    return (
    //  <ThemeContext.Consumer>
      //  const {toggletheme} = context;
      <header>
        <Navbar className="navbar-expand-sm bg-dark text-white navbar-toggleable-sm ng-white box-shadow navigation">
          <Container>
            <NavbarBrand tag={Link} className='text-light' to="/">
              <img src={Logo} className='logo'/>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
              <ul className="navbar-nav flex-grow align-items-md-center">
                <NavItem>
                  <NavLink tag={Link} className="text-light" to="/">Pocetna</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-light" to="/oglasi">Oglasi</NavLink>
                </NavItem>
                {!isAuthenticated ? <NavItem>
                  <NavLink tag={Link} onClick={toggleAuth} className="text-light" to="/">Prijavi se</NavLink>
                </NavItem> 
                  : 
                  <>
                <NavItem>
                  <NavLink tag={Link} className="text-light" to='/profile'>
                    <img src='https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                        width='40px' height='40px' style={{borderRadius:'50%'}} />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-light"><VscHeart /></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} onClick={toggleAuth} className="text-light" to="/">Odjavi se</NavLink>
                </NavItem>
                </> }
              </ul>
            </Collapse>
          </Container>
        </Navbar>
      </header>
//      </ThemeContext.Consumer>
    );
  }
}
