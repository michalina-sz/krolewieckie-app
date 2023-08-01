import { useMemo, useEffect } from 'react';
import {
	GoogleMap,
	useLoadScript,
	MarkerF,
	InfoWindowF,
	withScriptjs,
	withGoogleMap,
} from '@react-google-maps/api';
import Shop from './Shop';
import shops from '../data/shops';
// import marker from '../img/markers/mapbox-marker-icon-purple.svg';
import marker from '../img/markers/krolewieckie-marker3.svg';

export default function Map() {
	const { isLoaded } = useLoadScript({
		googleMapsApiKey: 'AIzaSyALqPbtl2tIQL2aYIA1j9fvV_2ShivoLXE',
	});
	const center = useMemo(() => ({ lat: 52.2, lng: 21.3 }), []);
	if (!isLoaded) return <div>Loading...</div>;

	return (
		<section className='map' id='map' name="sekcja1">
			<div className='container'>
				<div className='shop-list-box'>
					<div className='map-text'>
						<h3>Nasze sklepy</h3>
						<div className='underline'></div>
						<h2>Gdzie kupić</h2>
					</div>
					<div className='shop-list'>
						<div className='shop-list-one'>
							{shops.map((shop) => (
								<Shop key={shop.id} {...shop} />
							))}
						</div>
						<div className='shop-list-two'>
							{shops.map((shop) => (
								<Shop key={shop.id} {...shop} />
							))}
						</div>
					</div>
				</div>
				<GoogleMap
					zoom={9.5}
					center={center}
					mapContainerClassName='map-container'
					options={{
						mapTypeControl: false,
						fullscreenControl: false,
						streetViewControl: true,
					}}>
					{shops.map((shop) => (
						<MarkerF
							key={shop.id}
							position={{ lat: shop.lat, lng: shop.lng }}
							GoogleMap
							title={shop.name}
							icon={{
								url: marker,
							}}
						/>
					))}
				</GoogleMap>
			</div>
		</section>
	);
}
