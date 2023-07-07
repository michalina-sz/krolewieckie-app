import React from 'react';
import logo from '../img/logo.svg';

export default function ContactSection() {
	return (
		<section className='contactSection'>
			<div className='logo-box'>
				<div className='logo'>
					<img src={logo} className='logo' alt='Logo Królewieckie' />
                    <h2>Królewieckie</h2>
				</div>
                <div className="social-media">
                    .<FontAwesomeIcon icon={solid("facebook")} />
                </div>
			</div>
		</section>
	);
}
