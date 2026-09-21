import React, { useState } from 'react';
import Reveal from '../Reveal/Reveal';
import { IconArrow } from '../../icons/AreaIcons';
import './FaqSection.css';

const ITENS_POR_VEZ = 5;

const FaqSection = ({ area }) => {
	const [openIndex, setOpenIndex] = useState(null);
	const [visibleCount, setVisibleCount] = useState(ITENS_POR_VEZ);

	const toggle = (index) => setOpenIndex(openIndex === index ? null : index);
	const showMore = () => setVisibleCount((count) => count + ITENS_POR_VEZ);
	const allShown = visibleCount >= area.faqs.length;

	return (
		<section className="faq-section" id="area-faq" style={{ '--accent': area.accent }}>
			<div className="container faq-container">
				<p className="section-eyebrow center">Dúvidas frequentes</p>
				<h2 className="faq-title">Perguntas sobre {area.nome}</h2>
				<p className="faq-subtitle">Toque na pergunta para ver a resposta</p>

				<div className="faq-list">
					{area.faqs.slice(0, visibleCount).map((faq, index) => {
						const isOpen = openIndex === index;
						return (
							<Reveal as="div" className={`faq-item ${isOpen ? 'is-open' : ''}`} key={faq.pergunta} delay={index * 40}>
								<button type="button" className="faq-question" onClick={() => toggle(index)}>
									<span>{faq.pergunta}</span>
									<IconArrow className="faq-caret" />
								</button>
								<div className="faq-answer">
									<p>{faq.resposta}</p>
								</div>
							</Reveal>
						);
					})}
				</div>

				{!allShown && (
					<button type="button" className="faq-more" onClick={showMore}>
						Ver mais perguntas
					</button>
				)}
			</div>
		</section>
	);
};

export default FaqSection;
