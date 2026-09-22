import React from 'react';
import Reveal from '../Reveal/Reveal';
import WhatsappButton from '../WhatsappButton/WhatsappButton';
import site from '../../data/site';
import './ContatoSection.css';

const ContatoSection = ({ area }) => (
	<section className="contato-section" id="area-contato" style={{ '--accent': area.accent }}>
		<div className="container contato-container">
			<Reveal as="div" className="contato-copy">
				<p className="section-eyebrow">Fale comigo</p>
				<h2>
					Vamos conversar sobre o seu caso de <span>{area.nome}</span>?
				</h2>
				<p className="contato-texto">
					O primeiro contato é rápido e direto pelo WhatsApp. Conte o que está
					acontecendo e receba uma orientação inicial sobre os próximos passos.
				</p>

				<div className="contato-actions">
					<WhatsappButton
						mensagem={`Olá, Dr. Hamilton! Vim pelo site e preciso de ajuda com ${area.nomeCurto}.`}
						label="Falar agora no WhatsApp"
					/>
					<span className="contato-fone">ou ligue: {site.telefoneExibicao}</span>
				</div>

				<ul className="contato-abrangencia">
					{[...site.estados, 'Todo o Brasil'].map((lugar) => (
						<li key={lugar}>{lugar}</li>
					))}
				</ul>
			</Reveal>
		</div>
	</section>
);

export default ContatoSection;
