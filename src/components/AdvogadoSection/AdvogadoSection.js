import React from 'react';
import Reveal from '../Reveal/Reveal';
import foto from '../../media/equipe00.png';
import site from '../../data/site';
import './AdvogadoSection.css';

const AdvogadoSection = ({ area }) => (
	<section className="advogado-section" id="area-advogado" style={{ '--accent': area.accent }}>
		<div className="container advogado-container">
			<Reveal as="div" className="advogado-photo">
				<img src={foto} alt={site.advogado} />
				<div className="advogado-photo-frame" aria-hidden="true" />
			</Reveal>

			<Reveal as="div" className="advogado-copy" delay={120}>
				<p className="section-eyebrow">O advogado</p>
				<h2>{site.advogado}</h2>
				<h3>Atuação em {area.nome}</h3>
				{area.sobreParagrafos.map((paragrafo, index) => (
					<p key={index}>{paragrafo}</p>
				))}
			</Reveal>
		</div>
	</section>
);

export default AdvogadoSection;
