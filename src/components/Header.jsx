import React from 'react';
import logo from '../img/logo-beige.svg';

export default function Header() {
	return (
		<div className='hero-img'>
			<div className='hero-text'>
				<img src={logo} alt='' style={{ width: 180 + 'px' }} />
				{/* <h2>KRÓLEWIECKIE</h2> */}
				<p>
					Mamy nadzieję, że nasze wyroby garmażeryjne wniosą do Waszych domów
					moc przyjemnych doznań w czasie wspólnych, rodzinnych posiłków.
				</p>
				{/* <button className='button'>POZNAJ NAS</button> */}
			</div>
		</div>
	);
}
