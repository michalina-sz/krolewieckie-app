import Product from "./Product";
import pierogi from '../img/products/PIEROGI WŁOSKIE.png'

export default function ProductSection() {
    return (
        <section className="product container">
            <h2>Oferta</h2>
            <Product />
            <div class='product__option right'>
			<img src={pierogi} alt='' class='product__option-img' sty />
			<div class='product__option-info'>
				<h3 class='product__option-heading'>Lorem, ipsum.</h3>
				<p class='product__option-text'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quisquam ea excepturi perspiciatis nostrum iste.
				</p>
				<p class='product__option-text'>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, voluptate.
							</p>
				<button class='product__option-btn button'>Wybierz</button>
			</div>
		</div>
            <Product />
        </section>
    );
}