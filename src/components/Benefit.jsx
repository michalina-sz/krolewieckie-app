import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAward } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';

library.add(faAward, faHeart, faLightbulb, faThumbsUp);

export default function Benefit(props) {
	return (
		// <div className='benefit'>
		// 	<div className='icon'>
		// 		<FontAwesomeIcon icon={props.icon} />
		// 	</div>
		// 	<h3>{props.title}</h3>
		// 	<p>{props.description}</p>
		// </div>

			<div class='wrapper'>
				<h2>Lorem ipsum dolor sit amet.</h2>
				<div class='benefit-box'>
					<div class={`benefit-box-icon ${props.class}`}>
						<FontAwesomeIcon icon={props.icon} />
					</div>
					<div class='benefit-box-text'>
						<h3 class='benefit-title'>{props.title}</h3>
						<p class='benefit-text'>{props.description}</p>
					</div>
				</div>
				{/* <div class="dreams__box">
		<div class="dreams__box-img dreams__box-img--right">
			<img src="/img/bora-bora_640.jpg" alt="Domki nad oceanem" class="dreams__img">
		</div>
		<div class="dreams__box-text dreams__box-text--right">
			<h3 class="dreams__title">Niezapomniane przygody</h3>
			<p class="dreams__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quam
				quae commodi eaque quas in repudiandae impedit adipisci? Sapiente, enim?</p>
		</div>
	</div> */}
			</div>
	);
}
