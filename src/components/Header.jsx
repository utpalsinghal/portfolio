import React from "react";
import logo from "../images/logo.jpg";
import '../styles/header.scss'

const Header = () => {
	return (
		<div className='header'>
			{/* <img src={logo} alt='Logo' className='logo' /> */}
			<h3 className='title'>utpal.singhal</h3>
			<ul>
				<li><a href="#Home">Home</a></li>
				<li><a href="#Home">About</a></li>
				<li><a href="#Home">Projects</a></li>
				<li><a href="#Home">Experience</a></li>
				<li><a href="#Home">Contact</a></li>
			</ul>
		</div>
	);
};

export default Header;
