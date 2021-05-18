import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";


function Navbar() {
    return (
        <>
            <div className="navbar">
            <nav className='nav-menu'>
                <ul className="nav-menu-items">
                    <Link to="./" className="logoSection">
                        <img className="logo" alt="CompanyLogo" src="./images/logo1.jpg"/>
                    </Link>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
            </div>
        </>
    )
}

export default Navbar;
