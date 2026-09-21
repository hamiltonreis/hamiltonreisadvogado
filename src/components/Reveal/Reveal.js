import React from 'react';
import useReveal from '../../hooks/useReveal';

const Reveal = ({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) => {
	const [ref, visible] = useReveal();

	return (
		<Tag
			ref={ref}
			className={`reveal ${visible ? 'is-visible' : ''} ${className}`.trim()}
			style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
			{...rest}
		>
			{children}
		</Tag>
	);
};

export default Reveal;
