import NavBar from './components/NavBar';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import Benefit from './components/Benefit';
import AchievementsSection from './components/AchievementsSection';
import data from './data/data';
import './App.css';
import InfoSection from './components/InfoSection';
import Map from './components/Map';
import Products from './components/Product';
import Footer from './components/Footer';
import Collaboration from './components/Collaboration';

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
				<h2>Produkty Premium</h2>
				{/* <div className='underline-second'></div> */}
				<div className='benefit-container'>{benefits}</div>
			</section>
			<InfoSection />
			{/* <Products /> */}
			<Map />
			<Collaboration />
			<Footer />
		</div>
	);
}

export default App;
