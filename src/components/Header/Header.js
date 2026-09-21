import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import logo from '../../media/logotop.png';
import { IconArrow } from '../../icons/AreaIcons';
import './Header.css';

const Header = ({ area }) => {
	const [scrolled, setScrolled] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	return (
		<header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
			<div className="site-header-inner">
				<Link to="/" className="brand" aria-label="Página inicial">
					<img src={logo} alt="Hamilton Reis Advocacia" />
				</Link>

				{area ? (
					<button type="button" className="btn-voltar" onClick={() => navigate('/')}>
						<IconArrow className="icon-flip" />
						<span>Escolher outro tema</span>
					</button>
				) : (
					<span className="header-tagline">Trabalhista · Previdenciário · Família · Criminal</span>
				)}
			</div>
		</header>
	);
};

export default Header;
