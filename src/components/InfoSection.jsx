import React from 'react';
import img1 from '../img/img1.jpeg';
import img2 from '../img/img2.jpeg';
import img3 from '../img/img3.jpeg';
export default function InfoSection() {
	return (
		<section class='offers section-padding section' id='offers'>
			{/* <h2 class='section-heading'>Oferty</h2> */}
			<div class='underline'></div>
			<div class='wrapper'>
				<div class='offers__box'>
					<div class='offers__option left'>
						<img src={img1} alt='' class='offers__option-img ' />
						<div class='offers__option-info'>
							<h3 class='offers__option-heading'>Przenosimy w czasie.</h3>
							<p class='offers__option-text'>
							Dziś wszyscy jesteśmy zabiegani i często nie mamy czasu zrobić sobie nawet kanapki, nie wspominając o tradycyjnych, polskich daniach, które przecież tak kochamy. Dzięki naszym paniom kucharkom wrócisz wspomnieniami do beztroskich czasów dzieciństwa, przypomną Ci się zapachy z babcinej kuchni, a feria smaków domowych potraw zachwyci i chociaż na chwilę przeniesie Cię w przeszłość.
							</p>
							{/* <p class='offers__option-text'>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
							</p> */}
							{/* <button class='offers__option-btn'>Wybierz</button> */}
						</div>
					</div>
					<div class='offers__option right'>
						<img src={img2} alt='' class='offers__option-img ' />
						<div class='offers__option-info'>
							<h3 class='offers__option-heading'>Oferujemy duzy wybór</h3>
							<p class='offers__option-text'>
							W naszej ofercie znajduje się aż dziesięć rodzajów ręcznie lepionych pierogów, które przypominają w smaku te robione przed laty przez nasze mamy i babcie. Oprócz nich na asortyment składają się też surówki, sałatki, kotlety, kluski, krokiety, smalec i wiele innych. Do produkcji wykorzystujemy wyłącznie wysokojakościowe składniki. Mięsa, przyprawy i warzywa pochodzą od lokalnych dostawców, pozbawione są dodatków chemicznych, dzięki czemu cechują się niepowtarzalnym smakiem i aromatem.
							</p>
							{/* <p class='offers__option-text'>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
							</p> */}
							{/* <button class='offers__option-btn'>Wybierz</button> */}
						</div>
					</div>
					<div class='offers__option left'>
						<img src={img3} alt='' class='offers__option-img ' />
						<div class='offers__option-info'>
							<h3 class='offers__option-heading'>Lorem, ipsum dolor.</h3>
							<p class='offers__option-text'>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
								eligendi dolores ab odit officiis facere enim minus animi itaque
								voluptatibus.
							</p>
							<p class='offers__option-text'>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
							</p>
							{/* <button class='offers__option-btn'>Wybierz</button> */}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
