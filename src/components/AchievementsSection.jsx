import React from 'react';

export default function AchievementsSection() {
	return (
		<section className='achievementSection'>
            <h2>Nasze statystyki</h2>
			<div className="achievements-box">
            <div className='achievement'>
				<div className='achievement-number'>30 lat</div>
				<div className='achievement-text'>na rynku</div>
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