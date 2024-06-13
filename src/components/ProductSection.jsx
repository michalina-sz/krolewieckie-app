import Product from './Product';
import pierogi from '../img/products/PIEROGI-WŁOSKIE.webp';

export default function ProductsSection() {
	const products = [
		{
			id: 1,
			img: pierogi,
			category: 'Pierogi',
			heading: 'Pierogi włoskie',
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
		},
		{
			id: 2,
			img: pierogi,
			category: 'Pierogi',
			heading: 'Pierogi włoskie',
			text: 'Lorem ipsum dolor sit amet consectetur.',
		},
		{
			id: 3,
			img: pierogi,
			category: 'Pierogi',
			heading: 'Pierogi włoskie',
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quisquam.',
		},
	];

	return (
		<section id='products' className='products'>
			<h2>Nasze produkty</h2>
			<div className='products-container wrapper'>
				{products.map((product, index) => (
					<Product
						key={product.id}
						img={product.img}
						category={product.category}
						heading={product.heading}
						text={product.text}
						isLeft={index % 2 === 0} // Naprzemienne ustawianie klasy
					/>
				))}
			</div>
		</section>
	);
}
