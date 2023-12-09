import React from "react";
import "../styles/Home.scss";
import SocialLinks from "./SocialLinks";

const Home = () => {
	return (
		<section id='#Home' className='home'>
			<div className='container'>
				<div class='content'>
					<div className='main'>
						<div className='main-text'>
							<h1>Full-Stack Developer</h1>
							<p>
								Hi, I'm Utpal Singhal. A passionate Full-Stack Developer based
								in Gurugram, India. 📍
								<br />
								Welcome to the digital showcase of my coding adventures.
							</p>
              <SocialLinks />
						</div>
						<div className='main-img'></div>
					</div>
					<div className='skills'>
						<p>Tech Stack</p>
						<div className='skills-logos'>
              <ul>
                <li><img src="https://skillicons.dev/icons?i=html,css,sass" alt="HTML,CSS,SASS" /></li>
                <li><img src="https://skillicons.dev/icons?i=js,react,nodejs,redux" alt="" /></li>
                <li><img src="https://skillicons.dev/icons?i=cs,mysql" alt="" /></li>
              </ul>
            </div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Home;
