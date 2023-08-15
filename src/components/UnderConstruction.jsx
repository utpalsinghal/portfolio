import React from "react";
import image from "../images/under-construction.jpg";

const UnderConstruction = () => {
	return (
		<div className='under-construction'>
			<div className='content'>
				<h1>Hi, I'm Utpal Singhal</h1>
				<h2>Welcome to the sneak peek of my developer realm!</h2>
				<p>
					You've stumbled upon my evolving web haven. It's like peeking behing
					the curtain before the grand reveal. I am crafting a digital showcase
					of my coding adventures and pixel-perfect triumphs.
					<br /><br />
					While the code compiles and the pixels align, let's connect on other
					channels too:
				</p>
			</div>

			<img
				src={image}
				alt='Website under construction'
				className='under-construction-img'
			/>
		</div>
	);
};

export default UnderConstruction;
