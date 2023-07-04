import React from 'react';
import aboutImg from '../img/pierogi.jpeg';

export default function AboutSection() {
	return (
		<section id='about' className='about'>
			<div className='about-content'>
				<img src={aboutImg} className='about-img' alt='a' />
				<div className='about-text'>
					<h3>O nas</h3>
                    <h2>Kim jesteśmy</h2>
					<p>
						Od ponad 30 lat zajmujemy się produkcją wyrobów garmażeryjnych,
						które dostarczamy do sieci naszych sklepów w Mińsku Mazowieckim, w
						Warszawie oraz Stojadłach. Obecnie możemy pochwalić się szerokim
						asortymentem dań domowych, które z powodzeniem trafiają w gusta
						szerokiego grona naszych Klientów.
					</p>
				</div>
			</div>
		</section>
	);
}
