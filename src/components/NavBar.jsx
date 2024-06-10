import React from 'react';
import logo from '../img/logo.svg';
import { Link, animateScroll as scroll } from 'react-scroll';
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
// library.add(faBars);

export default function NavBar() {
	return (
		<nav>
			<div className='nav-container'>
				<ul className='links'>
					<li>
						<Link to='about' smooth={true} duration={300}>
							O nas
						</Link>
					</li>
					<li>
						<Link to='products' smooth={true} duration={300}>
							Nasze produkty
						</Link>
					</li>
					<li>
						<Link to='map' smooth={true} duration={300}>
							Gdzie kupić
						</Link>
					</li>
					<li>
						<Link to='collaboration' smooth={true} duration={300}>
							Współpraca
						</Link>
					</li>
					<li>
						<Link to='contact' smooth={true} duration={300}>
							Kontakt
						</Link>
					</li>
				</ul>
				<div className='burger-btn-box'>
					<button className='button'>
						x{/* <FontAwesomeIcon className='icon' icon={faBars} /> */}
					</button>
				</div>
			</div>
		</nav>
	);
}
