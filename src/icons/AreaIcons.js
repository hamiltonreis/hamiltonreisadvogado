import React from 'react';

/*
  Conjunto de ícones vetoriais desenhados sob medida para o site,
  seguindo a linguagem geométrica do brasão do logotipo (linhas
  retas, cantos vivos, traço único). Nenhuma imagem externa é usada.
*/

const base = {
	fill: 'none',
	stroke: 'currentColor',
	strokeWidth: 1.4,
	strokeLinecap: 'round',
	strokeLinejoin: 'round',
};

export const IconTrabalhista = (props) => (
	<svg viewBox="0 0 64 64" {...props}>
		<g {...base}>
			<rect x="10" y="24" width="44" height="30" rx="2" />
			<path d="M24 24v-6a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v6" />
			<path d="M10 34h44" />
			<path d="M28 34v6h8v-6" />
		</g>
	</svg>
);

export const IconPrevidenciario = (props) => (
	<svg viewBox="0 0 64 64" {...props}>
		<g {...base}>
			<path d="M32 8 12 16v14c0 14 8.4 24.6 20 28 11.6-3.4 20-14 20-28V16L32 8Z" />
			<path d="M23 32.5 29 38l12.5-13" />
		</g>
	</svg>
);

export const IconFamilia = (props) => (
	<svg viewBox="0 0 64 64" {...props}>
		<g {...base}>
			<circle cx="22" cy="18" r="6.5" />
			<circle cx="42" cy="18" r="6.5" />
			<path d="M10 46c0-8 5.5-14 12-14s12 6 12 14" />
			<path d="M30 46c0-7 5-12.5 11-12.5S52 39 52 46" />
			<path d="M32 44v10" />
			<path d="M32 54h0" />
		</g>
	</svg>
);

export const IconCriminal = (props) => (
	<svg viewBox="0 0 64 64" {...props}>
		<g {...base}>
			<path d="M14 40 34 20" />
			<path d="M28 14l8 8-14 14-8-8Z" />
			<path d="M10 44l6 6" />
			<path d="M44 20l6-6 4 4-6 6Z" />
			<path d="M8 54h20" />
		</g>
	</svg>
);

export const IconWhatsapp = (props) => (
	<svg viewBox="0 0 32 32" {...props}>
		<path
			fill="currentColor"
			d="M16.02 3C9.4 3 4 8.36 4 14.98c0 2.3.63 4.44 1.72 6.28L4 29l7.94-1.66a12.9 12.9 0 0 0 4.08.66c6.62 0 12.02-5.36 12.02-11.98C28.04 8.36 22.64 3 16.02 3Zm0 21.86c-1.9 0-3.68-.5-5.22-1.4l-.37-.22-4.7.98.99-4.58-.24-.38a9.83 9.83 0 0 1-1.5-5.28c0-5.45 4.46-9.88 9.98-9.88 5.5 0 9.98 4.43 9.98 9.88s-4.48 9.88-9.92 9.88Zm5.46-7.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.48-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.87 1.21 3.07c.15.2 2.09 3.2 5.07 4.48.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"
		/>
	</svg>
);

export const IconMenu = (props) => (
	<svg viewBox="0 0 32 32" {...props}>
		<g {...base} stroke="currentColor">
			<path d="M6 10h20" />
			<path d="M6 16h20" />
			<path d="M6 22h20" />
		</g>
	</svg>
);

export const IconClose = (props) => (
	<svg viewBox="0 0 32 32" {...props}>
		<g {...base}>
			<path d="M8 8l16 16" />
			<path d="M24 8 8 24" />
		</g>
	</svg>
);

export const IconArrow = (props) => (
	<svg viewBox="0 0 32 32" {...props}>
		<g {...base}>
			<path d="M6 16h20" />
			<path d="M18 8l8 8-8 8" />
		</g>
	</svg>
);

export const IconShield = (props) => (
	<svg viewBox="0 0 64 64" {...props}>
		<g {...base}>
			<path d="M32 6 10 14v16c0 15 9.4 24.6 22 28 12.6-3.4 22-13 22-28V14L32 6Z" />
			<path d="M32 20v24" />
			<path d="M22 26h20" />
		</g>
	</svg>
);
