import { useMemo } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

export default function Map() {
	const { isLoaded } = useLoadScript({
		googleMapsApiKey: 'AIzaSyALqPbtl2tIQL2aYIA1j9fvV_2ShivoLXE',
	});
	const shops = [
		{ lat: 51.1234, lng: -0.4567, name: 'Sklep 1', address: 'Adres sklepu 1' },
		{ lat: 51.2345, lng: -0.5678, name: 'Sklep 2', address: 'Adres sklepu 2' },
	];
	const center = useMemo(() => ({ lat: 52, lng: 21 }), []);
	if (!isLoaded) return <div>Loading...</div>;
	return (
		<section className='map'>
			<h2>Nasze sklepy</h2>
			<GoogleMap
				zoom={10}
				center={center}
				mapContainerClassName='map-container'>
				{/* <Marker position={{ lat: 52, lng: 21 }}
        // map
        // icon={"https://api.geoapify.com/v1/icon/?type=material&color=%235d94ff&iconType=awesome&scaleFactor=2&apiKey=2044b71826644e18b84a5a7694c82fb0"} 
        /> */}
			</GoogleMap>
		</section>
	);
}
