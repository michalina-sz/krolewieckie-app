import Header from '../components/Header';
import AboutSection from '../components/AboutSection';
import AchievementsSection from '../components/AchievementsSection';
import InfoSection from '../components/InfoSection';
import ProductSection from '../components/ProductSection';
import Map from '../components/Map';
import Collaboration from '../components/Collaboration';
import Footer from '../components/Footer';
import Benefit from '../components/Benefit';
import data from '../data/data.jsx';

function Home() {
	const benefits = data.map((item) => {
		return <Benefit key={item.id} {...item} />;
	});

	return (
		<>
			<Header />
			<main>
				<AboutSection />
				<AchievementsSection />
				<section className='benefit-section container'>
					<h2>Produkty Premium</h2>
					{/* <div className='underline-second'></div> */}
					<div className='benefit-container'>{benefits}</div>
				</section>
				<InfoSection />
				<ProductSection />
				<Map />
				<Collaboration />
			</main>
			<Footer />
		</>
	);
}

export default Home;
