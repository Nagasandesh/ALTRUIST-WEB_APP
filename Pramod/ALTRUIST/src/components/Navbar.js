import React, { Component } from 'react';
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import './Navbar.css'

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return(
            <nav className="NavbarItems">
              <Link to="./">
                <h1 className="navbar-logo"><img className="logo" alt="CompanyLogo" src="./images/logo1.jpg"/></h1>
              </Link>
                
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                             <li key={index} className={item.cName}>
                             <Link to={item.path}>
                             {item.icon}
                             <span>{item.title}</span>
                             </Link>
                         </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar;
