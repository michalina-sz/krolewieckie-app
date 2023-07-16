import React from 'react';
import logo from '../img/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
// library.add(faBars);

export default function NavBar() {
	return (
		<nav>
			<img src={logo} className='logo' alt='Logo Królewieckie' />
			<ul className='links'>
				<li>
					<a href='#about'>O nas</a>
				</li>
				<li>
					<a href='#'>Nasze produkty</a>
				</li>
				<li>
					<a href='#'>Gdzie kupić</a>
				</li>
				<li>
					<a href='#'>Kontakt</a>
				</li>
			</ul>
			<div class='burger-btn-box'>
				<button class='button'>
					x
					{/* <FontAwesomeIcon className='icon' icon={faBars} /> */}
				</button>
			</div>
		</nav>
	);
}
