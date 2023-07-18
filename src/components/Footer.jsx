import React from 'react';
import ContactSection from './ContactSection';

export default function Footer() {
	return (
		<footer>
            <ContactSection />
			<div className="underline"></div>
			<p>© 2023 Królewieckie sp.z.o.o</p>
		</footer>
	);
}
