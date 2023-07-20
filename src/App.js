import NavBar from './components/NavBar';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import Benefit from './components/Benefit';
import AchievementsSection from './components/AchievementsSection';
import data from './data/data';
import './App.css';
import Map from './components/Map';
import Products from './components/Product';
import Footer from './components/Footer';

function App() {
	const benefits = data.map((item) => {
		return <Benefit key={item.id} {...item} />;
	});

	return (
		<div className='App'>
			<NavBar />
			<Header />
			<AboutSection />
			<AchievementsSection />
			<section className='benefit-section container'>
				<div className='benefit-container'>{benefits}</div>
			</section>
			<Products />
			<Map />
			<Footer />
		</div>
	);
}

export default App;
