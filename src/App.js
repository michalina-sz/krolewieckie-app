import NavBar from './components/NavBar';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import Benefit from './components/Benefit';
import AchievementsSection from './components/AchievementsSection';
import ContactSection from './components/ContactSection';
import data from './data';
import './App.css';
import Home from './components/Map';

function App() {
	const benefits = data.map((item) => {
		return <Benefit key={item.id} {...item} />;
	});
	// const [selectedMarker, setSelectedMarker] = useState(null);

	// const shops = [
	// 	{ lat: 51.1234, lng: -0.4567, name: 'Sklep 1', address: 'Adres sklepu 1' },
	// 	{ lat: 51.2345, lng: -0.5678, name: 'Sklep 2', address: 'Adres sklepu 2' },
	// 	// Dodaj więcej sklepów według potrzeb
	// ];

	return (
		<div className='App'>
			<NavBar />
			<Header />
			<AboutSection />
			<AchievementsSection />
			<section className='benefit'>
				<div className='benefit__box'>{benefits}</div>
			</section>
			<Home
			/>

			<ContactSection />
		</div>
	);
}

export default App;
