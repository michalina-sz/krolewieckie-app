import { useMemo } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import Shop from './Shop';
import shops from '../data/shops';

export default function Map() {
	const { isLoaded } = useLoadScript({
		googleMapsApiKey: 'AIzaSyALqPbtl2tIQL2aYIA1j9fvV_2ShivoLXE',
	});
	const shop = shops.map((item) => {
		return <Shop key={item.id} {...item} />;
	});
	const center = useMemo(() => ({ lat: 52, lng: 21 }), []);
	if (!isLoaded) return <div>Loading...</div>;
	return (
		<section className='map'>
			<h2>Gdzie kupić</h2>
			<div className="shop-list-box">
				{shop}
			</div>
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
