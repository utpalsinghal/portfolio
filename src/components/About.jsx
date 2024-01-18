import React from "react";
import "../styles/About.scss";

const About = () => {
	return (
		<section id='About' className='about'>
			<div className='container'>
				<div className='about-content'>
					<h3>About</h3>
					<h4>A dedicated Full-Stack Developer.</h4>
					<p className='about-text'>
						Hey there, I'm Utpal, your friendly neighborhood code maestro. I
						dance between pixels, conjuring up delightful UI/UX experiences with
						ReactJs. <br />
						<br />
						On the backend stage, I use SQL, .NET and Java to turn data into a
						well-choreographed spectacle. Let's create software that not only
						works like magic but also leaves users thinking, "Wow, that's some
						spellbinding code!"
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;
