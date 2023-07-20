import React from 'react';

export default function Shop(props) {
	return (
		<div className='shop-box'>
			<p>{props.name}</p>
			<p> {props.address}</p>
		</div>
	);
}
