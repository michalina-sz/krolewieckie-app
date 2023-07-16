import React from 'react';

export default function AchievementsSection() {
	return (
		<section className='achievementSection'>
			{/* <h3>O NAS</h3>
			<div className='underline'></div> */}
			<h2>Nasze statystyki</h2>
			<div className='achievements-box'>
				<div className='achievement'>
					<div className='achievement-number'>30</div>
					<div className='achievement-text'>lat na rynku</div>
				</div>
				<div className='achievement'>
					<div className='achievement-number'>7</div>
					<div className='achievement-text'>punktów sprzedaży</div>
				</div>
				<div className='achievement'>
					<div className='achievement-number'>5000+</div>
					<div className='achievement-text'>lepionych pierogów dziennie</div>
				</div>
			</div>
		</section>
	);
}
