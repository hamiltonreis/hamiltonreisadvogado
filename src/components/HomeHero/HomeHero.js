import React from 'react';
import areas from '../../data/areas';
import './HomeHero.css';

const marqueeItems = [...areas, ...areas];

const HomeHero = () => (
	<section className="home-hero">
		<div className="home-hero-noise" aria-hidden="true" />

		<div className="home-hero-content">
			<p className="home-hero-eyebrow">Hamilton Reis Advocacia</p>
			<h1 className="home-hero-title">
				Qual é o seu
				<br />
				<span>problema jurídico</span>
				<br />
				hoje?
			</h1>
			<p className="home-hero-subtitle">
				Escolha a situação que mais se parece com a sua e receba orientação clara,
				direta e humana — sem juridiquês.
			</p>

			<a href="#escolher-area" className="home-hero-cta">
				<span>Identificar minha situação</span>
				<svg viewBox="0 0 24 24" width="18" height="18">
					<path d="M12 4v16M6 14l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
				</svg>
			</a>
		</div>

		<div className="home-hero-marquee" aria-hidden="true">
			<div className="home-hero-marquee-track">
				{marqueeItems.map((area, index) => (
					<span key={`${area.slug}-${index}`}>
						{area.nome}
						<i />
					</span>
				))}
			</div>
		</div>
	</section>
);

export default HomeHero;
