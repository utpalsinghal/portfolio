import React from "react";
import "../styles/Home.scss";
import SocialLinks from "./SocialLinks";

const Home = () => {
	return (
		<section id='Home' className='home'>
			<div className='container'>
				<div className='content'>
					<div className='main'>
						<div className='main-text'>
							<h1>Full-Stack Developer</h1>
							<p>
								Hi, I'm Utpal Singhal. A passionate Full-Stack Developer based
								in Bengaluru, India. 📍
								<br />
								Welcome to the sneak peek of my developer realm!
							</p>
							<SocialLinks />
						</div>
						<div className='main-img'></div>
					</div>
					<div className='skills'>
						<p>Tech Stack</p>
						<div className='skills-logos'>
							<ul>
								<li>
									<img
										src='https://skillicons.dev/icons?i=html'
										alt='HTML'
										title='HTML'
									/>
								</li>
								<li>
									<img
										src='https://skillicons.dev/icons?i=css'
										alt='CSS'
										title='CSS'
									/>
								</li>
								<li>
									<img
										src='https://skillicons.dev/icons?i=sass'
										alt='SASS'
										title='SASS'
									/>
								</li>
								<li>
									<img
										src='https://skillicons.dev/icons?i=js'
										alt='JavaScript'
										title='JS'
									/>
								</li>
								<li>
									<img
										src='https://skillicons.dev/icons?i=react'
										alt='ReactJS'
										title='ReactJs'
									/>
								</li>
								<li>
									<img
										src='https://skillicons.dev/icons?i=nodejs'
										alt='NodeJS'
										title='NodeJS'
									/>
								</li>
								<li>
									<img
										src='https://skillicons.dev/icons?i=redux'
										alt='Redux'
										title='Redux'
									/>
								</li>
								<li>
									<img
										src='https://skillicons.dev/icons?i=cs'
										alt='C#'
										title='C#'
									/>
								</li>
								<li>
									<img
										src='https://skillicons.dev/icons?i=mysql'
										alt='SQL'
										title='SQLServer,MySQL and PostGreSQL'
									/>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Home;
