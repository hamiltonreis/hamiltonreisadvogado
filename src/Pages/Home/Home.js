import React from 'react';

import Header from '../../components/Header/Header';
import HomeHero from '../../components/HomeHero/HomeHero';
import TrustBar from '../../components/TrustBar/TrustBar';
import AreaSelector from '../../components/AreaSelector/AreaSelector';
import Footer from '../../components/Footer/Footer';
import WhatsappButton from '../../components/WhatsappButton/WhatsappButton';

const Home = () => (
	<>
		<Header />
		<main>
			<HomeHero />
			<TrustBar />
			<AreaSelector />
		</main>
		<Footer />
		<WhatsappButton floating mensagem="Olá, Dr. Hamilton! Vim pelo site e gostaria de uma orientação." />
	</>
);

export default Home;
