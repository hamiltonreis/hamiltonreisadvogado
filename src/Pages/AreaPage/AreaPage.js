import React, { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';

import { getArea } from '../../data/areas';
import Header from '../../components/Header/Header';
import AreaHero from '../../components/AreaHero/AreaHero';
import AdvogadoSection from '../../components/AdvogadoSection/AdvogadoSection';
import TemasSection from '../../components/TemasSection/TemasSection';
import FaqSection from '../../components/FaqSection/FaqSection';
import ContatoSection from '../../components/ContatoSection/ContatoSection';
import WhatsappButton from '../../components/WhatsappButton/WhatsappButton';
import Footer from '../../components/Footer/Footer';

const AreaPage = () => {
	const { slug } = useParams();
	const area = getArea(slug);

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
	}, [slug]);

	if (!area) {
		return <Navigate to="/" replace />;
	}

	return (
		<>
			<Header area={area} />
			<main>
				<AreaHero area={area} />
				<AdvogadoSection area={area} />
				<TemasSection area={area} />
				<FaqSection area={area} />
				<ContatoSection area={area} />
			</main>
			<Footer />
			<WhatsappButton floating mensagem={`Olá, Dr. Hamilton! Vim pelo site e preciso de ajuda com ${area.nomeCurto}.`} />
		</>
	);
};

export default AreaPage;
