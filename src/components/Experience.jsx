import React from "react";
import "../styles/Experience.scss";
import Experiences from "../data/Experiences.json";

const Experience = () => {
	return (
		<section id='Experience' className='experience'>
			<div className='container'>
				<div className='experience-content'>
					<h3>Experience</h3>
					<h4>Experience is a mosaic of diverse learning episodes.</h4>
					{Experiences.map((experience) => {
						return (
							<div className='experience-card'>
								<p className='company'>{experience.company}</p>
								<ul className="position">
									{experience.positions.map((position) => {
										return (
											<li>
												<p className='title'>{position.title}</p>
												<p className='time-period'>{`${position.startDate} - ${position.endDate ? position.endDate : 'Present'}`}</p>
												<p className='location'>{position.location}</p>
											</li>
										);
									})}
								</ul>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Experience;
