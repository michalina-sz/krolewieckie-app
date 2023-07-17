import NavBar from './components/NavBar';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import Benefit from './components/Benefit';
import AchievementsSection from './components/AchievementsSection';
import ContactSection from './components/ContactSection';
import data from './data';
import './App.css';
import Map from './components/Map';
import Products from './components/Products';

function App() {
	const benefits = data.map((item) => {
		return <Benefit key={item.id} {...item} />;
	});
	// const [selectedMarker, setSelectedMarker] = useState(null);


	return (
		<div className='App'>
			<NavBar />
			<Header />
			<AboutSection />
			<AchievementsSection />
			<section className='benefit'>
				<div className='benefit__box'>{benefits}</div>
			</section>
			<Products />
			<Map />

			<ContactSection />
		</div>
	);
}

export default App;
