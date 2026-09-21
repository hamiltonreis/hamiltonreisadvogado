const site = {
	nome: 'Hamilton Reis Advocacia',
	advogado: 'Dr. Hamilton Reis',
	telefoneExibicao: '(83) 98798-0661',
	whatsappNumero: '5583987980661',
	instagram: 'https://instagram.com/hamiltonreis.adv',
	estados: ['Paraíba', 'Pernambuco', 'Rio Grande do Norte'],
	linksUteis: [
		{ label: 'OAB Paraíba', href: 'https://www.oabpb.org.br' },
		{ label: 'Ministério Público da Paraíba', href: 'https://www.mp.pb.gov.br/' },
		{ label: 'Tribunal de Justiça da Paraíba', href: 'https://www.tjpb.jus.br/' },
	],
};

export const whatsappLink = (mensagem) => {
	const base = `https://wa.me/${site.whatsappNumero}`;
	return mensagem ? `${base}?text=${encodeURIComponent(mensagem)}` : base;
};

export default site;
