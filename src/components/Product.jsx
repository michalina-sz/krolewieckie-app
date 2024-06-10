import React from 'react';

export default function Product({ img, category, heading, text, isLeft }) {
	return (
		<div className={`product__option ${isLeft ? 'left' : 'right'}`}>
			<img src={img} alt='' className='product__option-img' />
			<div className='product__option-info'>
				<h4 className='product__option-category'>{category}</h4>
				<h3 className='product__option-heading'>{heading}</h3>
				<p className='product__option-text'>{text}</p>
			</div>
		</div>
	);
}
