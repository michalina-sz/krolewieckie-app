import React from 'react';
import logo from '../img/logo.svg';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { Link, Element } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
// library.add(faBars);
import AboutSection from './AboutSection';

export default function NavBar() {
	return (
		<BrowserRouter>
			<nav>
				<div className='nav-container'>
					<a href='#' className='logo'>
						{/* <p>Królewieckie</p> */}
						<img src={logo} className='logo' alt='Logo Królewieckie' />
					</a>
					<ul className='links'>
						<li>
							<a href='#about'>O nas</a>
						</li>
						<li>
							<a href='#products'>Nasze produkty</a>
						</li>
						<li>
							<a href='#map'>Gdzie kupić</a>
						</li>
						<li>
							<a href='#map'>Współpraca</a>
						</li>
						<li>
							<a href='#contact'>Kontakt</a>
						</li>
					</ul>
					<div className='burger-btn-box'>
						<button className='button'>
							x{/* <FontAwesomeIcon className='icon' icon={faBars} /> */}
						</button>
					</div>
				</div>
			</nav>
		</BrowserRouter>
	);
}
