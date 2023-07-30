import React from 'react';

export default function Shop(props) {
	return (
		<div className='shop-box'>
			<p className='shop-name'>{props.name}</p>
			<p className='shop-address'> {props.address}</p>
		</div>
	);
}
