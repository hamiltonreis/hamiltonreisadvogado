import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../Reveal/Reveal';
import { IconArrow } from '../../icons/AreaIcons';
import areas from '../../data/areas';
import './AreaSelector.css';

const AreaSelector = () => (
	<section className="area-selector" id="escolher-area">
		<div className="container area-selector-container">
			<Reveal as="p" className="section-eyebrow center">
				Comece por aqui
			</Reveal>
			<Reveal as="h2" className="area-selector-title">
				Em qual dessas situações você se encontra?
			</Reveal>
			<Reveal as="p" className="area-selector-subtitle" delay={80}>
				Escolha a área que mais combina com o seu momento. Você verá explicações
				simples, os assuntos mais comuns e poderá voltar para trocar de tema quando quiser.
			</Reveal>

			<div className="area-cards">
				{areas.map((area, index) => {
					const { Icon } = area;
					return (
						<Reveal
							as={Link}
							to={`/${area.slug}`}
							className="area-card"
							key={area.slug}
							delay={index * 90}
							style={{ '--accent': area.accent }}
						>
							<div className="area-card-top">
								<span className="area-card-icon">
									<Icon />
								</span>
								<span className="area-card-index">0{index + 1}</span>
							</div>

							<h3>{area.nome}</h3>
							<p className="area-card-resumo">{area.resumo}</p>

							<ul className="area-card-exemplos">
								{area.exemplos.slice(0, 3).map((exemplo) => (
									<li key={exemplo}>{exemplo}</li>
								))}
							</ul>

							<span className="area-card-cta">
								Ver esta área <IconArrow />
							</span>
						</Reveal>
					);
				})}
			</div>
		</div>
	</section>
);

export default AreaSelector;
