import NavBar from './components/NavBar';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import Benefit from './components/Benefit';
import AchievementsSection from './components/AchievementsSection';
import data from './data';
import './App.css';

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
			<section className='benefitSection'>
				<div className='benefits-box'>{benefits}</div>
			</section>
		</div>
	);
}

export default App;
