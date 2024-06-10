import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Navigate,
	Routes,
} from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import './App.css';

function App() {
	return (
		<Router>
			<NavBar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/product' element={<ProductPage />} />
				<Route path='*' element={<Navigate to='/' />} />
			</Routes>
		</Router>
	);
}

export default App;
