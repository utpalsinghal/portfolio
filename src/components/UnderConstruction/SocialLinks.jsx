import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SocialLinks = () => {
	return (
		<div className='social-links'>
			<a href='mailto: utpal.singhal499@gmail.com' target='_blank' rel="noreferrer" className="email">
				<FontAwesomeIcon icon={faEnvelope} />
			</a>
			<a href='https://www.linkedin.com/in/utpalsinghal/' target='_blank' rel="noreferrer" className="linkedin">
				<FontAwesomeIcon icon={faLinkedin} />
			</a>
			<a href='https://github.com/utpalsinghal' target='_blank' rel="noreferrer" className="github">
				<FontAwesomeIcon icon={faGithub} />
			</a>
		</div>
	);
};

export default SocialLinks;
