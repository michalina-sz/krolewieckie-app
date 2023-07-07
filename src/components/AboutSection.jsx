import React from 'react';
import aboutImg from '../img/pierogi.jpeg';

export default function AboutSection() {
	return (
		<section id='about' className='about'>
			<div className='container about-container'>
				<div className='about-text'>
					<h3>O nas</h3>
					<div className="underline"></div>
					<h2>Kim jesteśmy</h2>
					<p>
						Od ponad 30 lat zajmujemy się produkcją wyrobów garmażeryjnych,
						które dostarczamy do sieci naszych sklepów w Mińsku Mazowieckim, w
						Warszawie oraz Stojadłach. Obecnie możemy pochwalić się szerokim
						asortymentem dań domowych, które z powodzeniem trafiają w gusta
						szerokiego grona naszych Klientów.
					</p>
				</div>
				<div className='about-img'>
					<img src={aboutImg} alt='a' />
				</div>
			</div>
		</section>
	);
}
