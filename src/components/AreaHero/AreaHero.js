import React from 'react';
import WhatsappButton from '../WhatsappButton/WhatsappButton';
import './AreaHero.css';

const AreaHero = ({ area }) => {
	const { Icon } = area;

	return (
		<section
			className="area-hero"
			style={{ '--accent': area.accent }}
		>
			<div className="area-hero-noise" aria-hidden="true" />
			<div className="area-hero-glow" aria-hidden="true" />

			<div className="container area-hero-container">
				<div className="area-hero-icon">
					<Icon />
				</div>
				<p className="area-hero-eyebrow">Área de atuação</p>
				<h1 className="area-hero-title">{area.heroTitulo}</h1>
				<p className="area-hero-destaque">{area.heroDestaque}</p>
				<p className="area-hero-texto">{area.heroTexto}</p>

				<div className="area-hero-actions">
					<WhatsappButton
						mensagem={`Olá, Dr. Hamilton! Vim pelo site e preciso de ajuda com ${area.nomeCurto}.`}
						label="Conversar agora no WhatsApp"
					/>
					<a href="#area-temas" className="area-hero-link">
						Ver temas mais comuns ↓
					</a>
				</div>
			</div>
		</section>
	);
};

export default AreaHero;
