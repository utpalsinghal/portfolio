import React from "react";
import "../styles/SocialLinks.scss";

const SocialLinks = () => {
	return (
		<div className='social-links'>
			{/* <a href='mailto: utpal.singhal499@gmail.com' target='_blank' rel="noreferrer" className="email">
				<FontAwesomeIcon icon={faEnvelope} />
			</a> */}
			<a
				href='https://www.linkedin.com/in/utpalsinghal/'
				target='_blank'
				rel='noreferrer'
				className='linkedin'
			>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					className='icon icon-tabler icon-tabler-brand-linkedin'
					width={32}
					height={32}
					viewBox='0 0 24 24'
					strokeWidth={2}
					stroke='currentColor'
					fill='none'
					strokeLinecap='round'
					strokeLinejoin='round'
				>
					<path stroke='none' d='M0 0h24v24H0z' fill='none' />
					<path d='M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z' />
					<path d='M8 11l0 5' />
					<path d='M8 8l0 .01' />
					<path d='M12 16l0 -5' />
					<path d='M16 16v-3a2 2 0 0 0 -4 0' />
				</svg>
			</a>
			<a
				href='https://github.com/utpalsinghal'
				target='_blank'
				rel='noreferrer'
				className='github'
			>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					className='icon icon-tabler icon-tabler-brand-github'
					width={32}
					height={32}
					viewBox='0 0 24 24'
					strokeWidth={2}
					stroke='currentColor'
					fill='none'
					strokeLinecap='round'
					strokeLinejoin='round'
				>
					<path stroke='none' d='M0 0h24v24H0z' fill='none' />
					<path d='M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5' />
				</svg>
			</a>
		</div>
	);
};

export default SocialLinks;
