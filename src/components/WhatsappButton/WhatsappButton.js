import React from 'react';
import { IconWhatsapp } from '../../icons/AreaIcons';
import { whatsappLink } from '../../data/site';
import './WhatsappButton.css';

const WhatsappButton = ({ mensagem, floating = false, label = 'Falar no WhatsApp' }) => (
	<a
		href={whatsappLink(mensagem)}
		target="_blank"
		rel="noopener noreferrer"
		className={floating ? 'whatsapp-fab' : 'whatsapp-cta'}
		aria-label={label}
	>
		<IconWhatsapp />
		{!floating && <span>{label}</span>}
		{floating && <span className="whatsapp-fab-label">{label}</span>}
	</a>
);

export default WhatsappButton;
