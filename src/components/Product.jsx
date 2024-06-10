import React from 'react';
import pierogi from '../img/products/PIEROGI-WŁOSKIE.webp';

export default function Product() {
	return (
		<div class='product__option left'>
			<img src={pierogi} alt='' class='product__option-img' sty />
			<div class='product__option-info'>
				<h4 className='product__option-category'>Pierogi</h4>
				<h3 class='product__option-heading'>Pierogi włoskie</h3>
				<p class='product__option-text'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
					quisquam ea excepturi perspiciatis nostrum iste.
				</p>
				<p class='product__option-text'>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae,
					voluptate.
				</p>
				<button class='product__option-btn button'>Wybierz</button>
			</div>
		</div>
	);
}
