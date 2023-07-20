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
			<FontAwesomeIcon icon={props.icon} />
			<div className='benefit-info'>
				<h3 className='benefit-title'>{props.title}</h3>
				<p className='benefit-text'>{props.description}</p>
			</div>
		</div>
	);
}
