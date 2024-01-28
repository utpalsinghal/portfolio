import React from "react";
import "../styles/Projects.scss";
import ProjectsData from "../data/Projects.json";

const Projects = () => {
	return (
		<section id='Projects' className='project'>
			<div className='container'>
				<div className='project-content'>
					<h3>Projects</h3>
					<h4>Every project unfolds as a distinct development journey.</h4>
					{ProjectsData.map((project) => {
						return (
							<div className={`project-card ${project.id%2===0 ? '' : 'reverse' }`}>
								<div className='text-side'>
									<h3 className='project-name'>{project.name}</h3>
									<p className="description">{project.description}</p>
									<div className='links'>
										{/* Live demo */}
										<a
											href={project.link}
											target='_blank'
											rel='noreferrer'
											className='externalLink'
										>
											<p>Demo</p>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												className='icon icon-tabler icon-tabler-external-link'
												width='24'
												height='24'
												viewBox='0 0 24 24'
												stroke-width='2'
												stroke='currentColor'
												fill='none'
												stroke-linecap='round'
												stroke-linejoin='round'
											>
												<path stroke='none' d='M0 0h24v24H0z' fill='none' />
												<path d='M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6' />
												<path d='M11 13l9 -9' />
												<path d='M15 4h5v5' />
											</svg>
										</a>
										{/* Code */}
										<a
											href={project.github}
											target='_blank'
											rel='noreferrer'
											className='projectGithub'
										>
											<p>Code</p>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												className='icon icon-tabler icon-tabler-brand-github'
												width='24'
												height='24'
												viewBox='0 0 24 24'
												stroke-width='2'
												stroke='currentColor'
												fill='none'
												stroke-linecap='round'
												stroke-linejoin='round'
											>
												<path stroke='none' d='M0 0h24v24H0z' fill='none' />
												<path d='M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5' />
											</svg>
										</a>
									</div>
								</div>
								<div className='image-side'>
									<img src={project.previewImage} alt={`${project.name} preview`}></img>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Projects;
