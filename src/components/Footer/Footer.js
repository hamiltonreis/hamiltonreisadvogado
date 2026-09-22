import React from 'react';
import { Link } from 'react-router-dom';

import { IconWhatsapp } from '../../icons/AreaIcons';
import site, { whatsappLink } from '../../data/site';
import areas from '../../data/areas';
import logo from '../../media/logotop.png';
import './Footer.css';

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="footer">
			<div className="container footer-container">
				<div className="footer-grid">
					<div className="footer-brand">
						<img src={logo} alt={site.nome} />
						<p>
							Atendimento na <strong>{site.estados.join(', ')}</strong> e remotamente em todo o Brasil.
						</p>
						<a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="footer-whats">
							<IconWhatsapp />
							{site.telefoneExibicao}
						</a>
					</div>

					<div className="footer-col">
						<h2>Áreas de atuação</h2>
						<ul>
							{areas.map((area) => (
								<li key={area.slug}>
									<Link to={`/${area.slug}`}>{area.nome}</Link>
								</li>
							))}
						</ul>
					</div>

					<div className="footer-col">
						<h2>Links úteis</h2>
						<ul>
							{site.linksUteis.map((link) => (
								<li key={link.href}>
									<a target="_blank" href={link.href} rel="noreferrer">
										{link.label}
									</a>
								</li>
							))}
							<li>
								<a target="_blank" href={site.instagram} rel="noreferrer">
									Instagram
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="copyright">
					<small>{site.nome} &copy; {currentYear}. Todos os direitos reservados.</small>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
