import React from "react";
import "../styles/Contact.scss";

const Contact = () => {
	return (
		<section id='Contact' className='contact'>
			<div className='container'>
				<div className='contact__content'>
					<div className='contact__title'>
						<p>Contact</p>
						<h3>I'd love to hear from you soon!</h3>
					</div>
					<div className='contact__icons'>
						<div className='contact__icon-box'>
							<span>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='icon icon-tabler icon-tabler-map-2'
									width={24}
									height={24}
									viewBox='0 0 24 24'
									strokeWidth={2}
									stroke='currentColor'
									fill='none'
									strokeLinecap='round'
									strokeLinejoin='round'
								>
									<path stroke='none' d='M0 0h24v24H0z' fill='none' />
									<path d='M12 18.5l-3 -1.5l-6 3v-13l6 -3l6 3l6 -3v7.5' />
									<path d='M9 4v13' />
									<path d='M15 7v5.5' />
									<path d='M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879z' />
									<path d='M19 18v.01' />
								</svg>
							</span>
							<div className='contact__info'>
								<h3>Location</h3>
								<a
									href='https://maps.app.goo.gl/mPhFt3jFJh1LxzWJ7'
									target='_blank'
									rel='noreferrer'
									className='location'
								>
									Gurugram, India
								</a>
							</div>
						</div>
						<div className='contact__icon-box'>
							<span>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='icon icon-tabler icon-tabler-mail'
									width={24}
									height={24}
									viewBox='0 0 24 24'
									strokeWidth={2}
									stroke='currentColor'
									fill='none'
									strokeLinecap='round'
									strokeLinejoin='round'
								>
									<path stroke='none' d='M0 0h24v24H0z' fill='none' />
									<path d='M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z' />
									<path d='M3 7l9 6l9 -6' />
								</svg>
							</span>
							<div className='contact__info'>
								<h3>Email</h3>
								<a
									href='mailto: utpal.singhal499@gmail.com'
									target='_blank'
									rel='noreferrer'
									className='email'
								>
									utpal.singhal499@gmail.com
								</a>
							</div>
						</div>
						<div className='contact__icon-box'>
							<span>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='icon icon-tabler icon-tabler-brand-linkedin'
									width={24}
									height={24}
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
							</span>
							<div className='contact__info'>
								<h3>LinkedIn</h3>
								<a
									href='https://www.linkedin.com/in/utpalsinghal/'
									target='_blank'
									rel='noreferrer'
									className='linkedin'
								>
									linkedin.com/in/utpalsinghal
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
