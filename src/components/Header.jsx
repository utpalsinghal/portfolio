import React, { useEffect, useState } from "react";
// import logo from "../images/logo.jpg";
import "../styles/header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [mobileMenuClassName, setMobileMenuClassName] = useState('close-menu');

	useEffect(() => {
		if (isMobileMenuOpen) {
			setMobileMenuClassName('open-menu');
		} else {
			setMobileMenuClassName('close-menu');
		}
	}, [isMobileMenuOpen]);

	const closeMobileMenu = () => setIsMobileMenuOpen(false);
	const openMobileMenu = () => setIsMobileMenuOpen(true);

	return (
		<>
			<nav className='header'>
				{/* <img src={logo} alt='Logo' className='logo' /> */}
				<h3 className='title'>Utpal Singhal</h3>
				<ul>
					<li>
						<a href='#Home'>Home</a>
					</li>
					<li>
						<a href='#About'>About</a>
					</li>
					<li>
						<a href='#Projects'>Projects</a>
					</li>
					<li>
						<a href='#Experience'>Experience</a>
					</li>
					<li>
						<a href='#Contact'>Contact</a>
					</li>
					<li>
						<FontAwesomeIcon icon={faBars} className='mobile-menu' onClick={openMobileMenu} />
					</li>
				</ul>
			</nav>
			<div className={'mobile-nav '+mobileMenuClassName}>
				<span onClick={closeMobileMenu}>
					<FontAwesomeIcon icon={faXmark} />
				</span>
				<ul>
					<li onClick={closeMobileMenu}>
						<a href='#Home'>Home</a>
					</li>
					<li onClick={closeMobileMenu}>
						<a href='#About'>About</a>
					</li>
					<li onClick={closeMobileMenu}>
						<a href='#Projects'>Projects</a>
					</li>
					<li onClick={closeMobileMenu}>
						<a href='#Experience'>Experience</a>
					</li>
					<li onClick={closeMobileMenu}>
						<a href='#Contact'>Contact</a>
					</li>
				</ul>
			</div>
		</>
	);
};

export default Header;
