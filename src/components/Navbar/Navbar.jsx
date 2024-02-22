//import { useState }from "react";
//import { Link } from "react-router-dom";
import Logo from '../../assets/logo.png';

function Navbar () {
    const pageUp = () => {
        window.scrollTo({ top: (0,0), behavior: 'smooth' });
    };
    
    const navlinks = [
        {
            name: 'Home',
            link: '#home',
        },
        {
            name: 'About',
            link: '#about',
        },
        {
            name: 'Projects',
            link: '#projects',
        },
        {
            name: 'Contact',
            link: '#contact',
        },
    ]
    
    return (
        <nav>
            <div className='nav_logo'>
                <img src={Logo} onClick={pageUp} />
            </div>
                <ul className='nav_pages'>
                    {navlinks.map((item) => (
                        <li key={item.name}>
                            <a href={item.link}>{item.name}</a>
                        </li>
                    ))}
                </ul>
            <div className='nav_menu'>
                <div className='nav_menu_button menu-open'>
                </div>
            </div>
        </nav> 
    );
    }

export default Navbar ;