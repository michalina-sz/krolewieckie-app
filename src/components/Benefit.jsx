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
		<div className='benefit'>
			<div className='icon'>
				<FontAwesomeIcon icon={props.icon} />
			</div>
			<div className='benefit-info'>
				<h3 className='benefit-title'>{props.title}</h3>
				<p className='benefit-text'>{props.description}</p>
			</div>
		</div>
		// 	<div class="benefit">
		// 	<div class="icon"><FontAwesomeIcon icon={props.icon} /></div>
		// 	<div class="benefit-info">
		// 		<h3>Jakość</h3>
		// 		<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores blanditiis natus aliquid,
		// 			quod reprehenderit aliquam reiciendis voluptates possimus ut? Voluptates.</p>
		// 	</div>
		// </div>
	);
}
