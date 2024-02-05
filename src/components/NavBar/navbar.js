import React, {useState} from 'react';
import './navbar.css'; 
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png';
import { Link } from 'react-scroll';
import menu from '../../assets/menu.png'

const Navbar = () => {
	const [showMenu, setShowMenu] = useState(false);
	return (
		<nav className = "navbar">	
			<img src={logo} alt="Logo" className='logo'/>
			<div className="desktopMenu">
				<Link activeclss='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
				<Link activeclss='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About</Link>
				<Link activeclss='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Portfolio</Link>
				<Link activeclss='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Clients</Link>
			</div>
		
			<button className="desktopMenuBtn" onClick={() => {
				document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
			}}>
				<img src={contactImg} alt="" className="desktopMenuImg" />Contact Me</button>

				<img src={menu} alt="Menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
			<div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
				<Link activeclss='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
				<Link activeclss='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="listItem"  onClick={()=>setShowMenu(false)}>About</Link>
				<Link activeclss='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="listItem"  onClick={()=>setShowMenu(false)}>Portfolio</Link>
				<Link activeclss='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className="listItem"  onClick={()=>setShowMenu(false)}>Clients</Link>
				<Link activeclss='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className="listItem"  onClick={()=>setShowMenu(false )}>Contact</Link>
			</div>
		</nav>
	)
} 

export default Navbar;
