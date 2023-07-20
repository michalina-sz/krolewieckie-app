import React from 'react';
import logo from '../img/logo-white.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

library.add(faFacebook, faAt, faPhone, faLocationDot);

export default function ContactSection() {
	return (
		<section className='contactSection'>
			<div className='contact-box'>
				<div className='logo'>
					<img src={logo} className='logo' alt='Logo Królewieckie' />
					<h2>KRÓLEWIECKIE</h2>
				</div>
				<div className='social-media'>
					<a href="https://www.facebook.com/recznie.lepione.pierogi.swojskie.wyroby/"><FontAwesomeIcon icon={faFacebook} /></a>
				</div>
			</div>
			<div className='contact-box'>
				<h4>KONTAKT</h4>
				<div className='contact-element'>
					<FontAwesomeIcon icon={faLocationDot} />
					<a href='https://goo.gl/maps/2TM32UWEhGcjNxLW6' target='_blank'>
						Wspólna 76, 05-303 Królewiec
					</a>
				</div>
				<div className='contact-element'>
					<FontAwesomeIcon icon={faPhone} />
					<a href='tel:+48 123 123 123'>+48 123 123 123</a>
				</div>
				<div className='contact-element'>
					<FontAwesomeIcon icon={faAt} />
					<a href='mailto:zamowienia@krolewieckie.pl'>
						zamowienia@krolewieckie.pl
					</a>
				</div>
			</div>
		</section>
	);
}
