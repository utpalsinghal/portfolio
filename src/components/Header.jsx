import React from "react";
import logo from "../images/logo.jpg";

const Header = () => {
	return (
		<div className='header'>
			<img src={logo} alt='Logo' className='logo' />
			<p className='title'>Utpal Singhal</p>
		</div>
	);
};

export default Header;
