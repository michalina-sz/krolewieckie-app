import React from 'react';
import logo from '../img/logo.svg';

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
		</nav>
	);
}
