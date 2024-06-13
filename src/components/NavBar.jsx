import React from 'react';
import logo from '../img/logo.svg';
import { Link, animateScroll as scroll } from 'react-scroll';
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { slide as Menu } from 'react-burger-menu';

// library.add(faBars);

export default function NavBar() {
	return (
		<nav>
			<div className='nav-container'>
				<ul className='links'>
					<li>
						<Link to='about' smooth={true} duration={300} offset={-70}>
							O nas
						</Link>
					</li>
					<li>
						<Link to='products' smooth={true} duration={300} offset={-70}>
							Nasze produkty
						</Link>
					</li>
					<li>
						<Link to='map' smooth={true} duration={300} offset={-70}>
							Gdzie kupić
						</Link>
					</li>
					{/* <li>
						<Link to='collaboration' smooth={true} duration={300} offset={-70}>
							Współpraca
						</Link>
					</li> */}
					<li>
						<Link to='contact' smooth={true} duration={300} offset={-70}>
							Kontakt
						</Link>
					</li>
				</ul>
			</div>
			<MobileMenu />
		</nav>
	);
}

function MobileMenu() {
	return (
		<Menu right>
			<Link
				to='about'
				smooth={true}
				duration={300}
				offset={-70}
				className='menu-item'>
				O nas
			</Link>
			<Link to='products' className='menu-item'>
				Produkty
			</Link>
			<Link to='map' className='menu-item'>
				Gdzie kupić
			</Link>
			<Link to='contact' className='menu-item'>
				Kontakt
			</Link>
		</Menu>
	);
}
