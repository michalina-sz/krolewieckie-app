import React from 'react';
import img1 from '../img/img1.jpeg';
import img2 from '../img/img2.jpeg';
import img3 from '../img/img3.jpeg';
export default function InfoSection() {
	return (
		<section class='offers section-padding section' id='offers'>
			<h2 class='section-heading'>Oferty</h2>
			<div class='underline'></div>
			<div class='wrapper'>
				<div class='offers__box'>
					<div class='offers__option left'>
						<img src={img1} alt='' class='offers__option-img ' />
						<div class='offers__option-info'>
							<h3 class='offers__option-heading'>Lorem ipsum dolor sit.</h3>
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
					<div class='offers__option right'>
						<img src={img2} alt='' class='offers__option-img ' />
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
